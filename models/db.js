const mongoose = require('mongoose');

mongoose.connect('mongodb://dbuser:pushkar@123@cluster0.evmhd.mongodb.net/EmployeeDB?retryWrites=true&w=majority' , {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then((db) => console.log("db is connected"))
 .catch((err) => console.log(err));
 
require('./employee.model');