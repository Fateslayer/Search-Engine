<template>
	<div class="container py-3">
		<search-input :value="query" @search="search"></search-input>
		<hr />
		<search-results
			class="mt-3"
			:resultData="resultData"
			:searching="searching"
		></search-results>
	</div>
</template>

<script>
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';

export default {
	components: {
		SearchInput,
		SearchResults,
	},
	inject: ['search'],
	data() {
		return {
			query: '',
			page: 1,
			limit: 10,
			resultData: {},
			searching: false,
		};
	},
	methods: {
		setQuery() {
			this.query = this.$route.query.q;
			this.page = Math.abs(+this.$route.query.page || 1);
			this.limit = Math.abs(+this.$route.query.limit || 10);
			this.getResults();
		},
		async getResults() {
			this.searching = true;
			this.resultData = {};
			const url = `http://localhost:3000/search?q=${this.query}&page=${this.page}&limit=${this.limit}`;
			const response = await fetch(url);

			if (response.ok) {
				this.resultData = await response.json();
			}

			this.searching = false;
		},
	},
	created() {
		this.setQuery();
	},
	watch: {
		$route() {
			this.setQuery();
		},
	},
};
</script>
