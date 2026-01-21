const mongoose = require("mongoose");

const DoctorsSchema = new mongoose.Schema({
 name: {
    type: String,
    required: true,
  },
  specialty: {
    type: String,
    required: true,
  },
   experience: {
    type: String,
    required: true,
  },
});

const Doctors = mongoose.model("Doctors", DoctorsSchema);

module.exports = Doctors;