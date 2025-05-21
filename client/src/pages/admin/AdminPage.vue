
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
      :rows="reservations"
      flat
      bordered
      row-key="id"
      :loading="reservationStore.loading"
    >
      <template v-slot:loading>
        <q-inner-loading showing color="primary" />
      </template>
    </q-table>
  </div>
</template>











<script setup>
import {useReservationStore} from 'src/stores/reservationStore.js'
// import {auth} from 'src/boot/firebase.js'
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'


const reservations = ref([])
const reservationStore = useReservationStore()
// const formattedReservations = ref([])

onMounted(async() => {
  // continuously check for reservations in a certain room
  await reservationStore.fetchReservations()
  reservations.value = reservationStore.formatReservations(reservationStore.reservations)
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
  router.push('/admin/add-reservation') // Replace with your actual route
}

</script>
