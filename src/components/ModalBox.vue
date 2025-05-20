<template>
  <q-dialog v-model="dialogVisible">
    <q-card class="q-pa-md full-width">
      <q-card-section class="q-col-gutter-md">
        <q-breadcrumbs align="around">
          <q-breadcrumbs-el label="Schedule" />
          <q-breadcrumbs-el label="Book" />
          <q-breadcrumbs-el label="Copy TXT" />
        </q-breadcrumbs>

        <div class="text-h6">Room Schedule</div>

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
            <span>1:00am - 4:00am</span>
          </div>
        </div>
      </q-card-section>

      <q-btn class="full-width q-mt-lg" color="primary" label="Book" />

      <q-card-actions align="center">
        <q-btn flat label="Close" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(true)
</script>

<style>
.q-card {
  transition: transform 0.2s ease;
}
</style>
