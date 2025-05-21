
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


</style>




<script setup>
// Vue composition API
import { ref } from 'vue'
// Modal component for room actions/details
import ModalBox from '../components/ModalBox.vue'
// Room store for state management
import { useRoomStore } from 'src/stores/roomStore'

// Initialize room store
const roomStore = useRoomStore()

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
</script>
