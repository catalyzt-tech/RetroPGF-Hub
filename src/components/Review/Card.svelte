<script lang="ts">
  export let data: any = []
  console.log(data)
  let results: string
  if (data.Keep > data.Remove) results = 'Keep'
  else results = 'Remove'
  data = { ...data, results }
</script>

<div class="flex flex-col w-64 m-4 px-4 py-3 border-black border-2 rounded-xl">
  <div class="text-lg font-medium">{data['Project Name']}</div>
  <div
    class="text-sm text-gray-500 {data['results'] === 'Remove'
      ? 'text-red-600'
      : 'text-green-500'}"
  >
    {data['results']}
  </div>
  <div class="text-sm text-gray-500">{data.Bio}</div>
  <div class="flex-grow" />
  <div class="text-sm">Reason: {data.Reason}</div>
</div>
