// src/boot/firebase-auth.js
import { boot } from 'quasar/wrappers'
import { auth } from 'src/boot/firebase.js'
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";

export default boot(({ router }) => {
  onAuthStateChanged(auth, (user) => {
    const isLoggedIn = !!user

    // Protect admin route
    if (!isLoggedIn && router.currentRoute.value.path.startsWith('/admin')) {
      router.replace('/login')
    }
  })
})
