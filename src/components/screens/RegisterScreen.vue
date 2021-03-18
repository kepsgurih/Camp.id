<template>
	<section>
		<div class="hero is-fullheight is-primary">
			<div class="hero is-fullheight is-primary">
				<div class="hero-body">
					<div class="container has-text-centered">
						<div class="column is-4 is-offset-4">
							<h3 class="title has-text-white">Register</h3><hr class="login-hr"><p class="subtitle has-text-white">Halo Pendaki<br>Ayo Bergabung bersama kami !</p>
							<div class="box">
								<form>
									<b-field>
										<b-input placeholder="Nama pengguna" type="text" icon-pack="fas" icon="user" rounded>
										</b-input>
									</b-field>
									<b-field>
										<b-input placeholder="No. Whatsapp"
										type="number"
										required
										validation-message="Masukan no. HP"
										icon-pack="fab" icon="whatsapp"
										rounded
										>
									</b-input>
								</b-field>
								<b-field>
									<b-input placeholder="Email" type="email" icon-pack="fas" icon="envelope" 
									validation-message="Masukan email yg valid"
									rounded>
									</b-input>
								</b-field>
								<b-field>
									<b-input placeholder="Password" type="password" icon-pack="fas" icon="key" rounded password-reveal>
									</b-input>
								</b-field>
							</form>

						</div>
						<a class="button is-rounded">
							<span class="icon">
								<i class="fab fa-google"></i>
							</span>
							<span>Masuk dengan Google</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
</template>
<script>
	export default{
		name: 'RegisterScreen',
	}
	
</script>
<style scoped>
.main-login{
	margin-right: 10px;
}
</style>