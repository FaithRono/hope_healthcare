const express = require('express');
const mongoose = require('mongoose');
const Patient = require('./models/Patient.model');
const app = express()

app.use(express.json());




app.get('/', (req, res) => {
    res.send("Hello From Budapest France")
});

app.post('/api/patients', async (req, res) => {
    try{
       const Patient = await Patient.create(req.body)
       res.status(200).json(Patient)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});


mongoose.connect("mongodb+srv://owengitau02:vq2jOaRcUYuhwrr2@cluster0.nit91kv.mongodb.net/patients_data?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("Connected to MongoDb")
    app.listen(3000, () => {
    console.log('Server is running on port 3000')
});
})
.catch(() => {
    console.log("Connection Failed!");
    });