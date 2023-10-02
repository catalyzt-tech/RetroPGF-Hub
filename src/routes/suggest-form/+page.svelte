<script>
  import Alertbar from '@/components/Alertbar.svelte'
  import Form from '@/components/Suggest-Form/Form.svelte'
</script>

<Alertbar />
<div class="mt-10">
  <div
    class="flex flex-row flex-wrap justify-center text-[40px] font-bold mb-2"
  >
    Suggest Project
  </div>
  <div class="flex justify-center px-10">
    <div class="max-w-[50em] text-center">
      In the spirit of <span
        class="font-semibold bg-[#FF0000] mx-1 px-4 py-1 rounded-xl text-white"
        >impact = profit</span
      >, we want to ensure that all the relevant projects in the Optimism
      Collective sign-up for RetroPGF 3. You can suggest a project here so they
      are notified to sign up for RetroPGF 3
    </div>
  </div>
  <Form />
</div>
