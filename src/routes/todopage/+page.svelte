<script lang="ts">
	import type { PageServerData, PageServerLoad } from './$types';

	export let data: PageServerData;
</script>

<div>
	<ul>
		{#each data.todos as todo}
			<li><a href="/{todo.id}">{todo.title}</a></li>
		{/each}
	</ul>
</div>
