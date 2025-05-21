<!-- <template>
  <div class="container" style="margin: 1rem;">
    <div class="flex">
      <h3>Reservations</h3>
      <q-btn label="+" color="primary" @click="logout" />
    </div>

    <q-table
      title="Reservations"
      :rows="formattedReservations"
      :columns="columns"
    ></q-table>

  </div>

</template> -->

<template>
  <div class="q-pa-md">
    <div class="row items-center justify-between q-mb-md">
      <h3 class="text-h5 q-ma-none">Reservations</h3>
      <q-btn
        label="Add Reservation"
        icon="add"
        color="primary"
        @click="goToAddReservation"
        unelevated
        rounded
      />
    </div>

    <q-table
      title="Reservation List"
      :rows="formattedReservations"
      :columns="columns"
      flat
      bordered
      row-key="id"
    />
  </div>
</template>











<script setup>
import {useReservationStore} from 'src/stores/reservationStore.js'
// import {auth} from 'src/boot/firebase.js'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'

const reservations = ref([])
const reservationStore = useReservationStore()
const formattedReservations = ref([])

onMounted(async() => {
  await reservationStore.fetchReservations()
  reservationStore.formatReservations()
  reservations.value = reservationStore.reservations
  formattedReservations.value = reservationStore.formattedReservations
  console.log('Reservations:', reservations.value)
})


// LOGOUT BUTTON
const router = useRouter()

// const logout = async () => {
//   try {
//     await auth.signOut()
//     router.push('/signin') // ✅ go to login
//   } catch (err) {
//     console.error('Error signing out:', err)
//   }
// }

function goToAddReservation() {
  router.push('/add-reservation') // Replace with your actual route
}

</script>
