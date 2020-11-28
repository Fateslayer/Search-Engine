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
		<p class="m-0 truncate" v-html="description"></p>
	</div>
</template>

<script>
export default {
	props: {
		result: {
			type: Object,
			required: true,
		},
		queryWords: {
			type: Array,
			required: true,
		},
	},
	computed: {
		description() {
			let { description } = this.result;

			for (const word of this.queryWords) {
				description = description.replace(
					new RegExp(`(${word})`, 'i'),
					'<strong>$1</strong>'
				);
			}

			return description;
		},
	},
};
</script>
