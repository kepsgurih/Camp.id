<template>
	<section>
		<div class="hero is-fullheight is-primary">
			<div class="hero is-fullheight is-primary">
				<div class="hero-body">
					<div class="container has-text-centered">
						<div class="column is-4 is-offset-4">
							<h3 class="title has-text-white">Register</h3>
							<hr class="login-hr">
							<p class="subtitle has-text-white">Halo Pendaki<br>Ayo Bergabung bersama kami !
							</p>
							<b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>
							<div class="box">
								<form @submit.prevent="handleSubmit">
									<b-field>
										<b-input v-model="fullName" placeholder="Nama pengguna" type="text" icon-pack="fas" icon="user" rounded>
										</b-input>
									</b-field>
									<b-field>
										<b-input placeholder="No. Whatsapp"
										v-model="phoneNo"
										type="number"
										required
										validation-message="Masukan no. HP"
										icon-pack="fab" icon="whatsapp"
										rounded
										>
									</b-input>
								</b-field>
								<b-field>
									<b-input
									v-model="email" 
									placeholder="Email" type="email" icon-pack="fas" icon="envelope" 
									validation-message="Masukan email yg valid"
									rounded>
								</b-input>
							</b-field>
							<b-field>
								<b-input 
								v-model="password"
								placeholder="Password" type="password" icon-pack="fas" icon="key" rounded password-reveal>
								</b-input>
							</b-field>
							<button class="button is-block is-success is-rounded is-fullwidth">Register</button>
						</form>

					</div>
					<span class="icon">
						<i class="fab fa-google"></i>
					</span>
					<span>Masuk dengan Google</span>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
</template>
<script>
import axios from 'axios';
export default{
	name: 'RegisterScreen',
	data(){
		return{
			fullName: '',
			phoneNo: '',
			email: '',
			password: '',
			userType: 1,
			isLoading: false,
			isFullPage: true

		}
	},
	methods:{
		async handleSubmit(){
			const response = await axios.post('http://144.76.33.10:8090/campingceria/master/user/register',{
				email: this.email,
				password: this.password,
				phoneNo: this.phoneNo,
				fullName: this.fullName,
				userType: this.userType,
				loginType: this.loginType,
			});
			if (response.data.data.code==0){
				const responseData = await axios.post("http://144.76.33.10:8090/campingceria/master/user/login",{
					email: this.email,
					password: this.password,
				});
				if (responseData.data.data.email){
					localStorage.setItem('IsLogin', 'true');
					localStorage.setItem('email', responseData.data.data.email);
					localStorage.setItem('fullName', responseData.data.data.fullName);
					localStorage.setItem('phoneNo', responseData.data.data.phoneNo);
					localStorage.setItem('pu', responseData.data.data.pkUser);
					localStorage.setItem('ut', responseData.data.data.userType);
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
			else{
				alert('Isi data dengan valid untuk kenyamanan anda')
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