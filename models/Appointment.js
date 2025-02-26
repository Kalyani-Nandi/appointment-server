import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    timeSlot: { type: Date, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  { versionKey: false }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
