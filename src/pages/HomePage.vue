<template>
  <q-page class="q-pa-md bg-grey-2">
    <div class="first_row">
      <!-- First Row -->
      <div class="row q-col-gutter-md q-mb-md">
        <!-- Family Room - Larger -->
        <div class="col-2">
          <q-card
            class="q-pa-md border"
            :class="['border', selected ? 'bg-primary text-white' : 'bg-transparent text-primary']"
            @click="toggleSelect"
            style="border: 2px solid var(--q-primary)"
          >
            <div class="text-h6 text-center">8</div>
          </q-card>
        </div>

        <!-- 5 Standard Rooms -->
        <div class="col-1" v-for="room in 5" :key="'row1-room' + room">
          <!-- <q-card class="bg-primary text-white q-pa-sm border">
            <div class="text-subtitle2 text-center">Room {{ room + 8 }}</div>
          </q-card> -->
          <q-card
            class="q-pa-md border"
            :class="['border', selected ? 'bg-primary text-white' : 'bg-transparent text-primary']"
            @click="toggleSelect"
            style="border: 2px solid var(--q-primary)"
          >
            <div class="text-h6 text-center">{{ room + 8 }}</div>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Second Row -->
    <div class="row q-col-gutter-md">
      <!-- 7 Standard Rooms -->
      <div class="col-1" v-for="room in 7" :key="'row1-room' + room">
        <!-- <q-card class="bg-primary text-white q-pa-sm border">
            <div class="text-subtitle2 text-center">Room {{ room + 8 }}</div>
          </q-card> -->
        <q-card
          class="q-pa-md border"
          :class="['border', selected ? 'bg-primary text-white' : 'bg-transparent text-primary']"
          @click="toggleSelect"
          style="border: 2px solid var(--q-primary)"
        >
          <div class="text-h6 text-center">{{ room }}</div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// import room_list from 'src/data/room_list.js'

// reactive current time
const currentTime = ref(new Date())

// update current time every second
let interval = null
onMounted(() => {
  interval = setInterval(() => {
    currentTime.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})

// 3. Make rooms reactive
// const rooms = ref(room_list)

// check if room is occupied
function isRoomOccupied(room) {
  return room.reservations.some((res) => {
    const checkIn = new Date(res.checkInDateTime)
    const checkOut = new Date(res.checkOutDateTime)
    return currentTime.value >= checkIn && currentTime.value <= checkOut
  })
}
</script>
