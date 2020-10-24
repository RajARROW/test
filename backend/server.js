process.env.NODE_CONFIG_DIR = "./config/env";

const express = require('express');
const app = express();
const config = require('config');
const PORT = config.get("port");


const mongoConnection = require('./config/connection');

mongoConnection();

app.use(express.json())

app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "Something went wrong";
  console.log('ss');
  res.status(err.statusCode).json({
    message: err.message
  })
})

require('./src/controllers')(app);

app.listen(PORT, () => {
  console.log(`Server listing on port ${PORT}`);
})