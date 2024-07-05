<<<<<<< HEAD
const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
app.get('/', function(req, res){ res.send("hello Michael")

})
=======
const express = require("express");
const mongoose = require("mongoose");
const Patient = require("./models/Patient.model.js"); // Import the Patient model
const app = express();

// middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Budapest France");
});

//routes
app.post("/api/patients", async (req, res) => {
  try {
    const newPatient = await Patient.create(req.body); // Use a different variable name here
    res.status(201).json({ newPatient }); // Respond with the newly created patient
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://owengitau02:akHrctHOZWZCAMeB@his.zdrphi1.mongodb.net/Hope_Healthcare?retryWrites=true&w=majority&appName=HIS"
  )
  .then(() => {
    console.log("Connected to MongoDb");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection Failed!", error);
  });
>>>>>>> owen
