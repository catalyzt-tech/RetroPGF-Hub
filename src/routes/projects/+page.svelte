<script>
  import Navbar from '@/components/Navbar.svelte'
  import Footer from '@/components/Footer.svelte'
  import BigCard from '@/components/Projects/BigCard.svelte'
</script>

<Navbar />
<div>
  <div class="h-[10em] overflow-hidden">
    <img src="./img/retropgfcity.png" class="w-fit" alt="" />
  </div>
  <div class="px-8">
    <div class="my-8">
      <h1 class="text-[40px] flex justify-center font-bold text-center">
        Discovery Project nominated by the community
      </h1>
      <div class="flex justify-center">
        <p class="text-md text-center text-gray-600 mt-2 max-w-[50em]">
          RetroPGF 3 will allocate 30m OP tokens to reward contributions that
          supported the development and adoption of Optimism. To ensure that
          multiple projects are included in RetroPGF 3.
        </p>
      </div>
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
