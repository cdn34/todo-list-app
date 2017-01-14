const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost/todo-list-app";

const mongooseConnect = _ => {
    console.log('Mongoose started');
    mongoose.connect(mongoUrl);
}

module.exports = {
    mongooseConnect : mongooseConnect,
    mongoUrl : mongoUrl
};