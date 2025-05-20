<template>
  <q-page>
    <!-- Room Table Container -->
    <div class="room-table-container q-pa-md">
      <!-- 2nd Floor Rooms -->
      <h3 class="floor mobile-only">2nd Floor</h3>
      <div class="flex second-floor floor">
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

      <!-- 1st Floor Rooms -->
      <h3 class="floor mobile-only">1st Floor</h3>
      <div class="flex first-floor floor">
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

    <!-- Modal for Room Details/Actions -->
    <ModalBox v-model="dialogBoxOpen" />
  </q-page>
</template>

<style>
.room-table-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
  border: 2px solid black;
}

.room {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  min-width: 100px;
  min-height: 100px;
  margin: 1rem;
  flex: 1;
}

.floor {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex: 1;
  width: 100%;
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
