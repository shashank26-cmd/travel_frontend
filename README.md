# Travel Application

This repository contains both the frontend and backend for the Travel application.

## Prerequisites

- Node.js (v16 or higher)
- MongoDB

## Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Configure Environment Variables**  
   Create a `.env` file in the root directory and add the following:  
   ```env
   MONGO_URL=<your-mongodb-connection-string>
   PORT=<your-port-number>
   ```

4. **Run the Application**  
   ```bash
   npm start
   ```

5. **Access the Application**  
   - Backend: Runs at `http://localhost:<PORT>`
   - Frontend: Available as part of the same repository and integrated automatically.

## Notes

- Ensure MongoDB is running before starting the application.
- For production, update the environment variables accordingly.

