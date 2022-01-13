<template>
	<div class="breadcrumbs">
		<router-link to="/">Home</router-link>
		<span>/</span>
		<a>Sing in</a>
	</div>
	<div class="main">
		<div class="login">
			<h1>Welcome to PokeShop!</h1>
			<form method="POST">
				<label>
					Your name<br />
					<input
						id="name"
						type="name"
						name="name"
						maxlength="10"
						required
					/>
				</label>
				<label>
					Your password<br />
					<input
						id="password"
						type="password"
						name="password"
						minlength="8"
						maxlength="64"
						required
					/>
				</label>
				<button type="submit">Sign in</button>
			</form>
			<span>
				Forgot your password?
				<router-link to="/signin">Let&apos;s get it back!</router-link>
			</span>
			<span>
				Not a member yet?
				<router-link to="/signup">Sign up!</router-link>
			</span>
		</div>
	</div>
</template>
<style scoped>
@import '../assets/styles/auth.css';
</style>
