const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');
const multer = require('multer');

const app = express();


const fileStorage = multer.diskStorage({
    destination: (req, fb, cb) => {
        cb(null, 'images');
    },
    filename: (req, fb, cb) => {
        cb(null, new Date().toISOString(+'-' + file.originalname));

    }
})

const fileFilter = (req, fb, cb) => {
    if (file.mimetype === 'images/png' || file.mimetype === 'images/jpeg' || file.mimetype === 'images/jpg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

// app.use(bodyParser.urlencoded()); // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

app.listen(8080);