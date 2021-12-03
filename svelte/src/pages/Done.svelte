<script>
	import { useNavigate } from 'svelte-navigator';
  import { todos } from '../todos'
	
	$: dones = $todos.filter(({completed}) => completed)

	const navigator = useNavigate();

</script>

<a on:click={() => navigator(-1)}>뒤로 가기</a>
<ol>
  {#each dones as todo, index }
    <li on:click|preventDefault={() => toggleTodo(index)}>
      {todo.content}
    </li>
  {/each}
	{#if dones.length === 0}
		<p>완료된 아이템이 없습니다.</p>
	{/if}
</ol>


<style>
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