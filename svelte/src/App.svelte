<script>
	import { todos, addTodo, toggleTodo } from './todos';
	export let inputText;

</script>

<main>
	<h1>Svelte를 사용한 Todo App 코드 입니다.</h1>
	<div class="input-form">
		<button on:click={() => {
			addTodo(inputText);
			inputText = '';
		}}>add</button>
		<input type="text" bind:value={inputText} on:keydown={(e) => {
			if (e.key === 'Enter' && inputText.length > 0) {
				addTodo(inputText)
				inputText = '';
			}
		}}/>
	</div>
	<ol>
		{#each $todos as todo, index }
			<li on:click|preventDefault={() => toggleTodo(index)}>
				<label for={todo.id} class={todo.completed ? "completed" : ""} >
					<input type="checkbox" id={todo.id} checked={todo.completed}/> {todo.content}
				</label>
			</li>
		{/each}
	</ol>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	.input-form {
		display: flex;
		justify-content: center;
	}

	ol {
		max-width: 400px;
		list-style: disc;
		margin: 20px auto 0 auto;
		text-align: left;
	}

	li + li {
		margin-top: 6px;
	}

	label.completed {
		text-decoration: line-through;
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