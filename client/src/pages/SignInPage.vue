<template>
  <q-page class="flex flex-center column q-pa-md">
    <q-card style="width: 300px">
      <q-card-section>
        <div class="text-h6">Admin Login</div>
      </q-card-section>

      <q-card-section>
        <q-input filled v-model="email" label="Email" />
        <q-input filled v-model="password" label="Password" type="password" class="q-mt-sm" />
        <div v-if="error" class="text-negative q-mt-sm">{{ error }}</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Login" color="primary" @click="login" />
      </q-card-actions>




    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";
import { auth } from 'src/boot/firebase'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()


const login = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/admin/dashboard') // ✅ go to dashboard
  } catch (err) {
    // Firebase error message
    if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
      error.value = 'Invalid email or password.'
    } else {
      error.value = err.message
    }
  }
}



</script>
