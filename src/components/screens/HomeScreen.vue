<template>
	<section class="section">
    <div class="container">
      <div class="columns is-desktop">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <b-image
              src="https://picsum.photos/600/400"
              alt="A random image"
              ratio="3by1"
              :rounded="rounded"
              ></b-image>
            </div>
            <header class="card-header">
              <h1 class="card-header-title">
                Contoh Item
              </h1>
            </header>
            <div class="card-content">
              <div class="content">
                Perjalanan menuju <strong>Gunung pancar</strong>
                <br>
                Harga perjalanan Rp. 500.000 ,-
                <br>
                <br>
                <p>Berangkat: <time datetime="2016-3-21">11:09 PM - 21 Maret 2021</time></p>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third">


          <div class="card" v-if="user">
            <header class="card-header">
              <p class="card-header-title">
                {{fullName}}
              </p>
            </header>
            <div id="profile-content" class="content">
              <br />
              <p><b-icon
                pack="fas"
                icon="envelope"
                type="is-info">
              </b-icon> &nbsp; {{email}}</p> 
              <div v-if="phoneNo">
                <p><b-icon
                  pack="fab"
                  icon="whatsapp"
                  type="is-success">
                </b-icon> &nbsp; {{phoneNo}}</p> 
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">Edit Profile</a>
            </footer>
          </div>

          <div class="card" v-if="!user">
            <header class="card-header">
              <p class="card-header-title">
                Halo Pendaki ! Mau nanjak kemana ?
              </p>
            </header>
          </div>




        </div>
      </div>
    </div>
  </section>    
</template>

<script>

	export default{
		name: 'HomeScreen',
    data(){
      if(localStorage.getItem('IsLogin')==='true'){
        if(localStorage.getItem('phoneNo')===null){
          return{
            user: true,
            email: localStorage.getItem('email'),
            fullName: localStorage.getItem('fullName')
          }
        }
        else{
          return{
            phoneNo: null
          }
        }
      }
      else{
        return{
          user: null
        }
      }
    }
  }

</script>

<style scoped>
#profile-content{
  margin-left: 10px;
}
</style>