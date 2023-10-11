<script lang="ts">
  import { browser } from '$app/environment'
  import { goto } from '$app/navigation'
  import { Axios } from '@/lib/axios'
  import { uploadFile } from '@/lib/uploadFile'

  const dynamicHeight = (event: any) => {
    if (browser) {
      const textarea: any = event.target
      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 'px'
    }
  }

  let categories = [
    { value: 'infrastructure', name: 'Infrastructure' },
    { value: 'tool', name: 'Tool' },
    { value: 'defi', name: 'DeFi' },
    { value: 'nft', name: 'NTF' },
    { value: 'bridge', name: 'Bridge' },
    { value: 'wallet', name: 'Wallet' },
    { value: 'portfolio-tracker', name: 'Portfolio Tracker' },
    { value: 'dao', name: 'DAO' },
    { value: 'on-ramp', name: 'On-ramp' },
  ]

  let logoFile: File
  let bannerFile: File

  let data = {
    name: '',
    logo_url: '',
    banner_url: '',
    website_url: '',
    crypto_category: '',
    description: '',
    reason: '',
    category: '',
    contact: '',
  }

  let loading = false
  const onFileSelected = (e: any, fileType: string) => {
    if (fileType === 'logoFile') {
      logoFile = e.target.files[0]
    }
    if (fileType === 'bannerFile') {
      bannerFile = e.target.files[0]
    }
  }

  const onSubmit = async () => {
    loading = true
    data.logo_url = (await uploadFile(logoFile, 'project_logo')) ?? ''
    data.banner_url = (await uploadFile(bannerFile, 'project_banner')) ?? ''

    Axios.post('/api/projects', data)
      .then(() => goto('/projects'))
      .catch((err) => console.log(err))
  }
</script>

<div class="flex justify-center">
  <form
    class="border-2 border-black rounded-2xl mx-36 my-10 p-8 bg-white"
    on:submit|preventDefault={onSubmit}
  >
    <label>
      <span class="font-bold text-md">Project Name</span><span
        class="text-retro">*</span
      >
      <div>
        <input
          type="text"
          name="name"
          bind:value={data.name}
          placeholder="Example Project"
          class="bg-gray-100 p-4 my-5 rounded-md text-sm w-full"
          required
        />
      </div>
    </label>
    <label class="font-bold text-md"
      >Project Icon <div class="font-normal text-sm">
        (Ratio 1:1, Max. File Size: 2 MB)
      </div>
      <div>
        <input
          type="file"
          on:change={(e) => onFileSelected(e, 'logoFile')}
          accept="image/png,image/jpeg"
          class="bg-gray-100 p-4 my-5 rounded-md text-sm"
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Project Banner <div class="font-normal text-sm">
        (Max. File Size: 2 MB)
      </div>
      <div>
        <input
          type="file"
          on:change={(e) => onFileSelected(e, 'bannerFile')}
          accept="image/png,image/jpeg"
          class="bg-gray-100 p-4 my-5 rounded-md text-sm"
        />
      </div></label
    >
    <label
      ><span class="font-bold text-md">Project Website / Link</span><span
        class="text-retro">*</span
      >
      <div>
        <input
          type="url"
          bind:value={data.website_url}
          class="bg-gray-100 p-4 my-5 rounded-md text-sm w-full"
          placeholder="https://example.project.com"
          required
        />
      </div></label
    >
    <label>
      <span class="font-bold text-md"
        >Which category within the cryptocurrency space describe this project
        best?</span
      ><span class="text-retro">*</span>

      <div>
        <select
          name="Category"
          class="bg-white px-5 my-5 rounded-md text-sm w-48 h-12"
          bind:value={data.crypto_category}
          required
          >Category
          <option value="" disabled selected>Select category</option>
          {#each categories as category}
            <option value={category.value}>{category.name}</option>
          {/each}
        </select>
      </div></label
    >
    <label>
      <span class="font-bold text-md">Project Description</span><span
        class="text-retro">*</span
      >
      <div>
        <textarea
          on:input={dynamicHeight}
          bind:value={data.description}
          class="bg-gray-100 p-4 my-5 rounded-md text-sm w-full resize-none max-h-32"
          placeholder="Please describe your project in few sentences or passage."
          required
        />
      </div></label
    >
    <label
      ><span class="font-bold text-md"
        >How has this project contributed to the development and adoption of
        Optimism?</span
      ><span class="text-retro">*</span>
      <div>
        <textarea
          on:input={dynamicHeight}
          bind:value={data.reason}
          class="bg-gray-100 p-4 my-5 rounded-md text-sm w-full resize-none max-h-32"
          placeholder="Please describe how this project has contributed to the development and adoption of Optimism."
          required
        />
      </div></label
    >
    <label
      ><span class="font-bold text-md"
        >Which category describes this project best?</span
      ><span class="text-retro">*</span>
      <div>
        <select
          class="bg-white px-5 my-5 rounded-lg text-sm w-48 h-12"
          bind:value={data.category}
          required
        >
          <option value="" disabled selected>Select Category</option>
          <option value="OP Stack">OP Stack</option>
          <option value="Collective Governance">Collective Governance</option>
          <option value="Developer Ecosystem">Developer Ecosystem</option>
          <option value="End User Experience & Adoption"
            >End User Experience & Adoption</option
          >
        </select>
      </div></label
    >
    <label
      ><span class="font-bold text-md"
        >Why do you think this project be suited for this category?</span
      >
      <div>
        <input
          type="text"
          class="bg-gray-100 p-4 my-5 rounded-md text-sm w-full"
          placeholder="Please describe why you think this project be suited for this category."
        />
      </div></label
    >
    <label
      ><span class="font-bold text-md"
        >Contact method of project or project lead</span
      ><span class="text-retro">*</span>
      <div>
        <input
          type="text"
          bind:value={data.contact}
          class="bg-gray-100 p-4 my-5 rounded-md text-sm w-full"
          placeholder="Please provide a contact method of project or project lead."
          required
        />
      </div></label
    >
    <button
      type="submit"
      name="submit"
      class="flex justify-center items-center my-3 mx-auto border-retro bg-retro border-2 px-8 py-2 rounded-xl font-semibold text-white"
    >
      <!-- Spinner -->
      {#if loading}
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-black"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            /><path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            /></svg
          >
        </div>
      {/if}
      Submit</button
    >
  </form>
</div>
