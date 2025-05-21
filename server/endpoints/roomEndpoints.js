import express from 'express'
import { db } from '../firebase.js'
import { collection, getDocs } from 'firebase/firestore'

const router = express.Router()

router.get('/rooms', async (req, res) => {
    try {
        const roomsSnapshot = await getDocs(collection(db, 'rooms'));
        const rooms = [];
        roomsSnapshot.forEach(doc => {
            rooms.push(doc.data())
        })
        res.json(rooms)
    } catch (error) {
        console.log('Error fetching rooms:', error)
        res.status(500).json({ error: 'Failed to fetch rooms' })
    }
})

export default router