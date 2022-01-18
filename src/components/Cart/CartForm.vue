<script>
import { defineComponent } from 'vue'
import OrderService from '@/services/OrderService'

export default defineComponent({
	name: 'CartForm',
	props: {
		cart: {
			type: Array,
			isRequired: true,
		},
		cartEmpty: {
			type: Boolean,
			isRequired: true,
		},
	},
	computed: {
		totalQuantity() {
			return this.$store.getters.totalQuantity
		},
		totalPrice() {
			return this.$store.getters.totalPrice
		},
	},
	methods: {
		submitOrder() {
			OrderService.submitOrder(this.cart)
		},
	},
})
</script>

<template>
	<div v-if="!cartEmpty" class="cartSubmit">
		<span>${{ totalPrice }} for {{ totalQuantity }} positions</span>
		<button type="submit" name="order" @click.prevent="submitOrder">
			Submit order
		</button>
	</div>
	<div v-else class="cartSubmit">
		<span style="border-radius: 10px">
			Nothing in cart yet, start shopping!
		</span>
	</div>
</template>

<style scoped>
@import '../../assets/styles/cart.css';
</style>
