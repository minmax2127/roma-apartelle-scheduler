const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'dashboard', component: () => import('pages/AdminPage.vue') },
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
