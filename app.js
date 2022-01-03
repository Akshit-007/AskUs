const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts.js');
const userRoutes = require('./routes/users.js');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8000;

// const CONNECTI ON_URL = 'mongodb+srv://akshit_007:admin@cluster0.6oksg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { app.listen(PORT, () => { console.log(`Server running at ${PORT}`) }) })
    .catch((err) => { console.log(err) })


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get('/', (req, res) => {
    res.send('Welcome to askUs API');
});

app.use('/posts', postRoutes);
app.use('/user', userRoutes);



// mongoose.set('useFindAndModify', false)


app.get('/', function (req, res) {
    res.status(200).send('Welcome BVMites');
})


