<template>
	<div class="header">
		<div class="logo">
			<img src="/img/pokeball.png" alt="PokeShop logo" />
			<span>PokéShop</span>
		</div>
		<div class="info">
			<router-link :to="{ name: 'Home' }">ABOUT</router-link>
			<router-link :to="{ name: 'Catalog' }">CATALOG</router-link>
			<a href="https://github.com/PAXANDDOS">CONTACT</a>
		</div>
		<div class="search">
			<input
				type="search"
				placeholder="Search Pikachu, Plush, T-Shirts..."
			/>
		</div>
		<div class="user">
			<router-link :to="{ name: 'SignIn' }">SIGN IN</router-link>
		</div>
	</div>
	<router-view />
	<footer>
		<a href="https://paxanddos.github.io/" target="_blank"
			>Copyright &#169; PokéShop | PAXANDDOS | All rights reserved</a
		>
	</footer>
</template>

<style>
@import './assets/styles/style.css';
</style>
