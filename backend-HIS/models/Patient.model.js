const mongoose = require("mongoose");
const PatientSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: [true],
    },
    Phone: {
      type: Number,
      required: [true],
    },
    Gender: {
      type: String,
      required: [true],
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;
