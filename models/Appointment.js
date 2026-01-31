const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
 time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  patient:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User'

  },
  doctor:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
    required:true,
  },
},
 {timestamps:true}

);

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;