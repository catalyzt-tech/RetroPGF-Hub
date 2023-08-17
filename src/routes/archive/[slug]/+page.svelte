<script lang="ts">
  import Navbar from '../../../components/Navbar.svelte'
  import Footer from '../../../components/Footer.svelte'
  export let data
  const { detail } = data
  console.log(detail)
</script>

<Navbar />
<div class="flex justify-center">
  <div class=" border-2 rounded-3xl p-10 border-black w-[50em] h-64 m-20">
    <div class="text-center text-xl font-bold">{detail?.['Project Name']}</div>
    <div>About the project</div>
    <div>Project website</div>
    <div>Funding allocation</div>
    <div>
      How do you support development and usage of the OP Stack? What public good
      do you provide to the Collective?
    </div>
    <div>
      How do you sustain yourself? Please list sources of funding and revenue
    </div>
    <div>Recipient Address</div>
  </div>
</div>

<Footer />

<!-- <pre>
      {JSON.stringify($page, null, 2)}
</pre> -->
