const User = require("../model/User");

exports.createUser = async (req, res) => {
  try {
    const user = new User(req.body);  // It will create an object for new users.
    await user.save();
    res.status(201).json({ message: "User Created Successfully.." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ message: "User not found! " });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      res.status(404).json({ message: "User not found! " });
    }

    res.json({ message: "User Deleted Successfully..." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

        if(!user){
            res.status(404).json({ message : "User not found" });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
