<template>
	<div class="container py-3">
		<search-input @search="search"></search-input>
	</div>
</template>

<script>
import SearchInput from '../components/SearchInput';

export default {
	components: {
		SearchInput,
	},
	inject: ['search'],
};
</script>
