<template>
	<section>
		<div class="hero is-fullheight is-primary">
			<div class="hero is-fullheight is-primary">
				<div class="hero-body">
					<div class="container has-text-centered">
						<div class="column is-4 is-offset-4">
							<h3 class="title has-text-white">Login</h3><hr class="login-hr"><p class="subtitle has-text-white">Kamu bisa langsung tersambung dengan Google kok</p>
							<div class="box">
								<form @submit.prevent="handleSubmit">
									<b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>
									<div class="field ">
										<div class="control">
											<input class="input is-rounded" type="email" v-model="email" placeholder="Email" autofocus="">
										</div>
									</div>
									<div class="field">
										<div class="control">
											<input class="input is-rounded" type="password" v-model="password" placeholder="Password">
										</div>
									</div>
									<br>
									<div class="columns">
										<div class="column">
											<a class="button is-block is-warning is-rounded is-fullwidth" href="/register">Register</a>	
										</div>
										<div class="column">
											<button class="button is-block is-success is-rounded is-fullwidth">Login</button>	
										</div>
									</div>
								</form>

							</div>
							<GoogleLogin />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
	import axios from 'axios'
	import GoogleLogin from '../buttons/GoogleLogin.vue'
	export default{
		name: 'LoginScreen',
		components:{
			GoogleLogin,
		},
		data(){
			return{
				email:'',
				password:'',
				isLoading: false,
				isFullPage: true
			}
		},
		methods:{
			say: function (message) {
				alert(message)
			},
			async handleSubmit(){
				this.isLoading = true
				const response = await axios.post("http://144.76.33.10:8090/campingceria/master/user/login",{
					email: this.email,
					password: this.password,
				});
				if (response.data.data.email){
					localStorage.setItem('IsLogin', 'true');
					localStorage.setItem('email', response.data.data.email);
					localStorage.setItem('fullName', response.data.data.fullName);
					localStorage.setItem('phoneNo', response.data.data.phoneNo);
					localStorage.setItem('pu', response.data.data.pkUser);
					localStorage.setItem('ut', response.data.data.userType);
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
			}
		}
	}
	
</script>
<style scoped>
.main-login{
	margin-right: 10px;
}
</style>