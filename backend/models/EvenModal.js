const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MasterSchema = new Schema({

    eventName : {
        type : String,
        required : true
    },
    orgTeam : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    time : {
        type : String,
        required : true
    }
    ,
    contact : {
        type : String,
        required : true
    },
    filePath : {
        type : String,
        required : true
    }
})

const Master = mongoose.model("events",MasterSchema)
module.exports = Master;