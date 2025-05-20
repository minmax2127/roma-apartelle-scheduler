<template>
  <div class="text-h6">Room Schedule</div>
  <q-input v-model="date" filled type="date" hint="Native date" />
  <div class="reservations">
    <div class="res flex flex-row justify-between">
      <span>1</span>
      <span>3 hrs</span>
      <span>1:00am - 4:00am</span>
    </div>

    <div class="res flex flex-row justify-between">
      <span>2</span>
      <span>3 hrs</span>
      <span>5:00am - 6:00am</span>
    </div>

    <div class="res flex flex-row justify-between">
      <span>1</span>
      <span>3 hrs</span>
      <span>7:00am - 10:00am</span>
    </div>
  </div>

  <q-btn class="full-width q-mt-lg" color="primary" label="Book" />
</template>

<script setup>
import { ref } from 'vue'
import { getYYYYMMDD } from 'src/utils/DateFormatter'

const date = ref(getYYYYMMDD(new Date()))
</script>
