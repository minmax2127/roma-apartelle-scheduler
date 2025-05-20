<template>
  <q-dialog v-model="dialogVisible">
    <q-card class="q-pa-md full-width">
      <q-card-section class="q-col-gutter-md">
        <!-- <q-breadcrumbs align="around">
          <q-breadcrumbs-el label="Schedule" />
          <q-breadcrumbs-el label="Book" />
          <q-breadcrumbs-el label="Copy TXT" />
        </q-breadcrumbs> -->

        <!-- Breadcrumbs -->
        <q-breadcrumbs active-color="primary">
          <q-breadcrumbs-el
            v-for="(stage, index) in stages"
            :key="stage"
            :label="stage"
            :clickable="index <= currentStage"
            @click="goToStage(index)"
          />
        </q-breadcrumbs>
      </q-card-section>

      <q-card-section>
        <component :is="stageComponent" />
      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'
import CheckReservations from 'src/components/modal-stages/CheckReservations.vue'
import BookRoom from 'src/components/modal-stages/BookRoom.vue'
import CopyText from 'src/components/modal-stages/CopyText.vue'

const dialogVisible = ref(true)
const currentStage = ref(0)
const stages = ['Schedule', 'Book', 'Copy TXT']

const stageComponent = computed(() => {
  return [CheckReservations, BookRoom, CopyText][currentStage.value]
})

// function nextStage() {
//   if (currentStage.value < stages.length - 1) currentStage.value++
// }

// function prevStage() {
//   if (currentStage.value > 0) currentStage.value--
// }

function goToStage(index) {
  currentStage.value = index
}
</script>

<style>
.q-card {
  transition: transform 0.2s ease;
}
</style>
