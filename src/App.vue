<template>
	<router-view />
</template>

<script>
export default {
	provide() {
		return {
			search: this.search,
		};
	},
	methods: {
		search(query) {
			const options = { name: 'Search', query: { q: query } };
			this.$router.push(options);
		},
	},
};
</script>

<style>
body {
	font-family: 'Roboto', sans-serif;
}
</style>
