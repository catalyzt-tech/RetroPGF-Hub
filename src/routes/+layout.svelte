<script lang="ts">
  import Navbar from "@/components/Navbar.svelte";
  import Footer from "@/components/Footer.svelte";

  export let title = "Retro-PGF";
  import "../app.css";
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Navbar />
<slot />
<Footer />
