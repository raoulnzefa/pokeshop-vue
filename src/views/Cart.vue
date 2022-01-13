<template>
	<div class="breadcrumbs">
		<router-link to="/">Home</router-link>
		<span>/</span>
		<a>Cart</a>
	</div>
	<div class="main">
		<div class="cartList">
			<form class="cartItem" method="POST">
				<img src='" . $product->image . "' />
				<h3>" . $product->name . "</h3>
				<input
					type="number"
					style="display: none"
					name="removeItem"
					value='" . $product->id . "'
				/>
				<input type="submit" name="remove" value="Remove" />
			</form>
			<form class="cartConfirm" method="POST">
				<input type="submit" name="order" value="Submit order" />
			</form>
		</div>
	</div>
</template>
<style scoped>
@import '../assets/styles/cart.css';
</style>
