<script>
  import Navbar from '../../components/Navbar.svelte'
  import Footer from '../../components/Footer.svelte'
  import BigCard from '../../components/BigCard.svelte'
</script>

<Navbar />
<div>
  <h1 class="text-[40px] flex justify-center font-bold">
    Discovery Project nominated by the community
  </h1>
  <p class="text-md flex justify-center">Read more about RetroPGF3 here</p>
  <div class="flex flex-wrap justify-center">
    <BigCard />
    <BigCard />
    <BigCard />
    <BigCard />
    <BigCard />
    <BigCard />
  </div>
</div>
<Footer />
