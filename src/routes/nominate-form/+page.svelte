<script>
  import Navbar from '../../components/Navbar.svelte'
  import Form from '../../components/Nominate-Form/Form.svelte'
  import Footer from '../../components/Footer.svelte'
</script>

<Navbar />
<div>
  <div class="flex flex-row justify-center text-[30px] font-bold mb-2">
    Nominate Project
  </div>
  <div class="flex justify-center">
    <div class="max-w-[50em] text-center">
      In the spirit of <span
        class="font-semibold bg-[#FF0000] mx-1 px-4 py-1 rounded-xl text-white"
        >impact = profit</span
      >, we want to ensure that all the relevant projects in the Optimism
      Collective sign-up for RetroPGF 3. You can nominate a project here so they
      are notified to sign up for RetroPGF 3
    </div>
  </div>
  <Form />
</div>
<Footer />
