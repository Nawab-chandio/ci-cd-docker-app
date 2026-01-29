const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const authRoutes = require('./routes/auth');

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/mydb";

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello from backend!"));
app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log("Backend running on port 5000"));
