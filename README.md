# CRUD Application using Node.js, Express.js, and MongoDB

## Description
This is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express.js, and MongoDB. It allows users to perform basic database operations via a RESTful API.

## Features
- Create a new User.
- Read all Users or a single User.
- Update an existing User.
- Delete a User.

## Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## API Endpoints

### Create a new User
```http
POST /api/users/createUser
```
**Request Body:**
```json
{
  "name": "User Name",
  "email":"email address",
  "password": "password"
}
```

### Get all Users
```http
GET /api/users/listAllUsers
```

### Get a single User by ID
```http
GET /api/users/getUserById/:id
```

### Update an User
```http
PUT /api/users/updateUserById/:id
```
**Request Body:**
```json
{
  "name": "Updated Name",
  "email": "Updated email",
  "password": "Updated password"
}
```

### Delete an User
```http
DELETE /api/users/deleteUserById/:id
```

## Folder Structure
```
crud-nodejs-express-mongodb/
│-- models/
│   ├── User.js
│-- routes/
│   ├── userRoutes.js
│-- controllers/
│   ├── UserController.js
│-- config/Mongoose
│   ├── db.js
│-- server.js
│-- package.json
│-- .env
│-- README.md
```

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv
- nodemon (for development)

