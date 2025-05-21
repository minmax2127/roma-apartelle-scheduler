<!--
<template>
  <q-page class="room-page">
    <div class="room-table-container">

      <h3 class="floor-label">2nd Floor</h3>
      <div class="room-grid">
        <div class="room" v-for="room in topRooms" :key="room.no">

          <q-btn
            outline
            class="room-btn"
            :class="{ occupied: reservedRooms.includes(room.no) }"
            color="white"
            text-color="primary"
            @click="clickRoom(room)"
          >
            {{ room.no }}
          </q-btn>
        </div>
      </div>

      <h3 class="floor-label">1st Floor</h3>
      <div class="room-grid">
        <div class="room" v-for="room in bottomRooms" :key="room.no">
          <q-btn
            outline
            class="room-btn"
            :class="{ occupied: reservedRooms.includes(room.no) }"
            color="white"
            text-color="primary"
            @click="clickRoom(room)"
          >
            {{ room.no }}
          </q-btn>
        </div>
      </div>
    </div>

    <ModalBox v-model="dialogBoxOpen" />
  </q-page>
</template>

<style>
/* :style="reservedRooms.includes(room.no) ? {
              backgroundColor: 'rgba(0, 123, 255, 0.3)',  // highlight color overlay
              color: '#004085',                            // optional text color change
              fontWeight: '600',
            } : {}" */
.room-page {
  background-color: white;
  min-height: 100vh;
  padding-top: 2rem;
}

.room-table-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}



.floor-label {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #333;
}

.room-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.room {
  flex: 1 0 90px;
  max-width: 120px;
}

.room-btn {
  width: 100%;
  height: 80px;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 16px;
}

.reserved {
  background-color: #ac323c40 !important;  /* light blue overlay */
  color: #ac323d !important;                            /* dark blue text */
  font-weight: 600 !important;                        /* bold text */
  border-color: #ac323d !important;       /* make border match text color */
}


</style>




<script setup>
// Vue composition API
import { ref, onMounted } from 'vue'
// Modal component for room actions/details
import ModalBox from '../components/ModalBox.vue'
// Room store for state management
import { useRoomStore } from 'src/stores/roomStore'

import { useReservationStore } from 'src/stores/reservationStore'

// Initialize room store
const roomStore = useRoomStore()
const reservationStore = useReservationStore()

// Room lists for each floor
const topRooms = ref(roomStore.topRooms)
const bottomRooms = ref(roomStore.bottomRooms)

// Controls ModalBox visibility
const dialogBoxOpen = ref(false)

/**
 * Handles room button click:
 * - Opens the modal
 * - Sets the selected room in the store
 */
const clickRoom = (room) => {
  dialogBoxOpen.value = true
  roomStore.setSelectedRoom(room)
}

const reservations = ref([])
const reservedRooms = ref([])
onMounted(async() => {
  await reservationStore.fetchReservations()
  reservations.value = reservationStore.reservations
  reservedRooms.value = reservations.value.map(res => res.room_no)

  console.log(reservedRooms.value)
})


</script> -->











<template>
  <q-page class="room-page">
    <div class="room-table-container">
      <!-- 2nd Floor -->
      <h3 class="floor-label">2nd Floor</h3>
      <div class="room-grid">
        <div class="room" v-for="room in topRooms" :key="room.no">
          <q-btn
            outline
            class="room-btn"
            :class="{ reserved: reservedRooms.includes(room.no) }"
            color="white"
            text-color="primary"
            @click="clickRoom(room)"
          >
            {{ room.no }}
          </q-btn>
        </div>
      </div>

      <!-- 1st Floor -->
      <h3 class="floor-label">1st Floor</h3>
      <div class="room-grid">
        <div class="room" v-for="room in bottomRooms" :key="room.no">
          <q-btn
            outline
            class="room-btn"
            :class="{ reserved: reservedRooms.includes(room.no) }"
            color="white"
            text-color="primary"
            @click="clickRoom(room)"
          >
            {{ room.no }}
          </q-btn>
        </div>
      </div>
    </div>

    <ModalBox v-model="dialogBoxOpen" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ModalBox from '../components/ModalBox.vue'
import { useRoomStore } from 'src/stores/roomStore'
import { useReservationStore } from 'src/stores/reservationStore'

const roomStore = useRoomStore()
const reservationStore = useReservationStore()

const topRooms = ref(roomStore.topRooms)
const bottomRooms = ref(roomStore.bottomRooms)

const dialogBoxOpen = ref(false)

const clickRoom = (room) => {
  dialogBoxOpen.value = true
  roomStore.setSelectedRoom(room)
}

const reservations = ref([])
const reservedRooms = ref([])

onMounted(async () => {
  await reservationStore.fetchReservations()
  reservations.value = reservationStore.reservations

  // Make sure reservedRooms is an array of numbers matching room.no
  reservedRooms.value = reservations.value.map(res => Number(res.room_no))

  console.log('Reserved rooms:', reservedRooms.value)
})
</script>

<style>
.room-page {
  background-color: white;
  min-height: 100vh;
  padding-top: 2rem;
}

.room-table-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.floor-label {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #333;
}

.room-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.room {
  flex: 1 0 90px;
  max-width: 120px;
}

.room-btn {
  width: 100%;
  height: 80px;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 16px;
  transition: background-color 0.3s, color 0.3s;
}

.reserved {
  background-color: rgba(172, 50, 60, 0.25) !important; /* light red overlay */
  color: #ac323d !important;                            /* dark red text */
  font-weight: 600 !important;                          /* bold text */
  border-color: #ac323d !important;                     /* border color */
}
</style>
