<template>
  <div class="text-h6">Book Room</div>

  <div class="details">
    <div>
      Room No: <span>{{ room.no }}</span>
    </div>
    <div>
      Type: <span>{{ room.type }} Room</span>
    </div>
  </div>
  <div class="form">
    <q-input v-model="date" filled type="date" hint="Date to reserve" />

    <div class="flex full-width q-mt-md q-row-gutter-md" style="gap: 1rem">
      <q-input v-model="checkInTime" filled type="time" hint="Check-in time" style="flex: 1" />
      <q-input
        v-model="checkOutTime"
        filled
        type="time"
        hint="Check-out time"
        disabled
        style="flex: 1"
      />
    </div>

    <div class="flex full-width q-mt-md q-row-gutter-md" style="gap: 1rem">
      <!-- <q-input
        type="number"
        label="Duration (Hours)"
        :min="3"
        :step="1"
        filled
        hint="Minimum of 3 hours"
        class="q-mb-md"
        v-model="hoursOfStay"
        style="flex: 2"
      />

      <q-btn-dropdown label="Quick Select" color="primary" class="q-ml-sm">
        <q-list>
          <q-item v-for="val in [3, 6, 12, 24]" :key="val" clickable @click="hoursOfStay = val">
            <q-item-section>{{ val }} hours</q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown> -->

      <!--  change this to manually type number later -->
      <q-select
        v-model="hoursOfStay"
        :options="[3, 6, 12]"
        type="number"
        label="Duration (Hours)"
        filled
        input-debounce="0"
        hint="Pick a set hour"
        :rules="[(val) => val >= 3 || 'Minimum is 3 hours']"
        class="q-mb-md"
        style="flex: 2"
      />

      <q-select
        filled
        v-model="fanOrAircon"
        label="Fan or Aircon"
        :options="fanOptions"
        behavior="menu"
        width="50%"
        style="flex: 1"
      />
    </div>
  </div>

  <div class="pricing align-right">
    <div class="price text-right"><span>&#8369;</span>{{ price.toFixed(2) }}</div>
  </div>

  <q-btn class="full-width q-mt-lg" color="primary" label="Book" />
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
