# Tour Booking System

This project is a web-based application for booking tour packages, generating PDF invoices, and downloading them. It uses Node.js, Express.js, MongoDB, and React.js.

---

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm (Node Package Manager)
- React.js

---

### Backend Setup
1. Navigate to the backend repo and clone it:
   ```bash
   cd backend
2 Install dependencies:
bash
Copy code
npm install
3 Create a .env file in the backend directory:
plaintext
Copy code
PORT=5001
MONGO_URI=<your-mongodb-uri>
Replace <your-mongodb-uri> with your MongoDB connection string.
4 Start the server:
bash
Copy code
npm start

now go to frontend repo clone that 

and replace url in api/index.js
 to http://localhost:5001/
 (port u have mention in backend)
 and npm i
 now run npm run dev to start frontend




API Endpoints
Booking Endpoints
Create Booking: POST /api/bookings

Request Body:
json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "travelers": 2,
  "packageId": "12345"
}
Response:
json
Copy code
{
  "message": "Booking created successfully!",
  "bookingId": "1234567890",
  "pdfUrl": "/api/bookings/invoice/1234567890"
}
Download Invoice: GET /api/bookings/invoice/:bookingId

Returns a PDF invoice for the specified booking.
Get All Bookings: GET /api/bookings

Fetches all bookings.
Get Booking by ID: GET /api/bookings/:id

Fetches booking details by ID.
Delete Booking: DELETE /api/bookings/:id

Deletes a booking by ID.
Technologies Used
Backend
Node.js: Backend runtime.
Express.js: API framework.
MongoDB: Database.
Mongoose: ODM for MongoDB.
PDFKit: For generating invoices in PDF format.
Frontend
React.js: User interface.
Axios: For API requests.
Troubleshooting
PDF Not Downloading:
Ensure pdfUrl is correct and accessible.
MongoDB Errors:
Verify MONGO_URI in .env.
Frontend API Issues:
Confirm REACT_APP_API_BASE_URL matches backend URL.
Future Enhancements
Add user authentication.
Email invoices directly to users.
Improve UI/UX for better user experience.
Copy code











ChatGPT

 
