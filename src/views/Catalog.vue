<script>
import { defineComponent } from 'vue'
import CatalogCard from '@/components/CatalogCard.vue'
import ProductService from '@/services/ProductService'

export default defineComponent({
	components: {
		CatalogCard,
	},
	data() {
		return {
			catalog: null,
		}
	},
	created() {
		// ProductService.getCatalog()
		// 	.then((response) => {
		// 		this.catalog = response.data
		// 	})
		// 	.catch((error) => {
		// 		console.log(error)
		// 	})
		this.catalog = ProductService.getCatalog()
	},
})
</script>

<template>
	<div class="breadcrumbs">
		<router-link to="/">Home</router-link>
		<span>/</span>
		<a>Catalog</a>
	</div>
	<div class="main">
		<div class="filters">
			<h2>FILTERS</h2>
			<form>
				<h3>Poké Plush</h3>
				<input
					id="6inch"
					type="checkbox"
					name="6inch"
					class="custom-checkbox"
				/>
				<label for="6inch">6" and Under</label><br />
				<input
					id="7inch"
					type="checkbox"
					name="7inch"
					class="custom-checkbox"
				/>
				<label for="7inch">Over 6" to 7"</label><br />
				<input
					id="8inch"
					type="checkbox"
					name="8inch"
					class="custom-checkbox"
				/>
				<label for="8inch">Over 7" to 8"</label><br />
				<input
					id="10inch"
					type="checkbox"
					name="10inch"
					class="custom-checkbox"
				/>
				<label for="10inch">Over 8" to 10"</label><br />
				<input
					id="15inch"
					type="checkbox"
					name="15inch"
					class="custom-checkbox"
				/>
				<label for="15inch">Over 10" to 15"</label><br />
				<input
					id="Jinch"
					type="checkbox"
					name="Jinch"
					class="custom-checkbox"
				/>
				<label for="Jinch">Over 15" to Jumbo</label><br />
			</form>
			<form>
				<h3>Clothing</h3>
				<input
					id="tshirts"
					type="checkbox"
					name="tshirts"
					class="custom-checkbox"
				/>
				<label for="tshirts">T-Shirts</label><br />
				<input
					id="hoodies"
					type="checkbox"
					name="hoodies"
					class="custom-checkbox"
				/>
				<label for="hoodies">Hoodies</label><br />
				<input
					id="caps"
					type="checkbox"
					name="caps"
					class="custom-checkbox"
				/>
				<label for="caps">Caps, Hats, Beanies</label><br />
				<input
					id="socks"
					type="checkbox"
					name="socks"
					class="custom-checkbox"
				/>
				<label for="socks">Socks</label><br />
				<input
					id="bags"
					type="checkbox"
					name="bags"
					class="custom-checkbox"
				/>
				<label for="bags">Bags</label><br />
			</form>
			<form>
				<h3>Figures & Pins</h3>
				<input
					id="figma"
					type="checkbox"
					name="figma"
					class="custom-checkbox"
				/>
				<label for="figma">Figma</label><br />
				<input
					id="funko"
					type="checkbox"
					name="funko"
					class="custom-checkbox"
				/>
				<label for="funko">Funko</label><br />
				<input
					id="nendoroid"
					type="checkbox"
					name="nendoroid"
					class="custom-checkbox"
				/>
				<label for="nendoroid">Nendoroid</label><br />
				<input
					id="tcg"
					type="checkbox"
					name="tcg"
					class="custom-checkbox"
				/>
				<label for="tcg">TCG Sets</label><br />
			</form>
			<form>
				<h3>Video game</h3>
				<input
					id="games"
					type="checkbox"
					name="games"
					class="custom-checkbox"
				/>
				<label for="games">Games</label><br />
				<input
					id="hardware"
					type="checkbox"
					name="hardware"
					class="custom-checkbox"
				/>
				<label for="hardware">Hardware</label><br />
			</form>
			<form>
				<h3>Pricing</h3>
				<input
					id="range"
					type="range"
					name="pricing"
					min="0"
					max="9999"
					step="1"
					value="0"
				/><br />
				<div id="rangenum">
					<label id="min">0</label>
					<label id="max">999</label>
				</div>
			</form>
		</div>
		<div class="list">
			<div class="page_head">
				<div id="number">
					<h2>CATALOG</h2>
					<span><b>PRODUCTS:</b>1 - 10</span>
				</div>
				<div id="pages">
					<span>SORT BY:</span>
					<select class="custom-select">
						<option>Revelance</option>
						<option>Price (low to high)</option>
						<option>Price (high to low)</option>
						<option>Newest</option>
						<option>Top Selling</option>
					</select>
					<span>ITEMS PER PAGE:</span>
					<select class="custom-select">
						<option>30</option>
						<option>60</option>
						<option>90</option>
					</select>
					<span>PAGE:</span>
					<select class="custom-select">
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
						<option>6</option>
					</select>
				</div>
			</div>
			<div class="page_body">
				<CatalogCard
					v-for="product in catalog"
					:key="product.id"
					:product="product"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
@import '../assets/styles/catalog.css';
</style>
