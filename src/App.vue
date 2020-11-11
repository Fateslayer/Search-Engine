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

.truncate {
	overflow: hidden;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	text-overflow: ellipsis;
	-webkit-box-orient: vertical;
}
</style>
