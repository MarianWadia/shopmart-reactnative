const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("connected to database");
}).catch((err)=>{
    console.log(`error connecting to database ${err}`);
})


app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})