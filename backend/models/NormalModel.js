const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NormalSchema = new Schema({

    nid : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    nic : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contactno : {
        type : String,
        required : true
    },
    bloodtype : {
        type : String,
        required : true
    },   
    location : {
        type : String,
        required : true
    },
    hospital : {
        type : String,
        required : true
    },
    bloodpint : {
        type : String,
        required : true
    }
   
    
})

const Normal = mongoose.model("normal",NormalSchema)
module.exports = Normal;