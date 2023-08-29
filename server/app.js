const dotenv = require('dotenv');
const cors = require('cors')
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser')
const multer = require('multer');
const app = express();
dotenv.config({ path: './config.env' });

require('./db/conn');

app.use(cors());
app.use(
    cors({
      origin: "https://bhaibhopalclient.onrender.com",
    })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('public/upload'));
app.use(
    cors({
        origin: "*",
    })
)
app.use(express.json());

app.use(require('./routes/auth'));

const PORT = process.env.PORT || 5000;
// const BasicDetail = require('./model/basicDetailSchema');


app.get('/', (req, res) => {
    res.send('hello from server');
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
