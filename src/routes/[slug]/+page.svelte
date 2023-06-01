<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;
</script>

<h1>{data?.title}</h1>
<h1>{data?.content}</h1>
