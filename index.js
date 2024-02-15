// Added dotenv package
require('dotenv').config();

const port = process.env.PORT || 5000;

// Require http api from default node js
const http = require('http')


const app = require('./src/app');

const server = http.createServer(app)
const {run} = require('./src/db/dbConfig');

run().catch(console.dir);