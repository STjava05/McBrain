require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();




// Connect to database
connectDB();
app.use(express.json());
app.use(cors());


app.use('/product', require('./routes/productRoute'));
app.use('/post', require('./routes/postRoute'));
app.use('/form', require('./routes/formRoute'));


app.listen(5000, () => console.log('Server running on port 5000'));