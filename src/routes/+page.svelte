<script>
  import Navbar from '../components/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<div>
  <Navbar />
  <!-- <img src="/img/bg.png" alt="op collective" class="w-screen" /> -->
</div>
<div class="bg-[#FFE8E8] w-full h-[40em]">
  <div class="pt-20 flex justify-center items-center">
    <img src="img/sun.png" class="w-[15em]" alt="OP Sun" />
  </div>

  <h1
    class="flex flex-row pt-10 text-black text-[30px] font-bold justify-center"
  >
    Welcome to RetroPGF Hub!
  </h1>
  <p class="flex flex-row justify-center text-lg p-2">
    Nominate, Explore and Discover
  </p>
  <div class="mt-3 flex flex-row justify-center">
    <button
      class="bg-black font-medium text-white py-3 px-8 rounded-[1em] text-lg"
    >
      Get involved</button
    >
  </div>
  <div class="flex justify-center mt-16 animate-bounce">
    <img src="/img/arrow_down2.png" class="w-6" alt="arrow" />
  </div>
</div>
<div class="w-full h-[40em]">
  <div class="pt-6 flex flex-row text-[60px] justify-center italic">"</div>
  <h1 class="mb-6 flex flex-row justify-center text-[30px] italic font-medium">
    RetroPGF Hub is not only a place, but rather, it is about the OPtimist and
    collective.
  </h1>
  <div class=" flex flex-row text-[60px] justify-center italic">"</div>
  <p class="flex flex-row justify-center text-lg">
    Let's Collaborate and Share Ideas: Together, We Shape Retroactive Public
    Good Funding.
  </p>
</div>
<Footer />
