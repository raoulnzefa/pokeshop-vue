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
					Your email<br />
					<input
						id="email"
						type="email"
						name="email"
						maxlength="32"
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
				<label>
					Repeat your password<br />
					<input
						id="password"
						type="password"
						name="password_confirmation"
						minlength="8"
						maxlength="64"
						required
					/>
				</label>
				<button type="submit">Sign up</button>
			</form>
			<span>
				Already a member?
				<router-link to="/signin">Sign in!</router-link>
			</span>
		</div>
	</div>
</template>
<style scoped>
@import '../assets/styles/auth.css';
</style>
