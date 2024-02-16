//import all packages

const express = require('express');
require('dotenv').config();

// Initialize the app here
const app = express();

// Set the server port here
const port = process.env.PORT || 5000;

// Import Custom Middleware 
const corsMiddleware = require('./middleware/cors/cors');

// Import All Route 
const adoptPage = require('./routes/adoptPage/index');
const userRegister = require('./routes/user/index')
const petlistings = require('./routes/petlistings')
const donation = require('./routes/donation');
const userAction = require('./routes/userAction')
const petCommunity=require('./routes/petCommunity/index')
const feedback=require('./routes/feedbacks/index')

// Apply Middleware Through This Line
corsMiddleware(app);


// Adopt page route use below
app.use(adoptPage);

// User registration rout use below
app.use(userRegister);

//pet information
app.use(petlistings);

//donation information

app.use(donation);

// User Action 

app.use(userAction);
// pet Community
app.use(petCommunity)
// user feedback
app.use(feedback)











app.get('/helth', async (req, res) => {
    res.send('Server Is Running')
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})



app.all('*', async (req, res, next) => {

    const error = new Error(`The requested url is invalid ${req.url}`);
    error.status = 404;
    next(error)

})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message })
})


