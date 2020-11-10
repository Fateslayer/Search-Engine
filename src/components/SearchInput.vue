<template>
	<form class="input-group w-50">
		<input
			required
			type="text"
			class="form-control shadow"
			aria-label="Enter query here"
			placeholder="Enter query here"
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
