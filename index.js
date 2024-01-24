require('dotenv').config();
const port = process.env.PORT || 5000;
const http = require('http')
const app = require('./src/app');
const server = http.createServer(app)
const {run} = require('./src/config/dbConfig');

run().catch(console.dir);