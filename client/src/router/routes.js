// const routes = [
//   {
//     path: '/admin',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: 'dashboard', component: () => import('pages/admin/AdminPage.vue') },
//       { path: 'add-reservation', component: () => import('pages/admin/AddReservation.vue') },
//     ],
//   },
//   {
//     path: '/',
//     component: () => import('layouts/HomeLayout.vue'), // <- your custom layout for homepage
//     children: [
//       { path: 'signin', component: () => import('pages/SignInPage.vue') },
//       { path: '', component: () => import('pages/HomePage.vue') }
//     ],
//   },

//   // Always leave this as last one
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue'),
//   },
// ]




/*

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


export default routes
*/

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




// import { auth } from 'src/boot/firebase.js'
// import { onAuthStateChanged } from 'firebase/auth'

// const requireAuth = (to, from, next) => {
//   const unsubscribe = onAuthStateChanged(auth, user => {
//     unsubscribe() // Clean up listener

//     if (user) {
//       next() // Allow access
//     } else {
//       next('/login') // Redirect to login
//     }
//   })
// }

// // OR alternatively return a Promise and use async/await in router config
// /*
// const requireAuth = (to, from, next) => {
//   return new Promise((resolve) => {
//     const unsubscribe = onAuthStateChanged(auth, user => {
//       unsubscribe()
//       if (user) {
//         resolve(next())
//       } else {
//         resolve(next('/login'))
//       }
//     })
//   })
// }
// */

// const routes = [
//   {
//     path: '/dashboard',
//     component: () => import('pages/DashboardPage.vue'),
//     beforeEnter: requireAuth
//   },
//   {
//     path: '/login',
//     component: () => import('pages/LoginPage.vue')
//   }
// ]

// export default routes







// import { auth } from 'src/boot/firebase.js'
// import { onAuthStateChanged } from 'firebase/auth'

// const requireAuth = (to, from, next) => {
//   const unsubscribe = onAuthStateChanged(auth, user => {
//     unsubscribe()  // clean up the listener

//     if (user) {
//       next()       // user is logged in, proceed
//     } else {
//       next('/login') // redirect to login if not authenticated
//     }
//   })
// }


// const routes = [
//   {
//     path: '/admin',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: 'dashboard', component: () => import('pages/admin/AdminPage.vue') },
//       { path: 'add-reservation', component: () => import('pages/admin/AddReservation.vue') },
//     ],
//     beforeEnter: requireAuth
//   },
//   {
//     path: '/',
//     component: () => import('layouts/HomeLayout.vue'), // <- your custom layout for homepage
//     children: [
//       { path: 'signin', component: () => import('pages/SignInPage.vue') },
//       { path: '', component: () => import('pages/HomePage.vue') }
//     ],
//   },
//   // Always leave this as last one
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue'),
//   },
// ]










// const routes = [
//   {
//     path: '/dashboard',
//     component: () => import('pages/DashboardPage.vue'),
//     beforeEnter: requireAuth
//   },
//   {
//     path: '/login',
//     component: () => import('pages/LoginPage.vue')
//   },
//   // other routes...
// ]




// ORIGIN


// const routes = [
//   {
//     path: '/admin',
//     component: () => import('layouts/MainLayout.vue'),
//     children: [
//       { path: 'dashboard', component: () => import('pages/admin/AdminPage.vue') },
//       { path: 'add-reservation', component: () => import('pages/admin/AddReservation.vue') },
//     ],
//   },
//   {
//     path: '/',
//     component: () => import('layouts/HomeLayout.vue'), // <- your custom layout for homepage
//     children: [
//       { path: 'signin', component: () => import('pages/SignInPage.vue') },
//       { path: '', component: () => import('pages/HomePage.vue') }
//     ],
//   },
//   // Always leave this as last one
//   {
//     path: '/:catchAll(.*)*',
//     component: () => import('pages/ErrorNotFound.vue'),
//   },
// ]



// export default routes










import { auth } from 'src/boot/firebase.js'
import { onAuthStateChanged } from 'firebase/auth'

const requireAuth = (to, from, next) => {
  const unsubscribe = onAuthStateChanged(auth, user => {
    unsubscribe()
    if (user) {
      next()
    } else {
      next('/signin')  // redirect to signin if not authenticated
    }
  })
}

const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: requireAuth,          // << Add this line here
    children: [
      { path: 'dashboard', component: () => import('pages/admin/AdminPage.vue') },
      { path: 'add-reservation', component: () => import('pages/admin/AddReservation.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: 'signin', component: () => import('pages/SignInPage.vue') },
      { path: '', component: () => import('pages/HomePage.vue') }
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
