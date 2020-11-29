<template>
	<nav
		v-if="hasManyPages"
		class="d-flex align-items-center justify-content-center"
	>
		<router-link
			class="mx-2"
			v-for="n in pages"
			:key="n"
			:to="getUrl(n)"
			:class="getClasses(n)"
			>{{ n }}</router-link
		>
		<router-link class="mx-2" v-if="hasNextPage" :to="getUrl(page + 1)"
			>Next</router-link
		>
	</nav>
</template>

<script>
export default {
	props: {
		page: {
			type: Number,
			required: true,
		},
		total: {
			type: Number,
			required: true,
		},
		limit: {
			type: Number,
			required: true,
		},
		query: {
			type: String,
			required: true,
		},
	},
	computed: {
		pages() {
			const maxPages = Math.ceil(this.total / this.limit);

			if (maxPages > 10) {
				return 10;
			} else {
				return maxPages;
			}
		},
		hasNextPage() {
			return this.page < this.pages;
		},
		hasManyPages() {
			return this.pages > 1;
		},
	},
	methods: {
		getUrl(n) {
			return {
				path: 'search',
				query: {
					q: this.query,
					page: n,
				},
			};
		},
		getClasses(n) {
			return {
				active: n === this.page,
			};
		},
	},
};
</script>

<style scoped>
a.active {
	color: black;
	text-decoration: none;
	pointer-events: none;
}
</style>
