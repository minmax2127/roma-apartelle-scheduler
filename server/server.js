import express from 'express';
import cors from 'cors';
import roomsRoute from './endpoints/roomEndpoints.js';
import reservationsRoute from './endpoints/reservationEndpoints.js';
import pricingRoute from './endpoints/pricingEndpoints.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Define routes

app.use('/api', roomsRoute);
app.use('/api', reservationsRoute);
app.use('/api', pricingRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




/*
ROUTE LIST

GET /api/rooms - Fetch all rooms
GET /api/pricing - Fetch pricing data


GET /api/reservations - Fetch all reservations
GET /api/reservations/:room_number - Fetch reservations for a specific room number
POST /api/reservations { room_no, checkInDateTime, hours } - Add a new reservation
PUT /api/reservations/:id { room_no, checkInDateTime, hours } - Update an existing reservation
DELETE /api/reservations/:id - Delete a reservation


*/