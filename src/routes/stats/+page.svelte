<script lang="ts">
  import Chart1 from '@/components/Stats/Chart1.svelte'
  import Chart2 from '@/components/Stats/Chart2.svelte'
  import Chart3 from '@/components/Stats/Chart3.svelte'
  import Chart4 from '@/components/Stats/Chart4.svelte'
</script>

<div class="mt-10 px-32">
  <div
    class="flex flex-row flex-wrap justify-center text-[40px] font-bold mb-2"
  >
    Statistic
  </div>
  <div class="flex flex-row flex-wrap justify-center space-y-10">
    <div class="border-2 border-black p-6">
      <div class="mb-4 font-bold">Total Nominated Project</div>
      <Chart1 />
    </div>
    <div class="border-2 border-black p-6 bg-white">
      <div class="mb-4 font-bold">
        Total Nominated Project - Amount of Projects
      </div>
      <Chart2 />
    </div>
    <div class="border-2 border-black p-6 bg-white">
      <div class="mb-4 font-bold">
        OP Award Allocation - Recipient Categories
      </div>
      <Chart3 />
    </div>
    <div class="border-2 border-black p-6 bg-white">
      <div class="mb-4 font-bold">OP Awarded Allocation - Each Recipient</div>
      <Chart4 />
    </div>
  </div>
</div>
