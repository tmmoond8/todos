<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Home from "./pages/Home.svelte";
	import Done from "./pages/Done.svelte";

</script>

<Router>
	<main>
		<h1>Svelte를 사용한 Todo App 코드 입니다.</h1>
		<Route path="/done">
			<Done />
		</Route>
		<Route path="*">
			<Home />
		</Route>
	</main>
</Router>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>