import express from "express";
import Appointment from "../models/Appointment.js";

const router = express.Router();

// GET all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET appointment by timeSlot
router.get("/:timeSlot", async (req, res) => {
  try {
    const { timeSlot } = req.params;
    const appointment = await Appointment.findOne({ timeSlot });
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// POST - Create or update appointment
router.post("/", async (req, res) => {
  try {
    const { timeSlot, firstName, lastName, phoneNumber } = req.body;

    if (!timeSlot || !firstName || !lastName || !phoneNumber) {
      return res.status(400).json({
        error: "Fields are required",
      });
    }

    const updatedAppointment = await Appointment.findOneAndUpdate(
      { timeSlot },
      { firstName, lastName, phoneNumber },
      { new: true, upsert: true }
    );

    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: "Error saving appointment" });
  }
});

// DELETE - Clear appointment
router.delete("/:timeSlot", async (req, res) => {
  try {
    const { timeSlot } = req.params;
    await Appointment.findOneAndDelete({ timeSlot });
    res.status(200).json({ message: "Appointment cleared" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting appointment" });
  }
});

export default router;
