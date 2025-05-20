<template>
  <q-page>
    <div class="room-table-container q-pa-md">
      <h3 class="floor">First Floor</h3>
      <div class="flex second-floor floor">
        <div class="item item-8">8</div>
        <div class="item item-9">9</div>
        <div class="item item-10">10</div>
        <div class="item item-11">11</div>
        <div class="item item-12">12</div>
        <div class="item item-13">13</div>
      </div>

      <h3 class="floor">Second Floor</h3>
      <div class="flex first-floor floor">
        <div class="item item-1">1</div>
        <div class="item item-2">2</div>
        <div class="item item-3">3</div>
        <div class="item item-4">4</div>
        <div class="item item-5">5</div>
        <div class="item item-6">6</div>
        <div class="item item-7">7</div>
      </div>
    </div>

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
  </q-page>
</template>

<style>
.room-table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item {
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  min-width: 100px;
  flex: 1;
  min-height: 100px;
  margin: 1rem;
}

.floor {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  flex: 1;
  width: 100%;
}

.q-card {
  transition: transform 0.2s ease;
}
/* .q-card:hover {
  transform: scale(1.05);
} */
</style>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(true)
</script>
