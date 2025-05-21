<!-- <template>
  <div class="q-pa-md q-mx-auto" style="max-width: 600px">
    <div class="text-h5 text-weight-bold q-mb-md">Add Reservation</div>

    <div class="column q-gutter-y-md">

      <q-input
        v-model="date"
        filled
        type="date"
        label="Reservation Date"
        hint="Select the date of your stay"
        class="full-width"
      />

      <q-select
        v-model="roomType"
        :options="['Family', 'Standard']"
        label="Room Type"
        filled
        class="full-width"
        hint="Choose a room type"
      />

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
          :options="['Fan', 'AC']"
          label="Fan or Aircon"
          filled
          class="col"
        />
      </div>


    </div>


    <div class="q-mt-xl text-right">
      <div class="text-subtitle1">Total Price</div>
      <div class="text-h6 text-primary text-weight-bold">
        ₱{{ price?.toFixed(2) ?? '0.00' }}
      </div>
    </div>


    <q-btn
      class="full-width q-mt-lg"
      color="primary"
      label="Check Price"
      unelevated
      size="lg"
      @click="updatePrice"
    />

    {{ date }}
    {{ checkInTime }}
    {{ checkOutTime }}
    {{ duration }}
    {{ fanOrAircon }}
    {{ price }}
  </div>
</template>




<script setup>
import { usePriceCheckDetailsStore } from 'src/stores/priceCheckDetailsStore'
import { computed } from 'vue'



const checkDetailsStore = usePriceCheckDetailsStore()


function useStoreBinding(store, key) {
  return computed({
    get: () => store[key],
    set: (val) => store[key] = val
  })
}


const date = useStoreBinding(checkDetailsStore, 'checkInDate')
const roomType = useStoreBinding(checkDetailsStore, 'room_type')
const checkInTime = useStoreBinding(checkDetailsStore, 'checkInTime')
const checkOutTime = useStoreBinding(checkDetailsStore, 'checkOutTime')
const fanOrAircon = useStoreBinding(checkDetailsStore, 'fanOrAircon')
const hoursOfStay = useStoreBinding(checkDetailsStore, "hoursOfStay")
const price = useStoreBinding(checkDetailsStore, "price")

function updatePrice() {
  if(roomType.value && fanOrAircon.value && hoursOfStay.value){
    checkDetailsStore.calculatePrice(roomType.value, fanOrAircon.value, hoursOfStay.value)
    console.log(checkDetailsStore.price)
  }
}




</script> -->


<!-- <template>
  <div class="q-pa-md q-mx-auto" style="max-width: 600px">

    <div class="text-h5 text-weight-bold q-mb-md">Add Reservation</div>


    <div class="column q-gutter-y-md">

      <q-input
        v-model="date"
        filled
        type="date"
        label="Reservation Date"
        hint="Select the date of your stay"
        class="full-width"
      />

      <div class="row q-col-gutter-md">

        <q-select
          v-model="roomType"
          :options="['Family', 'Standard']"
          label="Room Type"
          style="flex:2;"
          filled
          hint="Choose a room type"
        />

        <q-input
          v-model.number="roomNo"
          type="number"
          label="Room Number"
          filled
          style="flex:1;"
          hint="Enter the room number"
          :rules="[
            val => val > 0 || 'Room number must be positive'
          ]"
        />
      </div>


      <div class="row q-col-gutter-md">
        <q-input
          v-model="checkInTime"
          filled
          type="time"
          label="Check-in Time"
          hint="Enter check-in time"
          class="col"
        />
        <div class="col">
          <q-input
            v-model="checkOutTime"
            filled
            type="time"
            label="Check-out Time"
            :hint="checkOutDate"
            class="col"
            readonly
          />


        </div>

      </div>


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
          :options="['Fan', 'AC']"
          label="Fan or Aircon"
          filled
          class="col"
        />
      </div>
    </div>


    <div class="q-mt-xl text-right">
      <div class="text-subtitle1">Total Price</div>
      <div class="text-h6 text-primary text-weight-bold">
        ₱{{ price?.toFixed(2) ?? '0.00' }}
      </div>
    </div>



     <div class="row q-gutter-sm q-mt-lg">
       <q-btn
        class="col"
        unelevated
        size="lg"
        label="Check Price"
        @click="updatePrice"
        style="background-color: transparent; color: var(--q-primary);"
      />
      <q-btn
        class="col text-white"
        color="primary"
        unelevated
        size="lg"
        label="Add"
        @click="addReservationToList"
      />
     </div>

  </div>
</template>

<script setup>
import { usePriceCheckDetailsStore } from 'src/stores/priceCheckDetailsStore'
import { computed, watch, ref } from 'vue'
import { calculateCheckOutTime, formatDateString } from 'src/utils/DateFormatter'


import { useReservationStore } from 'src/stores/reservationStore'
const reservationStore = useReservationStore()

// Store
const checkDetailsStore = usePriceCheckDetailsStore()

// Helper: reactive store binding for v-model
function useStoreBinding(store, key) {
  return computed({
    get: () => store[key],
    set: (val) => store[key] = val
  })
}

