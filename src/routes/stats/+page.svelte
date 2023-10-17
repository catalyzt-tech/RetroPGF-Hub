<script lang="ts">
  import Chart from '@/components/Stats/Chart.svelte'
  import Chart2 from '@/components/Stats/Chart2.svelte'
  import Chart3 from '@/components/Stats/Chart3.svelte'
</script>

<div class="mt-10 px-32">
  <div
    class="flex flex-row flex-wrap justify-center text-[40px] font-bold mb-2"
  >
    Statistic
  </div>
  <div class="flex flex-row flex-wrap justify-center space-x-10">
    <div>
      <div class="mb-4 font-bold">Total Nominated Project</div>
      <Chart />
    </div>
    <div>
      <div class="mb-4 font-bold text-center">Total Nominated Project</div>
      <Chart2 />
    </div>
    <div>
      <div class="mb-4 font-bold text-center">OP Allocation</div>
      <Chart3 />
    </div>
  </div>
</div>
