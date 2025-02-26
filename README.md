# Appointment Booking System (Backend)

This is the backend of the Appointment Booking System, built with Node.js, Express.js, and MongoDB/MySQL. It handles appointment scheduling, manages date-time slots, and provides a REST API for frontend integration.

# 🛠️ Features

Appointment Management: Create, update, and delete appointments.

Slot Availability: Mark booked slots as unavailable.

REST API: Provides endpoints for frontend integration.

Database Integration: Supports MongoDB.

# 📁 Project Structure

```
appointment-server/
│
│── models/            # Database models
│── routes/            # API routes
│── index.js           # Entry point
│
├── .env.example       # Environment variable template
│
├── package.json       # Project metadata and dependencies
│
├── .gitignore         # Ignored files/folders
│
└── README.md          # Project documentation
```

# Installation

Clone the repository:

git clone https://github.com/Kalyani-Nandi/appointment-server.git
cd appointment-server

# Install dependencies:

npm install

# 🧪 Environment Variables

Ensure the following variables are set in your .env file:

Set up environment variables:

Copy .env.example to .env

```
MONGO_URI=

PORT=5000
```

# Start the development server:

npm run dev (for locall)

The API will be available at http://localhost:5000.

# 📌 API Endpoints

GET /api/appointments - Get all appointments 

POST /api/appointments - Create a new appointment and also update the appointment

DELETE /api/appointments/:timeSlot - Delete an appointment 

GET /api/appointments/:timeSlot - Get By appointment time 


