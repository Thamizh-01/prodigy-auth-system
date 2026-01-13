# Secure Authentication System - Task 01

A Node.js/Express.js backend providing secure user registration and login functionality using JWT and MongoDB.

## 🚀 Features
- **User Registration:** Securely hashes passwords using Bcrypt.
- **User Login:** Authenticates users and generates JWT access tokens.
- **Middleware:** Custom authentication middleware to protect private routes.
- **Database:** Fully integrated with MongoDB Atlas (Cloud).

## 🛠️ Tech Stack
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Security:** JWT, Bcryptjs, Dotenv

## 🚦 API Endpoints
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| POST | `/api/auth/register` | Create a new user account |
| POST | `/api/auth/login` | Login and receive a JWT token |
| GET | `/api/users/profile` | Access protected profile data (Requires Token) |
