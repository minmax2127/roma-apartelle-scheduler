<template>
  <div class="book-room">
    <div class="text-h6">Book Room</div>

    <div class="details q-mt-sm q-mb-md">
      <div>Room No: <span>{{ room.no }}</span></div>
      <div>Type: <span>{{ room.type }} Room</span></div>
    </div>

    <div class="form">
      <q-input
        v-model="date"
        filled
        type="date"
        hint="Date to reserve"
        class="q-mb-md"
      />

      <div class="flex q-mb-md" style="gap: 1rem">
        <q-input
          v-model="checkInTime"
          filled
          type="time"
          hint="Check-in time"
          style="flex: 1"
        />
        <q-input
          v-model="checkOutTime"
          filled
          type="time"
          hint="Check-out time"
          disabled
          style="flex: 1"
        />
      </div>

      <div class="flex q-mb-md" style="gap: 1rem">
        <q-select
          v-model="hoursOfStay"
          :options="[3, 6, 12]"
          type="number"
          label="Duration (Hours)"
          filled
          input-debounce="0"
          hint="Pick a set hour"
          :rules="[(val) => val >= 3 || 'Minimum is 3 hours']"
          style="flex: 2"
        />

        <q-select
          v-model="fanOrAircon"
          label="Fan or Aircon"
          :options="fanOptions"
          filled
          behavior="menu"
          style="flex: 1"
        />
      </div>
    </div>

    <div class="text-right q-mb-md">
      <div class="price">&#8369;{{ price.toFixed(2) }}</div>
    </div>

    <q-btn class="full-width q-mt-md" color="primary" label="Book" />
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

const roomStore = useRoomStore()
const room = roomStore.getSelectedRoom()
const fanOptions = roomStore.getFanOptions
const fanOrAircon = ref('AC')
const hoursOfStay = ref(null)

const date = ref(getYYYYMMDD(new Date()))
const checkInTime = ref(convertTo24HourFormat(formatDateString(currentDateTime()).time))

const price = ref(0.0)
</script>

<style scoped>
.book-room {
  font-family: 'Poppins', sans-serif;
}

.details {
  font-size: 0.95rem;
  color: #444;
}

.price {
  font-size: 1.2rem;
  font-weight: 600;
}
</style>
