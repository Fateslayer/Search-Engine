<template>
	<div class="results">
		<template v-if="results.items.length">
			<p>Results Found</p>
		</template>
		<p class="text-center lead" v-else>
			Your search -
			<span class="font-weight-bold">{{ results.query }}</span> did not
			match any documents.
		</p>
	</div>
</template>

<script>
export default {
	props: {
		results: {
			type: Object,
			required: true,
		},
	},
};
</script>
