<script>
  import Navbar from '../../components/Navbar.svelte'
  import Footer from '../../components/Footer.svelte'
  import BigCard from '../../components/BigCard.svelte'
</script>

<Navbar />
<div>
  <img src="./img/bg.png" class="w-fit" alt="" />
  <div class="px-8">
    <div class="my-8">
      <h1 class="text-[40px] flex justify-center font-bold text-center">
        Discovery Project nominated by the community
      </h1>
      <p class="text-md flex justify-center text-gray-600 mt-2">
        Read more about RetroPGF 3 here
      </p>
    </div>
    <div class="flex flex-wrap justify-center gap-x-6 gap-y-6">
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
      <BigCard />
    </div>
  </div>
</div>
<Footer />
