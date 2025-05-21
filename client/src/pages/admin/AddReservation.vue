<template>
  <div class="q-pa-md q-mx-auto" style="max-width: 600px">
    <!-- Title -->
    <div class="text-h5 text-weight-bold q-mb-md">Add Reservation</div>

    <!-- Form -->
    <div class="column q-gutter-y-md">

      <!-- Date Picker -->
      <q-input
        v-model="date"
        filled
        type="date"
        label="Reservation Date"
        hint="Select the date of your stay"
        class="full-width"
      />

      <!-- Time Inputs -->
      <div class="row q-col-gutter-md">
        <q-input
          v-model="checkInTime"
          filled
          type="time"
          label="Check-in Time"
          hint="Enter check-in time"
          class="col"
        />
        <q-input
          v-model="checkOutTime"
          filled
          type="time"
          label="Check-out Time"
          hint="Auto-calculated"
          class="col"
          disabled
        />
      </div>

      <!-- Duration & Fan/Aircon -->
      <div class="row q-col-gutter-md">
        <q-select
          v-model="hoursOfStay"
          :options="[3, 6, 12]"
          label="Duration (Hours)"
          filled
          class="col"
          hint="Minimum is 3 hours"
          :rules="[(val) => val >= 3 || 'Minimum is 3 hours']"
        />
        <q-select
          v-model="fanOrAircon"
          :options="fanOptions"
          label="Fan or Aircon"
          filled
          class="col"
        />
      </div>
    </div>

    <!-- Pricing -->
    <div class="q-mt-xl text-right">
      <div class="text-subtitle1">Total Price</div>
      <div class="text-h6 text-primary text-weight-bold">
        ₱{{ price.toFixed(2) }}
      </div>
    </div>

    <!-- Button -->
    <q-btn
      class="full-width q-mt-lg"
      color="primary"
      label="Add"
      unelevated
      size="lg"
      @click="addReservation"    />
  </div>
</template>



<script setup>
import { ref } from 'vue'
import {
  getYYYYMMDD,
  currentDateTime,
  formatDateString,
  convertTo24HourFormat,
} from 'src/utils/DateFormatter'
import { useRoomStore } from 'src/stores/roomStore'
// import { useReservationStore } from 'src/stores/reservationStore'


const roomStore = useRoomStore()
// const reservationStore = useReservationStore()

const fanOptions = roomStore.getFanOptions
const fanOrAircon = ref('AC')
const hoursOfStay = ref(null)

const date = ref(getYYYYMMDD(new Date()))
const checkInTime = ref(convertTo24HourFormat(formatDateString(currentDateTime()).time))
const checkOutTime = ref(null)

const price = ref(0.0)


// async function addReservation() {
//   await reservationStore.addReservation({
//     room_no: 8,
//     checkInDateTime: {
//       seconds: Math.floor(Date.now() / 1000),
//       nanoseconds: 0
//     },
//     hours: 12
//   })
// }




</script>
