<template>
	<div class="mb-4">
		<h5 class="m-0">
			<a
				class="d-inline-block text-truncate mw-100"
				:href="result.link"
				>{{ result.title }}</a
			>
		</h5>
		<a
			class="d-inline-block text-muted text-decoration-none text-truncate mw-100"
			:href="result.link"
			>{{ result.link }}</a
		>
		<p class="m-0 truncate">{{ result.description }}</p>
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