// Two-way bindings for all fields
const date = useStoreBinding(checkDetailsStore, 'checkInDate')
const roomType = useStoreBinding(checkDetailsStore, 'room_type')
const checkInTime = useStoreBinding(checkDetailsStore, 'checkInTime')
const checkOutTime = useStoreBinding(checkDetailsStore, 'checkOutTime')
const roomNo = useStoreBinding(checkDetailsStore, 'roomNo')
// const checkOutDate = useStoreBinding(checkDetailsStore, 'checkOutTime')
const checkOutDate = ref(null)
const fanOrAircon = useStoreBinding(checkDetailsStore, 'fanOrAircon')
const hoursOfStay = useStoreBinding(checkDetailsStore, 'hoursOfStay')
const price = computed(() => checkDetailsStore.price) // Read-only price


// Button action
function updatePrice() {
  if (roomType.value && fanOrAircon.value && hoursOfStay.value) {
    checkDetailsStore.calculatePrice(roomType.value, fanOrAircon.value, hoursOfStay.value)
    console.log('Updated price:', checkDetailsStore.price)
  } else {
    console.warn('Missing fields for price calculation')
  }
}


function convertTo24HourFormat(time12h) {
  const [time, modifier] = time12h.split(' ');
  let [hours, minutes] = time.split(':');

  if (hours === '12') hours = '00';
  if (modifier === 'PM') hours = String(parseInt(hours, 10) + 12);

  return `${hours.padStart(2, '0')}:${minutes}`;
}


const calculatedCHECKOUT = ref(new Date())


watch([checkInTime, hoursOfStay], ([newCheckInTime, newHours]) => {
  if (!newCheckInTime || !newHours) return

  const isoString = new Date(`${date.value}T${newCheckInTime}:00`).toISOString();
  calculatedCHECKOUT.value = calculateCheckOutTime(isoString, newHours)

  const {  time: formattedTime } = formatDateString(calculatedCHECKOUT.value)

  checkOutDate.value = formatDateString(calculatedCHECKOUT.value).date
  checkOutTime.value = convertTo24HourFormat(formattedTime) // ✅ convert here

  console.log(checkOutDate.value)
})

// const reservationStore = useReservationStore()

console.log(date.value)
console.log(checkInTime.value)

// async function addReservation() {
//   try {
//     // Gather your reservation data, e.g. from form inputs
//     const reservationData = {

//     }
//     // Call the store function to add the reservation
//     const result = await reservationStore.addReservation(reservationData)
//     console.log('Reservation added successfully:', result)
//     // You can also clear form, show success message, etc.
//   } catch (error) {
//     console.error('Failed to add reservation:', error)
//     // Handle error display here if needed
//   }
// }

async function addReservationToList() {
 try {
   // Combine date and time strings into a Date object
   const combinedDateTime = new Date(`${date.value}T${checkInTime.value}:00`)
   // Convert to seconds and nanoseconds (Firestore timestamp format)
   const seconds = Math.floor(combinedDateTime.getTime() / 1000)
   const nanoseconds = (combinedDateTime.getTime() % 1000) * 1e6
   // Construct your reservation data object
   const reservationData = {
     fan_or_ac: fanOrAircon.value,
     room_no: roomNo,
     hours: 12,
     checkInDateTime: {
       seconds: seconds,
       nanoseconds: nanoseconds
     }
   }
   // Call the store method
   const result = await reservationStore.addReservation(reservationData)
   console.log('Reservation added:', result)
   alert("Reservation Added!")
 } catch (error) {
   console.error('Failed to add reservation:', error)
   alert("Fail to add reservation, sorry!")
 }
}

</script> -->

<!-- <template>
  <q-page class="q-pa-md">
    <q-form @submit.prevent="submitReservation" class="q-gutter-md">

      <q-select
        v-model="roomType"
        :options="roomTypeOptions"
        label="Room Type"
        @update:model-value="updatePrice"
        outlined
      />

      <q-input
        v-model.number="roomNo"
        type="number"
        label="Room Number"
        filled
        style="flex:1;"
        :rules="[
          val => val > 0 || 'Room number must be positive'
        ]"
      />

      <q-select
        v-model="fanOrAircon"
        :options="fanOrAirconOptions"
        label="Fan or Aircon"
        @update:model-value="updatePrice"
        outlined
      />

      <q-input
        v-model="checkInDate"
        filled
        type="date"
        label="Reservation Date"
        hint="Select the date of your stay"
        class="full-width"
      />

      <q-input
        v-model="checkInTime"
        filled
        type="time"
        label="Check-in Time"
        hint="Enter check-in time"
        class="col"
      />

      <q-input
        v-model.number="hoursOfStay"
        type="number"
        label="Hours of Stay"
        min="1"
        @update:model-value="updatePrice"
        outlined
      />



      <q-btn
        label="Submit"
        color="primary"
        type="submit"
      />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

// Room and AC/Fan options
const roomTypeOptions = ['single', 'double', 'suite']
const fanOrAirconOptions = ['fan', 'aircon']

// Refs for form input
const roomNo = ref(1)
const fanOrAircon = ref('')
const hoursOfStay = ref(null)
const checkInDate = ref(null)
const checkInTime = ref(null)

