<script lang="ts">
  import Navbar from '../../../components/Navbar.svelte'
  import Footer from '../../../components/Footer.svelte'
  import DetailCard from '../../../components/DetailCard.svelte'
  export let data
  const { detail } = data
  console.log('This is' + detail.name)
</script>

<Navbar />
<div><DetailCard {detail} /></div>

<Footer />

<!-- <pre>
      {JSON.stringify($page, null, 2)}
</pre> -->
