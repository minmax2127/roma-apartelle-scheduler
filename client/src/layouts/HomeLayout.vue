<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <img
            src="/public/icons/favicon-128x128.png"
            alt="Logo"
            width="50"
            height="50"
            color="white"
          />
          site
        </q-toolbar-title>
        <q-btn flat label="Admin" to="/admin/dashboard" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
