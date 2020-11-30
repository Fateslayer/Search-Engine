<template>
	<div class="container py-3">
		<search-input :value="query" @search="search"></search-input>
		<hr />
		<spinner v-if="searching"></spinner>
		<template v-if="results.length">
			<p class="text-muted">About {{ total }} results</p>
			<search-results
				class="mt-3"
				:results="results"
				:queryWords="queryWords"
			></search-results>
			<pagination
				:page="page"
				:total="total"
				:limit="limit"
				:query="query"
			></pagination>
		</template>
		<p class="text-center lead" v-else-if="error">
			{{ error }}
		</p>
		<p class="text-center lead" v-else-if="!searching">
			Your query <span class="font-weight-bold">{{ query }}</span> did not
			match any documents.
		</p>
	</div>
</template>

<script>
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination';
import SearchInput from '../components/SearchInput';
import SearchResults from '../components/SearchResults';

export default {
	components: {
		Spinner,
		Pagination,
		SearchInput,
		SearchResults,
	},
	inject: ['search'],
	data() {
		return {
			page: 1,
			limit: 10,
			error: '',
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
			this.error = '';
			this.searching = true;
			this.resultData = {};
			const url = `http://localhost:3000/search?q=${this.query}&page=${this.page}&limit=${this.limit}`;
			const response = await fetch(url).catch(() => {
				return {};
			});

			if (response.ok) {
				this.resultData = await response.json();
			} else {
				this.error = 'Something went wrong!';
			}

			this.searching = false;
		},
		redirectIfOutOfBoundsPage() {
			if (!this.error) {
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
