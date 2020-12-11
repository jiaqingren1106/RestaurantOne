'use strict';

const mongoose = require('mongoose');
const url = "mongodb+srv://Zhiyuan:Szy0828.@cluster0.i3y5t.mongodb.net/Restaurant?retryWrites=true&w=majority"
const url2 = 'mongodb://localhost:27017/Phase2'

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then((con) => {
    console.log('DB connection successful');
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = { mongoose }
