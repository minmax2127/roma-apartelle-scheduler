<template>
  <q-page>
    <!-- Container for the room table (currently empty, can be used for future content) -->
    <div class="room-table-container q-pa-md">
      <!-- Section for 2nd Floor rooms (visible on mobile only) -->
      <h3 class="floor mobile-only">2nd Floor</h3>
      <div class="flex second-floor floor">
        <!-- Render each room on the 2nd floor as a button -->
        <div class="room" v-for="room in topRooms" :key="room.no">
          <q-btn
            outline
            class="full-width full-height text-primary"
            color="primary"
            @click="clickRoom(room)"
          >
            {{ room.no }}
          </q-btn>
        </div>
      </div>

      <!-- Section for 1st Floor rooms (visible on mobile only) -->
      <h3 class="floor mobile-only">1st Floor</h3>
      <div class="flex first-floor floor">
        <!-- Render each room on the 1st floor as a button -->
        <div class="room" v-for="room in bottomRooms" :key="room.no">
          <q-btn
            outline
            class="full-width full-height text-primary"
            color="primary"
            @click="clickRoom(room)"
          >
            {{ room.no }}
          </q-btn>
        </div>
      </div>
    </div>

    <!-- Modal component for additional interactions -->
    <ModalBox v-model="dialogBoxOpen" />
  </q-page>
</template>

<style>
.room-table-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* align-items: center; */
  border: 2px solid black;
}

/* Styles for each room button */
.room {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  min-width: 100px;
  /* flex: 1; */
  min-height: 100px;
  margin: 1rem;
  flex: 1;
}

/* Styles for floor containers */
.floor {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex: 1;
  width: 100%;
}
</style>

<script setup>
// Import Vue composition API utilities
import { ref, computed } from 'vue'
// Import the modal component
import ModalBox from '../components/ModalBox.vue'
// Import the list of rooms data
import room_list from 'src/data/rooms.js'
// Import helpers for date formatting
// import { formatDateString, calculateCheckOutTime, calculateDuration } from 'src/utils/DateFormatter'
import { formatDateString, calculateCheckOutTime, currentDateTime } from 'src/utils/DateFormatter'

// Reactive reference to the list of rooms
const rooms = ref(room_list)

// Computed property for rooms on the 2nd floor
const topRooms = computed(() => {
  return rooms.value.filter((room) => room.floor === 2)
})

// Computed property for rooms on the 1st floor
const bottomRooms = computed(() => {
  return rooms.value.filter((room) => room.floor === 1)
})

const dialogBoxOpen = ref(false)

// Handler for when a room button is clicked
const clickRoom = (room) => {
  console.log('Room clicked:', room.no)
  // const checkIn = formatDateString(room.reservations[0].checkInDateTime)
  const checkOut = calculateCheckOutTime(
    room.reservations[0].checkInDateTime,
    room.reservations[0].hours,
  )

  console.log('Current Time: ', formatDateString(currentDateTime()))

  console.log('Check-in time:', formatDateString(room.reservations[0].checkInDateTime))
  console.log('Check-out time:', formatDateString(checkOut))
  console.log('Duration:', room.reservations[0].hours)

  dialogBoxOpen.value = true
}
</script>
