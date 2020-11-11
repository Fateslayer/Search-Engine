<template>
	<div>
		<template v-if="results.items.length">
			<p class="text-muted">About {{ results.totalResults }} results</p>
			<search-result
				v-for="(item, index) in results.items"
				:key="index"
				:result="item"
			></search-result>
		</template>
		<p class="text-center lead" v-else>
			Your search -
			<span class="font-weight-bold">{{ results.query }}</span> did not
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
		results: {
			type: Object,
			required: true,
		},
	},
};
</script>
