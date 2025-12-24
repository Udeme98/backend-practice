# Books API

A Node.js backend API for managing books with user authentication using Express and MongoDB.

## Installation

```bash
npm install
```

## Setup

1. Create a `.env` file in the root directory
2. Add your MongoDB connection string and other environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5001
   ```

## Running the Server

```bash
npm run dev
```

The server will start on the configured port (default: 5001) with automatic restart on file changes using Nodemon.

## Features

- Book management (Create, Read, Update, Delete)
- User authentication with JWT
- Password hashing with bcryptjs
- Environment variable configuration with dotenv

## API Endpoints

- **Books**: `/api/books`
- **Authentication**: `/api/auth`

## Project Structure

- `server.js` - Main server file
- `config/` - Database configuration
- `models/` - MongoDB models (Book)
- `controllers/` - Request handlers
- `routes/` - API routes (bookRoutes, authRoutes)

## Technologies Used

- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM
- JWT - Authentication
- bcryptjs - Password hashing
- Nodemon - Development tool
