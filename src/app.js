//import all packages

const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const corsMiddleware = require('./middleware/cors/cors');
const testRoutes = require('./routes/test'); 


corsMiddleware(app);

app.use(testRoutes);





app.get('/helth', async(req,res)=>{
    res.send('Server Is Running')
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})



app.all('*', async(req,res,next)=>{
    
    const error = new Error (`The requested url is invalid ${req.url}`);
    error.status = 404;
    next(error)
    
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message })
})


