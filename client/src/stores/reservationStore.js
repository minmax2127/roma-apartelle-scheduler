
import { timestampToISOString, formatDateString, calculateCheckOutTime  } from 'src/utils/DateFormatter'
import { defineStore } from 'pinia'
import axios from 'axios'

// const API_URL = "http://192.168.1.5:3000/api"
const API_URL = "https://roma-apartelle-scheduler.onrender.com/api"

export const useReservationStore = defineStore('reservation', {
  state: () => ({
    reservations: [],
    loading: false
  }),


  actions: {

    // add reservation
    async addReservation(reservationData) {
      try {
        const response = await axios.post(`${API_URL}/reservations`, reservationData)
        return response.data  // optional: return the added data
      } catch (error) {
        console.error('Error adding reservation:', error)
        throw error
      }
    },

    async fetchReservations() {
      try {
        const response = await axios.get(`${API_URL}/reservations`)
        this.reservations = response.data
      } catch (error) {
        console.error('Error fetching reservations:', error)
        return null;
      }
    },

    async fetchReservationsByRoomNo(room_no) {
      try {
        this.loading = true
        const response = await axios.get(`${API_URL}/reservations/${room_no}`)
        this.reservations = response.data
      } catch (error) {
        console.error('Error fetching reservations:', error)
        return null;
      } finally {
        this.loading = false
      }
    },

    formatReservations(reservationsList) {
      return reservationsList.map((res, index) => {
        const checkIn = formatDateString(timestampToISOString(res.checkInDateTime))
        const checkOut = formatDateString(
          calculateCheckOutTime(timestampToISOString(res.checkInDateTime), res.hours)
        )

        return {
          id: index + 1,
          room_no: res.room_no,
          check_in_date: checkIn.date,
          check_in_time: checkIn.time,
          check_out_date: checkOut.date,
          check_out_time: checkOut.time,
          hours: res.hours,
          fan_or_ac: res.fan_or_ac
        }
      })
    },


    getReservationsByDate(reservationsList, targetDate) {
      // const target = new Date(targetDate)
      // const targetDateOnly = target.toISOString().split('T')[0] // YYYY-MM-DD

      return reservationsList.filter(res => {
        const checkInDate = new Date(res.checkInDateTime.seconds * 1000)
        const checkInDateOnly = checkInDate.toISOString().split('T')[0]
        return checkInDateOnly === targetDate
      })
    },



  }
})
