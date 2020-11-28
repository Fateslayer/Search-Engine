<template>
	<div>
		<template v-if="resultData.results && resultData.results.length">
			<p class="text-muted">About {{ resultData.total }} results</p>
			<search-result
				v-for="(result, index) in resultData.results"
				:key="index"
				:result="result"
			></search-result>
		</template>
		<p class="text-center lead" v-else-if="searching">
			Loading...
		</p>
		<p class="text-center lead" v-else>
			Your search -
			<span class="font-weight-bold">{{ resultData.query }}</span> did not
			match any documents.
		</p>
	</div>
</template>

<script>
import SearchResult from './SearchResult';

export default {
	components: {
		SearchResult,
	},
	props: {
		resultData: {
			type: Object,
			required: true,
		},
		searching: {
			type: Boolean,
			required: true,
		},
	},
};
</script>
