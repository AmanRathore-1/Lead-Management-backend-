require("dotenv").config();
const express = require("express");
const connectDB = require("./DB_Connection/mongoo_connect.js");
const ServerListening=require("./DB_Connection/ServerListening.js");
const Leads=require("./Routes/Route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Route 
app.use("/",Leads);

// Start server after DB connects
async function startServer() {
  try {
    await connectDB();
    await ServerListening(app);
    
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exit(1);
  }
}

startServer();
