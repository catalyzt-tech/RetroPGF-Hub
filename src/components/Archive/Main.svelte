<script lang ='ts'>
    import Card from "./Card.svelte";
    import Data from "./results.json";
</script>

<h1 class="text-center font-bold mt-6 text-xl">Nominated Projects</h1>
<p class="text-center">Read more about process and result in RetroPGF2 here</p>
<div class="flex flex-wrap justify-center">
    {#each Data as project}
        <Card name={project['Project Name']} category={project['Category']} />
    {/each}
</div>
