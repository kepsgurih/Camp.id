<template>
  <b-navbar>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
        src="/favicon.ico"
        >
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="/">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        menu2.0
      </b-navbar-item>
      <b-navbar-dropdown label="Menu3.0">
        <b-navbar-item href="#">
          menu3.1
        </b-navbar-item>
        <b-navbar-item href="#">
          menu3.2
        </b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item href="/">
        menu4.0
      </b-navbar-item>
      <b-navbar-dropdown label="Profile" v-if="IsLogin">
        <b-navbar-item href="/profile">
          Profile Saya
        </b-navbar-item>
        <b-navbar-item href="#">
          Organisasi Saya
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template #end>
      <b-navbar-item tag="div">


        <div class="buttons">
          <router-link class="button is-primary" to="/register" v-if="!IsLogin">
            <strong>Sign up</strong>
          </router-link>
          <router-link class="button is-light" to="/login" v-if="!IsLogin">
            Log in
          </router-link>
          <a class="button is-light" href="javascript:void(0)" @click="handleClick" v-if="IsLogin">
            Logout
          </a>
        </div>



      </b-navbar-item>
    </template>
  </b-navbar>
</template>


<script>

  
  export default {

    name: 'Navbar',
    data(){
      if(localStorage.getItem('IsLogin')==='true'){
        return{
          IsLogin:localStorage.getItem('IsLogin') 
        }
      }
      else{
        return{
          IsLogin: null
        }
      }
    },
    methods: {
      handleClick(){
        localStorage.clear();
        this.$router.push('/')
        location.reload()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
