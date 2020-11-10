<template>
	<form @submit.prevent="search" class="input-group">
		<input
			required
			type="text"
			v-model.trim="query"
			class="form-control shadow"
			aria-label="Enter query here"
			placeholder="Enter query here"
			aria-describedby="search-button"
		/>
		<div class="input-group-append">
			<button
				type="submit"
				id="search-button"
				class="btn btn-outline-dark shadow"
			>
				Search
			</button>
		</div>
	</form>
</template>

<script>
export default {
	emits: ['search'],
	data() {
		return {
			query: '',
		};
	},
	methods: {
		search() {
			this.$emit('search', this.query);
		},
	},
};
</script>

<style scoped>
.form-control:focus {
	border-color: #343a40;
}
</style>
