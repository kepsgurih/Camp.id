<template>
  <div id="app">
    <Navbar />
    <router-view/>
    
    </div>
  </template>

  <script>

  import Vue from 'vue'
  import Buefy from 'buefy'
  import 'buefy/dist/buefy.css'
  Vue.use(Buefy)

    import Navbar from './components/sections/NavbarSection'

    export default {
      name: 'App',
      components: {
        Navbar,

      },
    }
  </script>

  <style>
</style>