const $q = useQuasar()



// Form submission logic
function submitReservation() {
  if (!roomType.value || !fanOrAircon.value || !hoursOfStay.value) {
    $q.notify({
      type: 'negative',
      message: 'Please complete all fields'
    })
    return
  }

  const reservationDetails = {
    roomType: roomType.value,
    fanOrAircon: fanOrAircon.value,
    hoursOfStay: hoursOfStay.value,
    price: computedPrice.value
  }

  console.log('Reservation submitted:', reservationDetails)

  $q.notify({
    type: 'positive',
    message: 'Reservation submitted successfully!'
  })

  // Reset form
  roomType.value = ''
  fanOrAircon.value = ''
  hoursOfStay.value = null
  computedPrice.value = 0
}
</script>

<style scoped>
/* Optional styling */
</style> -->

<!-- <template>
  <q-page class="q-pa-md">
    <q-form @submit.prevent="submitReservation" class="q-gutter-md">

      <q-input
        v-model.number="room_no"
        type="number"
        label="Room Number"
        min="1"
        outlined
        required
      />

      <q-select
        v-model="fan_or_ac"
        :options="fanOrAcOptions"
        label="Fan or Aircon"
        @update:model-value="updatePrice"
        outlined
        required
      />

      <q-input
        v-model.number="hours"
        type="number"
        label="Hours of Stay"
        min="1"
        @update:model-value="updatePrice"
        outlined
        required
      />

      <q-input
        v-model="checkInDateTimeInput"
        type="datetime-local"
        label="Check-in Date & Time"
        outlined
        required
      />
      <q-btn
        label="Submit"
        color="primary"
        type="submit"
      />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useReservationStore } from 'src/stores/reservationStore'

const reservationStore = useReservationStore()

// Select options
const fanOrAcOptions = ['Fan', 'Aircon']

// Form data
const room_no = ref(null)
const fan_or_ac = ref('')
const hours = ref(null)
const checkInDateTimeInput = ref('')

const $q = useQuasar()


function convertToTimestamp(dateTimeString) {
  const date = new Date(dateTimeString)
  return {
    seconds: Math.floor(date.getTime() / 1000),
    nanoseconds: (date.getTime() % 1000) * 1e6
  }
}

function submitReservation() {
  if (
    !room_no.value ||
    !fan_or_ac.value ||
    !hours.value ||
    !checkInDateTimeInput.value
  ) {
    $q.notify({
      type: 'negative',
      message: 'Please complete all fields'
    })
    return
  }

  const checkInDateTime = convertToTimestamp(checkInDateTimeInput.value)

  const reservation = {
    room_no: room_no.value,
    fan_or_ac: fan_or_ac.value,
    hours: hours.value,
    checkInDateTime
  }

  console.log('Reservation to Firestore:', reservation)

  $q.notify({
    type: 'positive',
    message: 'Reservation submitted successfully!'
  })

  // Reset form
  room_no.value = null
  fan_or_ac.value = ''
  hours.value = null
  checkInDateTimeInput.value = ''
}
</script>

<style scoped>
</style> -->

<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Add Reservation</div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <q-form @submit.prevent="submitReservation">
          <q-input v-model="room_no" label="Room Number" type="number" required />
          <q-select v-model="fan_or_ac" :options="['Fan', 'AC']" label="Fan or AC" required />
          <q-input v-model.number="hours" label="Number of Hours" type="number" required />
          <q-input v-model="checkInDate" type="date" label="Check-in Date" required />
          <q-input v-model="checkInTime" type="time" label="Check-in Time" required />

          <q-btn label="Submit Reservation" type="submit" color="primary" class="q-mt-md" />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import { useReservationStore } from 'src/stores/reservationStore'

const $q = useQuasar()
const reservationStore = useReservationStore()

const room_no = ref(null)
const fan_or_ac = ref('Fan')
const hours = ref(null)
const checkInDate = ref('')
const checkInTime = ref('')

function getTimestampFromDateTime(date, time) {
  const dateTime = new Date(`${date}T${time}`)
  return {
    seconds: Math.floor(dateTime.getTime() / 1000),
    nanoseconds: (dateTime.getTime() % 1000) * 1e6
  }
}

async function submitReservation() {
  try {
    const checkInDateTime = getTimestampFromDateTime(checkInDate.value, checkInTime.value)

    const reservationData = {
      room_no: Number(room_no.value),
      fan_or_ac: fan_or_ac.value,
      hours: Number(hours.value),
      checkInDateTime: checkInDateTime
    }

    await reservationStore.addReservation(reservationData)

    $q.notify({
      type: 'positive',
      message: 'Reservation successfully added!'
    })

    // Optional: clear form after success
    room_no.value = null
    fan_or_ac.value = 'Fan'
    hours.value = null
    checkInDate.value = ''
    checkInTime.value = ''

  } catch (error) {
    $q.notify({
      type: 'negative',
      message: 'Failed to add reservation' + error
    })
  }
}
</script>

<style scoped>
.q-card {
  max-width: 500px;
  margin: auto;
}
</style>

