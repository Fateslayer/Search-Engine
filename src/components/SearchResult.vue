<template>
	<div class="mb-4">
		<p class="lead m-0">
			<a :href="result.link">{{ result.title }}</a>
		</p>
		<p class="mb-2">
			<a class="text-muted text-decoration-none" :href="result.link">{{
				result.link
			}}</a>
		</p>
		<p class="m-0">{{ result.description }}</p>
	</div>
</template>

<script>
export default {
	props: {
		result: {
			type: Object,
			required: true,
		},
	},
};
</script>
