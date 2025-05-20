<template>
  <div class="text-h6">Room Schedule</div>
  <!-- Date picker for checking reservations -->
  <q-input v-model="date" filled type="date" hint="Date to check" />

  <!-- List of reservations for the selected date -->
  <div class="reservations" v-if="reservations.length > 0">
    <div
      v-for="(res, index) in reservations"
      :key="index"
      class="res flex flex-row justify-between"
    >
      <span>{{ index + 1 }}</span>
      <span>{{ res.hours }} hrs</span>
      <span>{{ roomStore.getTimeLog(res.checkInDateTime, res.hours) }}</span>
    </div>
  </div>
  <!-- Message if there are no reservations -->
  <div v-else>
    <h2 class="text-xs">No reservation</h2>
  </div>

  <!-- Button to book a new reservation -->
  <q-btn class="full-width q-mt-lg" color="primary" label="Book" />
</template>

<script setup>
// Import Vue composition API utilities
import { ref, computed } from 'vue'
// Import the room store for state management
import { useRoomStore } from 'src/stores/roomStore'
// Utility to get today's date in YYYY-MM-DD format
import { getYYYYMMDD } from 'src/utils/DateFormatter'

// Initialize room store
const roomStore = useRoomStore()

// Reactive date for filtering reservations (defaults to today)
const date = ref(getYYYYMMDD(new Date()))

// Get the currently selected room from the store
const selectedRoom = roomStore.selectedRoom

/**
 * Computed list of reservations for the selected room and date.
 * Filters reservations to only those matching the selected date.
 */
const reservations = computed(() => {
  const allReservations = roomStore.getReservationByRoom(selectedRoom.no)
  return allReservations.filter((res) => {
    const checkInDate = res.checkInDateTime.split('T')[0]
    return checkInDate === date.value
  })
})

// Suggestions:
// - Emit an event or call a method when "Book" is clicked to open a booking form.
// - Handle the case where selectedRoom might be null for better robustness.
</script>
