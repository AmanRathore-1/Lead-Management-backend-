# 📊 Lead Management System - Backend

A backend application built with **Node.js, Express, and MongoDB (Mongoose)** to manage leads efficiently.  
This project provides APIs to **create, update, delete, and fetch leads** with input validation and MongoDB integration.  

---

## 🚀 Features
- Uses jwtToken for CreateLead and GetLeadByid Routes to generta and validate tokens
- Create new leads with validation (`express-validator`)
- Fetch all leads or a single lead by ID
- Update lead details (status, interest, etc.)
- Delete leads
- Input validation (Name, Email, Phone, etc.)
- MongoDB Atlas connection with `.env` configuration
- REST API ready for frontend or mobile integration

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas with Mongoose
- **Validation:** express-validator
- **Environment Config:** dotenv
- **Version Control:** Git & GitHub

---

## 📂 Project Structure
Lead-Management-Backend/
│── Controller/ # Business logic (CRUD for leads)
│── DB_Connection/ # MongoDB & Server connection files
│── Middleware/ # Input validation
│── Model/ # Mongoose schema
│── Routes/ # API routes
│── server.js # Entry point
│── .env # Environment variables (ignored in Git)
│── .gitignore # Ignored files/folders
│── package.json # Project metadata & dependencies
│── README.md # Documentation



---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/AmanRathore-1/Lead-Management-backend-.git
cd Lead-Management-backend-


. Install Dependencies
npm install


Configure Environment Variables

Create a .env file in the root directory:

MONGO_URI=your_mongodb_connection_string
PORT=3000

Run the Server

For production:

npm start

#All The Routes
1. Create Lead

POST /createLead

2. Get All Leads

GET /getallLead

3. Get Lead by ID

GET /getLead/:id

4. Update Lead

PUT /updateLead/:id

5. Delete Lead

DELETE /deleteLead/:id

