const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();

// Middleware to serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

//EJS as the view engine
app.set('view engine', 'ejs');

//views directory
app.set('views', path.join(__dirname, 'views'));

//routes for each page
app.get("/", (req, res) => {
    res.render('index');
});

app.get("/index", (req, res) => {
    res.render('index');
});

app.get("/services", (req, res) => {
     res.render('services');
 });

 app.get("/sign_in", (req, res) => {
    res.render('sign_in');
});

app.get("/sign_up", (req, res) => {
    res.render('sign_up');
});

app.get("/testimonial", (req, res) => {
    res.render('testimonial');
});

app.listen(3000,(req,res)=>{
    console.log("Server is running at port 3000");
    });