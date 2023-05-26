const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MasterSchema = new Schema({

    eventName : {
        type : String,
        required : true
    },
    participants : {
        type : String,
        required : true
    },
    closingDate : {
        type : String,
        required : true
    },
    closingTime : {
        type : String,
        required : true
    },
    APlus : {
        type : Number,
        required : true
    },
    BPlus : {
        type : Number,
        required : true
    },
    OPlus : {
        type : Number,
        required : true
    },
    ABPlus : {
        type : Number,
        required : true
    },
    AMynus : {
        type : Number,
        required : true
    },
    BMynus : {
        type : Number,
        required : true
    },
    OMynus : {
        type : Number,
        required : true
    },
    ABMynus : {
        type : Number,
        required : true
    },
    doctorIncharge : {
        type : String,
        required : true
    }
})

const Master = mongoose.model("CloseEvent",MasterSchema)
module.exports = Master;