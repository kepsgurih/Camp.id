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
    clientId: '362206884080-qpfsespd4ft2ivdi5uk6l3k4nuuper8k.apps.googleusercontent.com',
  }),
  methods: {
    async OnGoogleAuthSuccess (idToken) {
      const code = idToken;
      const response = await axios.get("https://oauth2.googleapis.com/tokeninfo?id_token="+code);
      if(response.data.email){
        console.log(response.data.email);
        console.log(response.data.name);
         const responseData = await axios.post("http://144.76.33.10:8090/campingceria/master/user/login",{
         pkUser: 1,
         email: response.data.email,
         fullName: response.data.name,
         googleId: response.data.sub,
         imageUrl: response.data.picture,
         userType: 1,
         loginType: 2
       });
       console.log(responseData); 
      }else{
        location.reload();
      }
      
    },
    OnGoogleAuthFail (error) {
      console.log(error)
    }
  }
};
</script>
