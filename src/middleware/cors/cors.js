const express = require('express');
const cors = require('cors');

const corsMiddleware = (app)=>{
    app.use(cors({
        origin: '*',
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    }))

    app.use(express.json())
}

module.exports = corsMiddleware