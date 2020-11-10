<template>
	<div class="min-vh-100">
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
