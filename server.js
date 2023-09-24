const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const InputModel = require("./model.js");

const port = process.env.PORT || 3000;
const app=express()

//Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/input',{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

  // Middleware to parse JSON data
app.use(bodyParser.json());

// Serve static files (e.g., your HTML file)
app.use(express.static('index.html'));

// Handle form submission
app.post('/submit', (req, res) => {
    const data = req.body;
    console.log(data);
  
    // Create a new document and save it to MongoDB
    const newData = new InputModel({
      text: data.text,
    });

    newData.save()
    .then(() => {
      console.log('Data saved to MongoDB:', newData);
      res.send('Data saved successfully.');
    })
    .catch((err) => {
      console.error('Error saving data to MongoDB:', err);
      res.status(500).send('Error saving data.qq');
    });
});

app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})