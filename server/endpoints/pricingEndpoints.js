import express from 'express';
import { db } from '../firebase.js';
import { collection, getDocs, query, where } from 'firebase/firestore';


const router = express.Router();


// Fetch all reservations
router.get('/pricing', async (req, res) => {
  try {
    const pricingSnapshot = await getDocs(collection(db, 'pricing'))
    const pricing = []
    pricingSnapshot.forEach(doc => {
      pricing.push(doc.data())
    })
    res.json(pricing)
  } catch (error) {
    console.log('Error fetching pricing:', error)
    res.status(500).json({ error: 'Failed to fetch pricing' })
  }
})



export default router;