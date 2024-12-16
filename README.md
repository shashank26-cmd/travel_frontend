
---

# **Tour Booking System**

This project is a tour booking system that allows users to book packages, generate invoices in PDF format, and download them directly. It also includes an **admin dashboard** accessible via `/admin` for managing tour packages.

---

## **Features**

### **User Features**
- Book tour packages.
- Generate and download invoices in PDF format.
- View available packages.

### **Admin Features**
- Access the **Admin Dashboard** at `/admin`.
- Add new packages and delete existing ones.
- Hardcoded admin authentication managed via **Postman** or similar tools.

---

## **Installation**

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- A package manager (npm or yarn)
- React.js for the frontend

---

### **Setup Instructions**

#### **Backend Installation**
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory:
   ```env
   PORT=5001
   MONGO_URI=<your-mongodb-uri>
   ```
   - Replace `<your-mongodb-uri>` with your MongoDB connection string.

4. Start the server:
   ```bash
   npm start
   ```

#### **Frontend Installation**
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` directory:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   ```
4. Start the React development server:
   ```bash
   npm start
   ```

---

## **API Endpoints**

### **Admin Authentication**
The admin functionality includes hardcoded authentication for performing sensitive operations. Use **Postman** or a similar tool to send a `POST` request with the admin credentials.


#### **1. Admin Page**
- **Endpoint**: `GET /admin`  
- **Description**: Displays the admin page where you can manage tour packages by adding or deleting them.  
- **URL**:  
  ```http
  http://localhost:5001/admin
  ```

---

#### **2. Admin Login**
- **Endpoint**: `GET /login`  
- **Description**: Authenticates the admin user using Basic Authentication.  
- **URL**:  
  ```http
  http://localhost:5001/login
  ```

- **Authorization**:  
  - **Type**: Basic Auth  
  - **Username**: `<username>`  
  - **Password**: `<password>`  

> Replace `<username>` and `<password>` with the hardcoded credentials in the code.

---

### **Example Usage in Postman**

1. **To access the admin login:**
   - Set the request method to `GET`.
   - Enter the URL: `http://localhost:5001/login`.
   - In the **Authorization** tab:
     - Select **Basic Auth**.
     - Enter the username and password.

2. **To view the admin page:**
   - Set the request method to `GET`.
   - Enter the URL: `http://localhost:5001/admin`.
   - Ensure you are authenticated by performing the login step first.

---

### **Booking Endpoints**

1. **Create a Booking**
   - **URL**: `/api/bookings`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "name": "John Doe",
       "email": "john@example.com",
       "phone": "1234567890",
       "travelers": 2,
       "packageId": "12345"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Booking created successfully!",
       "bookingId": "60f5e94f1234567890abcd",
       "pdfUrl": "/api/bookings/invoice/60f5e94f1234567890abcd"
     }
     ```

2. **Download Invoice**
   - **URL**: `/api/bookings/invoice/:bookingId`
   - **Method**: `GET`
   - **Response**: PDF file for download.

3. **Get All Bookings**
   - **URL**: `/api/bookings`
   - **Method**: `GET`
   - **Response**: List of all bookings.

---

### **Admin Package Management Endpoints**

1. **Access Admin Page**
   - **URL**: `/admin`
   - **Description**: Opens the admin dashboard for managing packages.
   - **Features**:
     - Add a new package.
     - Delete an existing package.

2. **Create a Package**
   - **URL**: `/api/packages`
   - **Method**: `POST`
   - **Request Body**:
     ```json
     {
       "title": "Exotic Bali",
       "price": 500,
       "description": "A 5-day tour in Bali",
       "imageUrl": "http://example.com/bali.jpg"
     }
     ```
   - **Response**:
     ```json
     {
       "message": "Package created successfully"
     }
     ```

3. **Delete a Package**
   - **URL**: `/api/packages/:id`
   - **Method**: `DELETE`
   - **Response**:
     ```json
     {
       "message": "Package deleted successfully"
     }
     ```

---

## **Admin Dashboard**

### Accessing the Admin Dashboard:
- Navigate to `/admin` in your browser to access the admin panel.
- Features include:
  - **Add Package**: Create a new tour package.
  - **Delete Package**: Remove a package from the database.
  
**Note**: The admin functionality is secured with a hardcoded login via API calls. You must authenticate as the admin using Postman before performing any admin operations.

---

## **Technologies Used**

### **Backend**
- Node.js with Express.js
- MongoDB and Mongoose
- PDFKit for generating PDF invoices

### **Frontend**
- React.js for building the user interface
- Axios for making HTTP requests

---

## **Running the Application**

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```
2. Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```
3. Open the application:
   - User interface: `http://localhost:3000`
   - Admin dashboard: `http://localhost:3000/admin`

---

## **Troubleshooting**

1. **PDF Not Downloading**:
   - Ensure the backend server is running and the invoice file path is correct.

2. **Admin Page Not Accessible**:
   - Make sure the frontend and backend servers are running, and the admin login has been authenticated via Postman.

3. **MongoDB Connection Issues**:
   - Verify the MongoDB URI in the `.env` file.

4. **React App API Errors**:
   - Ensure the backend URL in the frontend `.env` matches the running backend server.

---
