<script>
  import Card from '../../components/Archive/Card.svelte'
  import Data from '../../data/results.json'
  import Navbar from '../../components/Navbar.svelte'
  import Footer from '../../components/Footer.svelte'
</script>

<Navbar />
<div>
  <img src="./img/opsunsmile.png" alt="OPBanner" class="w-screen" />
</div>
<div class="px-[10em]">
  <h1 class="text-center font-bold mt-6 text-[40px]">Nominated Projects</h1>
  <p class="text-center text-[20px] mb-3">
    Read more about process and result in RetroPGF2 here
  </p>
  <div class="flex flex-wrap justify-center">
    {#each Data as project}
      <Card name={project['Project Name']} category={project['Category']} />
    {/each}
  </div>
</div>
<Footer />
