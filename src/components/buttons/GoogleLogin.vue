<template>
    <div>

        <button v-google-signin-button="clientId" class="button is-rounded">
								<span class="icon">
									<i class="fab fa-google"></i>
								</span>
								<span>Masuk dengan Google</span>
							</button>
    </div>
</template>
<script>
import GoogleSignInButton from 'vue-google-signin-button-directive'
import axios from 'axios'
export default {
  directives: {
    GoogleSignInButton
  },
  data: () => ({
    clientId: '362206884080-qpfsespd4ft2ivdi5uk6l3k4nuuper8k.apps.googleusercontent.com'
  }),
  methods: {
    async OnGoogleAuthSuccess (idToken) {
      const code = idToken;
      const response = await axios.get("https://oauth2.googleapis.com/tokeninfo?id_token="+code);
      console.log(response);
      if (response.data.email){
          localStorage.setItem('IsLogin', 'true');
          localStorage.setItem('email', response.data.email);
          localStorage.setItem('fullName', response.data.name);
          localStorage.setItem('pu', response.data.exp);
          localStorage.setItem('ut', 1);
          this.isLoading = false
          this.$buefy.toast.open({
            duration: 5000,
            message: 'Halo '+ localStorage.getItem('fullName'),
            type: 'is-success'
          })
          this.$router.push('/');
          location.reload()
        }
        else{
          this.$buefy.toast.open({
            duration: 5000,
            message: `Username atau Password yang anda masukan salah !`,
            type: 'is-danger'
          })
          this.isLoading = false
        }
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
}
</script>
