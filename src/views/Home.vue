<template>
	<div
		class="container min-vh-100 d-flex flex-column align-items-center justify-content-center"
	>
		<h1 class="display-4 mb-4">Search Engine</h1>
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
