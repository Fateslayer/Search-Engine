<template>
	<div class="container py-3">
		<search-input :value="query" @search="search"></search-input>
		<hr />
		<p class="text-center lead" v-if="searching">
			Loading...
		</p>
		<template v-if="results.length">
			<p class="text-muted">About {{ total }} results</p>
			<search-results
				class="mt-3"
				:results="results"
				:queryWords="queryWords"
			></search-results>
		</template>
		<p class="text-center lead" v-else>
			Your query <span class="font-weight-bold">{{ query }}</span> did not
			match any documents.
		</p>
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
			page: 1,
			limit: 10,
			query: '',
			resultData: {},
			searching: false,
		};
	},
	computed: {
		total() {
			return this.resultData.total || 0;
		},
		results() {
			return this.resultData.results || [];
		},
		queryWords() {
			let words = this.resultData.query.split(' ');
			let unique = {};

			words.forEach(word => {
				unique[word] = '';
			});

			words = Object.keys(unique);

			return words;
		},
	},
	methods: {
		async init() {
			this.setQuery();
			await this.getResults();
			this.redirectIfOutOfBoundsPage();
		},
		async setQuery() {
			this.query = this.$route.query.q;
			this.page = Math.abs(+this.$route.query.page || 1);
			this.limit = Math.abs(+this.$route.query.limit || 10);
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
		redirectIfOutOfBoundsPage() {
			const query = this.query;
			const total = this.resultData.total;
			const count = this.resultData.results.length;

			if (total !== 0 && count === 0) {
				this.$router.replace({
					path: '/search',
					query: {
						q: query,
					},
				});
			}
		},
	},
	created() {
		this.init();
	},
	watch: {
		$route() {
			this.init();
		},
	},
};
</script>
