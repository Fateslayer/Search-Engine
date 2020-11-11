<template>
	<div class="container py-3">
		<search-input :value="query" @search="search"></search-input>
		<hr />
		<search-results class="mt-3" :results="results"></search-results>
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
				items: [
					{
						title:
							'DFSD - What does DFSD stand for? The Free Dictionary',
						link: 'https://www.dfsd.org/',
						description:
							'Dry fibrin sealant dressing (DFSD) (American Red Cross Holland Laboratory, Rockville, MD) was made of lyophilized clotting proteins purified from pooled human',
					},
					{
						title:
							'DFSD - What does DFSD stand for? The Free Dictionary',
						link: 'https://www.dfsd.org/',
						description:
							'Dry fibrin sealant dressing (DFSD) (American Red Cross Holland Laboratory, Rockville, MD) was made of lyophilized clotting proteins purified from pooled human',
					},
					{
						title:
							'DFSD - What does DFSD stand for? The Free Dictionary',
						link: 'https://www.dfsd.org/',
						description:
							'Dry fibrin sealant dressing (DFSD) (American Red Cross Holland Laboratory, Rockville, MD) was made of lyophilized clotting proteins purified from pooled human',
					},
					{
						title:
							'DFSD - What does DFSD stand for? The Free Dictionary',
						link: 'https://www.dfsd.org/',
						description:
							'Dry fibrin sealant dressing (DFSD) (American Red Cross Holland Laboratory, Rockville, MD) was made of lyophilized clotting proteins purified from pooled human',
					},
					{
						title:
							'DFSD - What does DFSD stand for? The Free Dictionary',
						link: 'https://www.dfsd.org/',
						description:
							'Dry fibrin sealant dressing (DFSD) (American Red Cross Holland Laboratory, Rockville, MD) was made of lyophilized clotting proteins purified from pooled human',
					},
				],
				query: this.query,
				page: 1,
				pages: 9000,
				totalResults: 900,
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
