const mongoose = require('mongoose')

const connection = () => {

    mongoose.connect('mongodb+srv://faisalbadi57:Faisal@cluster0.jbmro.mongodb.net/task1?retryWrites=true&w=majority&appName=Cluster0')

    console.log("connected");

}

module.exports = connection;