import express from 'express'
import { db } from '../firebase.js'
import { collection, getDocs, query, where } from 'firebase/firestore' // ✅ Include query and where

const router = express.Router()

// Fetch all reservations
router.get('/reservations', async (req, res) => {
  try {
    const reservationsSnapshot = await getDocs(collection(db, 'reservations'))
    const reservations = []
    reservationsSnapshot.forEach(doc => {
      reservations.push(doc.data())
    })
    res.json(reservations)
  } catch (error) {
    console.log('Error fetching reservations:', error)
    res.status(500).json({ error: 'Failed to fetch reservations' })
  }
})

// Fetch reservations for a specific room number
router.get('/reservations/:room_number', async (req, res) => {
  try {
    const roomNumber = parseInt(req.params.room_number)
    const reservationsRef = collection(db, 'reservations')
    const q = query(reservationsRef, where('room_no', '==', roomNumber)) // ✅ Use query to filter by room number
    const querySnapshot = await getDocs(q)

    const reservations = []
    querySnapshot.forEach(doc => {
      reservations.push(doc.data())
    })

    res.status(200).json(reservations)
  } catch (error) {
    console.error('Error fetching reservations for room:', error)
    res.status(500).json({ error: 'Failed to fetch reservations for the room' })
  }
})

// ✅ ADD a new reservation
router.post('/reservations', async (req, res) => {
  try {
    const { room_no, checkInDateTime, hours } = req.body

    if (!room_no || !checkInDateTime || !hours) {
      return res.status(400).json({ error: 'Missing reservation fields' })
    }

    const newReservation = {
      room_no,
      checkInDateTime,
      hours
    }

    const docRef = await addDoc(reservationsRef, newReservation)
    res.status(201).json({ id: docRef.id, ...newReservation })
  } catch (error) {
    console.error('Error adding reservation:', error)
    res.status(500).json({ error: 'Failed to add reservation' })
  }
})

// ✅ UPDATE a reservation
router.put('/reservations/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { room_no, checkInDateTime, hours } = req.body

    const reservationRef = doc(db, 'reservations', id)

    await updateDoc(reservationRef, {
      room_no,
      checkInDateTime,
      hours
    })

    res.status(200).json({ message: 'Reservation updated successfully' })
  } catch (error) {
    console.error('Error updating reservation:', error)
    res.status(500).json({ error: 'Failed to update reservation' })
  }
})

// ✅ DELETE a reservation
router.delete('/reservations/:id', async (req, res) => {
  try {
    const { id } = req.params
    const reservationRef = doc(db, 'reservations', id)

    await deleteDoc(reservationRef)

    res.status(200).json({ message: 'Reservation deleted successfully' })
  } catch (error) {
    console.error('Error deleting reservation:', error)
    res.status(500).json({ error: 'Failed to delete reservation' })
  }
})



export default router
