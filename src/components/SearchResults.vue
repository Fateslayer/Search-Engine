<template>
	<div>
		<search-result
			v-for="(result, index) in results"
			:key="index"
			:result="result"
			:queryWords="queryWords"
		></search-result>
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
			type: Array,
			required: true,
		},
		queryWords: {
			type: Array,
			required: true,
		},
	},
};
</script>
