<template>
  <q-page class="flex flex-center">
    <h1>Badmin</h1>
  </q-page>
</template>

<script setup>
import { useRoomStore } from 'src/stores/roomStore'

const roomStore = useRoomStore()
// access room list

console.log(roomStore.getRoomList)
</script>
