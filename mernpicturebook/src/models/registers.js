const mongoose = require("mongoose");
const pictureSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    }

  


})

const Register = new mongoose.model("Register", pictureSchema);
module.exports = Register;