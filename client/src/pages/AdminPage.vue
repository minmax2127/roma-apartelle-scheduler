<template>
  <h1>bawal bading dito</h1>
  <q-btn label="Logout" color="primary" @click="logout" />
</template>

<script setup>
import {auth} from 'src/boot/firebase.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = async () => {
  try {
    await auth.signOut()
    router.push('/signin') // ✅ go to login
  } catch (err) {
    console.error('Error signing out:', err)
  }
}
</script>
