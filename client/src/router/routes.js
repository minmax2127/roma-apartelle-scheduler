const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/admin/AdminPage.vue') },
      { path: 'add-reservation', component: () => import('pages/admin/AddReservation.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'), // <- your custom layout for homepage
    children: [
      { path: 'signin', component: () => import('pages/SignInPage.vue') },
      { path: '', component: () => import('pages/HomePage.vue') }
    ],
  },

  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes


/*
AUTH GUARD

import { auth } from 'src/boot/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'

const requireAuth = async (to, from, next) => {
  const unsubscribe = onAuthStateChanged(auth, user => {
    unsubscribe() // Clean up listener
    if (user) {
      next() // Allow access
    } else {
      next('/login') // Redirect to login
    }
  })
}

const routes = [
  {
    path: '/dashboard',
    component: () => import('pages/DashboardPage.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue')
  }
]




*/
