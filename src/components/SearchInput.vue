<template>
	<form class="input-group w-50">
		<input
			required
			type="text"
			aria-label="Type here"
			class="form-control shadow"
			aria-describedby="search-button"
		/>
		<div class="input-group-append">
			<button
				type="submit"
				id="search-button"
				class="btn btn-outline-dark shadow"
			>
				Search
			</button>
		</div>
	</form>
</template>

<style scoped>
.form-control:focus {
	border-color: #343a40;
}
</style>
