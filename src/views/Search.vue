<template>
	<div class="container py-4">
		<search-input :value="query" @search="search"></search-input>
		<hr class="my-4" />
		<search-results :results="results"></search-results>
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
		};
	},
	computed: {
		results() {
			return {
				items: [],
				query: this.query,
			};
		},
	},
	methods: {
		setQuery() {
			this.query = this.$route.query.q;
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
