/*
// stores/useReservationStore.js
import { defineStore } from 'pinia'
import axios from 'axios'
// import dotenv from 'dotenv'
// dotenv.config()

// const API_URL = process.env.API_URL || 'http://localhost:3000/api'

export const useReservationStore = defineStore('reservation', {
  state: () => ({
    reservations: [],
    loading: false,
    error: null
  }),

  getters: {
    getAllReservations: (state) => {state.reservations},
    getLoading: (state) => state.loading,
    getError: (state) => state.error
  },

  actions: {
    async fetchAllReservations() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('http://localhost:3000/reservations')
        // const res = await axios.get(`${API_URL}/reservations`)
        this.reservations = res.data
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },

    async fetchReservationsByRoom(room_no) {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(`http://localhost:3000/reservations/${room_no}`)
        //const res = await axios.get(`${API_URL}/reservations/${room_no}`)
        this.reservations = res.data
      } catch (err) {
        this.error = err.message
      } finally {
        this.loading = false
      }
    },

    async addReservation(data) {
      try {
        const res = await axios.post('http://localhost:3000/reservations', data)
        //const res = await axios.post(`${API_URL}/reservations`, data)
        this.reservations.push(res.data)
      } catch (err) {
        this.error = err.message
      }
    },

    async updateReservation(id, data) {
      try {
        await axios.put('http://localhost:3000/reservations/${id}', data)
        //await axios.put(`${API_URL}/reservations/${id}`, data)
        const index = this.reservations.findIndex(r => r.id === id)
        if (index !== -1) {
          this.reservations[index] = { id, ...data }
        }
      } catch (err) {
        this.error = err.message
      }
    },

    async deleteReservation(id) {
      try {
        await axios.delete('http://localhost:3000/reservations/${id}')
        //await axios.delete(`${API_URL}/reservations/${id}`)
        this.reservations = this.reservations.filter(r => r.id !== id)
      } catch (err) {
        this.error = err.message
      }
    }
  }
})

*/


import { timestampToISOString, formatDateString, calculateCheckOutTime  } from 'src/utils/DateFormatter'
import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = "http://192.168.1.5:3000/api"

export const useReservationStore = defineStore('reservation', {
  state: () => ({
    var: "hello",
    reservations: [],
    formattedReservations: [],
  }),


  actions: {
    greetSomeone(name) {
      return this.var + " " + name
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

    formatReservations() {




      this.formattedReservations = this.reservations.map((res, index) => {
        let checkInDate = formatDateString(timestampToISOString(res.checkInDateTime)).date
        let checkInTime = formatDateString(timestampToISOString(res.checkInDateTime)).time

        let checkOutDate = formatDateString(calculateCheckOutTime(timestampToISOString(res.checkInDateTime), res.hours)).date
        let checkOutTime = formatDateString(calculateCheckOutTime(timestampToISOString(res.checkInDateTime), res.hours)).time

        return {
          id: index + 1,
          room_no: res.room_no,
          check_in_date: checkInDate,
          check_in_time: checkInTime,
          check_out_date: checkOutDate,
          check_out_time: checkOutTime,
          hours: res.hours,
        }
      })
    }


  }
})
