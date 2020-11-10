<template>
	<div class="container py-3">
		<search-input :value="query" @search="search"></search-input>
	</div>
</template>

<script>
import SearchInput from '../components/SearchInput';

export default {
	components: {
		SearchInput,
	},
	inject: ['search'],
	data() {
		return {
			query: '',
		};
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
