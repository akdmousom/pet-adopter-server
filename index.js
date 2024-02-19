// Added dotenv package
require('dotenv').config();

const port = process.env.PORT || 5000;

// Require http api from default node js
const http = require('http')

// This app come from src folder.
const app = require('./src/app');

//This code help us to build a server
const server = http.createServer(app)

// Import the mongo db run method
const {run} = require('./src/db/dbConfig');

run().catch(console.dir);