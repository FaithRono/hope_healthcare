const mongoose = require("mongoose")
const PatientSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true] 

    },
    phone:{
        type:Number,
        required:[true]

    },
    Gender:{
        type:String,
        required:[true]
    },
},
{
    timestamps:true,
     
}
);

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;