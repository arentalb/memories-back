# Memory Lane Backend

This is the backend service for the Memory Lane application, designed to handle data storage and retrieval for users
sharing their cherished memories. It provides the necessary API endpoints to interact with the frontend application.

## Features

- API Endpoints: Provides endpoints for posting and retrieving memory entries.


- Database Integration: Uses MongoDB for storing user data.


- CORS Enabled: Ensures the backend can handle requests from different domains, specifically the deployed frontend.

## Technologies Used

- Express: A web application framework for Node.js, designed for building web applications and APIs.
- Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- Body-parser: Middleware to handle JSON, Raw, Text, and URL encoded form data.
- Cors: Package to enable CORS (Cross-Origin Resource Sharing) with various options.
- Dotenv: Loads environment variables from a .env file into process.env.
- Nodemon: Utility that monitors for any changes in your source and automatically restarts your server.

## Setup

To run this project locally, follow these steps:

- Clone the repository:  
  git clone https://github.com/arentalb/memories-back
  cd memories-back


- Create a .env file in the root directory:  
  ``` MONGODB_CONNECTION_URL=<mongodb-url> ```
  Replace <mongodb-url> with your actual MongoDB connection string.


- Install dependencies:  
  ```npm install  ```


- Start the server:  
  ``` npm run start```

This will launch the server using Nodemon, which will automatically restart if you make any changes.

The application will be available at http://localhost:6060.

## Important Notes

- Database Connection: The .env file must be properly set up with the MONGODB_CONNECTION_URL environment variable to
  connect to your MongoDB database.


- Security Note: Currently, the backend does not have security measures like authentication implemented. These features
  are planned for a future update to enhance the security of the application.

## Deployment

- Memory Lane Backend is deployed on Railway.


- This deployment is configured to serve the frontend application, which can be accessed
  at  [Memory Lane Live ](https://memorylanee.netlify.app/),  [Memory Lane Repo](https://github.com/arentalb/memories-front).
