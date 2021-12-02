<script>
  import { Link } from 'svelte-navigator';
  import { todos, addTodo, toggleTodo } from '../todos'
	export let inputText;
</script>

<Link to="/done">완료된 아이템으로 가기</Link>
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


<style>
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>