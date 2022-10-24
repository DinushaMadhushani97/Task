const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const vehicleRoutes = require('./routes/vehicles');

//app middleware
app.use(bodyParser.json());

app.use(cors());
//route middleware
app.use(vehicleRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://A:123@cluster0.bx1cbj3.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected');

})
.catch((err) => console.log('DB connection error',err));


app.listen(PORT, () =>{
    console.log(`App is running on ${PORT}`);    
});