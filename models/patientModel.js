const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
    {
        patientID :
        {
            type : Number,
            required : true,
            unique : true
        },
        patientName : 
        {
            type : String,
            required : true
        },
        gender :
        {
            type : String,
            required : true
        },
        age :
        {
            type : Number,
            required : true
        },
        diagnosis :
        {
            type : String,
            required : true
        },
        admissionDate :
        {
            type : String,
            required : true
        }
    },
    {
        collection : "patientData"

    }
)

module.exports = mongoose.model("patientData", patientSchema)