# Books API

A simple Node.js backend API for managing books using Express and MongoDB.

## Installation

```bash
npm install
```

## Setup

1. Create a `.env` file in the root directory
2. Add your MongoDB connection string and other environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

## Running the Server

```bash
npm start
```

The server will start on the configured port (default: 5000).

## Project Structure

- `server.js` - Main server file
- `config/` - Database configuration
- `models/` - MongoDB models
- `controllers/` - Request handlers
- `routes/` - API routes
