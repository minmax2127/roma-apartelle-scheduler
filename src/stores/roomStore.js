import { defineStore } from 'pinia'
import { formatDateString, calculateCheckOutTime } from 'src/utils/DateFormatter'
import room_list from 'src/data/rooms.js'

/**
 * Pinia store for managing room data and reservations.
 * Provides state, getters, and actions for room operations.
 */
export const useRoomStore = defineStore('room', {
  state: () => ({
    // List of all rooms (imported from data)
    roomList: room_list,
    // Currently selected room (for modal/details)
    selectedRoom: null,
    fanOptions: ['Fan', 'AC'],
    setTimeOptions: [3, 6, 12],
  }),

  getters: {
    /**
     * Returns the full list of rooms.
     */
    getRoomList(state) {
      return state.roomList
    },

    getFanOptions(state) {
      return state.fanOptions
    },

    /**
     * Returns rooms on the 2nd floor.
     */
    topRooms(state) {
      return state.roomList.filter((room) => room.floor === 2)
    },

    /**
     * Returns rooms on the 1st floor.
     */
    bottomRooms(state) {
      return state.roomList.filter((room) => room.floor === 1)
    },

    // Suggestion: Add more getters for filtering by status, type, etc.
    // Example:
    // availableRooms(state) {
    //   return state.roomList.filter(room => room.isAvailable)
    // },
  },

  actions: {
    /**
     * Sets the currently selected room.
     * @param {Object} room - The room object to select.
     */
    setSelectedRoom(room) {
      this.selectedRoom = room
    },

    /**
     * Clears the selected room.
     */
    clearSelectedRoom() {
      this.selectedRoom = null
    },

    /**
     * Returns the currently selected room.
     */
    getSelectedRoom() {
      return this.selectedRoom
    },

    getReservationByRoom(roomNo) {
      const room = this.roomList.find((room) => room.no === roomNo)
      if (room) {
        return room.reservations
      }
      return []
    },

    /**
     * Adds a reservation to a room.
     * @param {Number} roomNo - Room number.
     * @param {String} checkInDateTime - Check-in date/time.
     * @param {Number} hours - Duration in hours.
     */
    addReservation(roomNo, checkInDateTime, hours) {
      const room = this.roomList.find((room) => room.no === roomNo)
      if (room) {
        room.reservations.push({
          checkInDateTime,
          hours,
        })
      }
    },

    /**
     * Removes a reservation from a room.
     * @param {Number} roomNo - Room number.
     * @param {String} checkInDateTime - Check-in date/time to remove.
     */
    removeReservation(roomNo, checkInDateTime) {
      const room = this.roomList.find((room) => room.no === roomNo)
      if (room) {
        room.reservations = room.reservations.filter(
          (reservation) => reservation.checkInDateTime !== checkInDateTime,
        )
      }
    },

    getTimeLog(checkInDateTime, duration) {
      const checkInTime = formatDateString(checkInDateTime).time
      const checkOut = calculateCheckOutTime(checkInDateTime, duration)
      const checkOutTime = formatDateString(checkOut).time

      return checkInTime + ' - ' + checkOutTime
    },

    // Suggestion: Add actions for updating room status, editing reservations, etc.
    // Example:
    // updateRoomStatus(roomNo, status) {
    //   const room = this.roomList.find(room => room.no === roomNo)
    //   if (room) room.status = status
    // },
  },
})
