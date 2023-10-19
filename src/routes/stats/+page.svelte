<script lang="ts">
  import Alertbar from '@/components/Alertbar.svelte'
  import Chart1 from '@/components/Stats/Chart1.svelte'
  import Chart2 from '@/components/Stats/Chart2.svelte'
  import Chart3 from '@/components/Stats/Chart3.svelte'
  import Chart4 from '@/components/Stats/Chart4.svelte'
</script>

<Alertbar />
<div class="h-[10em] overflow-hidden">
  <img src="./img/opsun_rise2.png" class="w-fit" alt="" />
</div>
<div class="mt-10">
  <div class="px-64">
    <div
      class="flex flex-row flex-wrap justify-center text-[40px] font-bold mb-2"
    >
      Statistic
    </div>

    <div class="text-center my-6">
      Welcome to the exciting world of statistics! In this page, we'll be
      delving into the intriguing realm of "Optimism Retroactive Public Good
      Funding," a concept that combines the power of optimism, retrospection,
      and the greater good through statistical analysis.
    </div>
    <div class="text-center mb-6">
      Statistics, often referred to as the science of learning from data, plays
      a crucial role in understanding and optimizing various aspects of our
      lives. In the context of Optimism Retroactive Public Good Funding,
      statistics act as our compass, guiding us through the complexities of
      decision-making, resource allocation, and the pursuit of a brighter future
      for all.
    </div>
    <div
      class="flex flex-row flex-wrap justify-between items-center space-y-10"
    >
      <div class="border-2 border-black rounded-md p-6 bg-white">
        <div class="mb-4 font-bold">Total Projects - RetroPGF Round 2</div>
        <Chart1 />
      </div>
      <div class="border-2 border-black rounded-md p-6 bg-white">
        <div class="mb-4 font-bold">
          Total Nominated Project - Amount of Projects
        </div>
        <Chart2 />
      </div>
      <div class="border-2 border-black rounded-md p-6 bg-white">
        <div class="mb-4 font-bold">
          OP Award Allocation - Recipient Categories
        </div>
        <Chart3 />
      </div>
      <div class="border-2 border-black rounded-md p-6 bg-white">
        <div class="mb-4 font-bold">OP Awarded Allocation - Each Recipient</div>
        <Chart4 />
      </div>
    </div>
  </div>
</div>
