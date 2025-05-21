<template>
  <div class="room-schedule">
    <div class="text-h6 header">Room Schedule</div>

    <q-input
      v-model="date"
      filled
      type="date"
      hint="Date to check"
      class="date-input q-mb-sm"
    />

    <div v-if="reservations.length > 0" class="reservations">
      <div
        v-for="(res, index) in reservations"
        :key="index"
        class="res flex justify-between items-center"
      >
        <span class="res-index">{{ res.id }}</span>
        <span class="res-hours">{{ res.hours }} hrs</span>
        <span class="res-hours">{{ res.check_in_time }} - {{ res.check_out_time }}</span>
      </div>

    </div>

    <div v-else class="no-reservation">
      <span>No reservation</span>
    </div>

    <q-btn class="full-width q-mt-md" color="primary" label="Book" />
  </div>
</template>

<style scoped>
.room-schedule {
  font-family: 'Poppins', sans-serif;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 0.5rem;
}

.header {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #222;
  text-align: center;
}

.date-input >>> .q-field__control {
  font-size: 1rem;
  font-weight: 500;
}

.reservations {
  margin: 0.5rem 0 0.75rem;
}

.res {
  padding: 0.4rem 0.5rem;
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.95rem;
  color: #333;
}

.res:last-child {
  border-bottom: none;
}

.res-index,
.res-hours,
.res-time {
  min-width: 40px;
  text-align: center;
}

.res-time {
  min-width: 110px;
  text-align: right;
}

.no-reservation {
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;
  color: #888;
  margin: 0.75rem 0;
  font-style: italic;
}
</style>


<script setup>
import { ref, onMounted } from 'vue'
import { useReservationStore } from 'src/stores/reservationStore';
import { useRoomStore } from 'src/stores/roomStore';
import { getYYYYMMDD } from 'src/utils/DateFormatter';


// Initialize the pinia stores
const reservationStore = useReservationStore()
const roomStore = useRoomStore()

const date = ref(getYYYYMMDD(new Date()))


const reservations = ref([])

onMounted(async() => {
  // continuously check for reservations in a certain room
  await reservationStore.fetchReservationsByRoomNo(roomStore.selectedRoom.no)
  const reservationsToday = ref(reservationStore.getReservationsByDate(reservationStore.reservations, date.value))
  console.log(reservationsToday.value)
  reservations.value = reservationStore.formatReservations(reservationStore.reservations)


  // edit to show reservations today

})





</script>































<!-- <template>
  <div class="room-schedule">
    <div class="text-h6 header">Room Schedule</div>

    <q-input
      v-model="date"
      filled
      type="date"
      hint="Date to check"
      class="date-input q-mb-sm"
    />

    <div v-if="reservations.length > 0" class="reservations">
      <div
        v-for="(res, index) in formattedReservations"
        :key="index"
        class="res flex justify-between items-center"
      >
        <span class="res-index">{{ res.id }}</span>
        <span class="res-hours">{{ res.hours }} hrs</span>
        <span class="res-hours">{{ res.check_in_time }} - {{ res.check_out_time }}</span>
      </div>

    </div>

    <div v-else class="no-reservation">
      <span>No reservation</span>
    </div>

    <q-btn class="full-width q-mt-md" color="primary" label="Book" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoomStore } from 'src/stores/roomStore'
import { getYYYYMMDD } from 'src/utils/DateFormatter'
import {useReservationStore} from 'src/stores/reservationStore.js'

const roomStore = useRoomStore()
const reservationStore = useReservationStore()

const date = ref(getYYYYMMDD(new Date()))
const selectedRoom = roomStore.selectedRoom

const reservations = ref([])
const formattedReservations = ref([])

onMounted(async () => {
  await reservationStore.fetchReservationsByRoomNo(selectedRoom.no)
  reservationStore.formatReservations()
  formattedReservations.value = reservationStore.formattedReservations
  console.log(formattedReservations.value)

})


</script>

<style scoped>
.room-schedule {
  font-family: 'Poppins', sans-serif;
  max-width: 420px;
  margin: 0 auto;
  padding: 0 0.5rem;
}

.header {
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #222;
  text-align: center;
}

.date-input >>> .q-field__control {
  font-size: 1rem;
  font-weight: 500;
}

.reservations {
  margin: 0.5rem 0 0.75rem;
}

.res {
  padding: 0.4rem 0.5rem;
  border-bottom: 1px solid #e0e0e0;
  font-size: 0.95rem;
  color: #333;
}

.res:last-child {
  border-bottom: none;
}

.res-index,
.res-hours,
.res-time {
  min-width: 40px;
  text-align: center;
}

.res-time {
  min-width: 110px;
  text-align: right;
}

.no-reservation {
  text-align: center;
  font-size: 0.85rem;
  font-weight: 500;
  color: #888;
  margin: 0.75rem 0;
  font-style: italic;
}
</style> -->


<!--

  // // Filtered formatted reservations for the selected date
  // formattedReservations.value = reservationStore.formattedReservations.filter(res => {
  //   const parsed = new Date(res.check_in_date)
  //   const normalized = parsed.toISOString().split('T')[0]
  //   return normalized === date.value
  // })

  // console.log(formattedReservations.value)


  // All reservations
  // reservations.value = reservationStore.reservations
  // formattedReservations.value - reservationStore.formattedReservations
  // console.log(reservations.value)
-->
