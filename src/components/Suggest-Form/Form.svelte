<script lang="ts">
  import { browser } from '$app/environment'
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

  const onFileSelected = (e: any, fileType: string) => {
    if (fileType === 'logoFile') {
      logoFile = e.target.files[0]
    }
    if (fileType === 'bannerFile') {
      bannerFile = e.target.files[0]
    }
  }

  const onSubmit = async () => {
    data.logo_url = (await uploadFile(logoFile, 'project_logo')) ?? ''
    data.banner_url = (await uploadFile(bannerFile, 'project_banner')) ?? ''

    Axios.post('/api/projects', data).catch((err) => console.log(err))
  }
</script>

<div class="flex justify-center">
  <form
    class="border-2 border-black rounded-2xl mx-36 my-10 p-8 bg-white"
    on:submit|preventDefault={onSubmit}
  >
    <label 
      >
      <span class="font-bold text-md">Project Name</span><span class="text-[#FF0000]">*</span>
      <div>
        <input
          type="text"
          name="name"
          bind:value={data.name}
          placeholder="Example Project"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-full"
          required
        />
      </div>
    </label>
    <label class="font-bold text-md"
      >Project Logo / Icon
      <div>
        <input
          type="file"
          on:change={(e) => onFileSelected(e, 'logoFile')}
          accept="image/png,image/jpeg"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm"
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Project Banner
      <div>
        <input
          type="file"
          on:change={(e) => onFileSelected(e, 'bannerFile')}
          accept="image/png,image/jpeg"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm"
        />
      </div></label
    >
    <label 
      ><span class="font-bold text-md">Project Website / Link</span><span class="text-[#FF0000]">*</span>
      <div>
        <input
          type="url"
          bind:value={data.website_url}
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-full"
          placeholder = "https://example.project.com"
          required
        />
      </div></label
    >
    <label
      >
      <span class="font-bold text-md">Which category within the cryptocurrency space describe this project best?</span><span class="text-[#FF0000]">*</span>
      
      <div>
        <select
          name="Category"
          class="bg-[#EDEDED] px-5 my-5 rounded-md text-sm w-48 h-12"
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
    <label 
      >
      <span class="font-bold text-md">Project Description</span><span class="text-[#FF0000]">*</span>
      <div>
        <textarea
          on:input={dynamicHeight}
          bind:value={data.description}
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-full resize-none max-h-32"
          placeholder="Please describe your project in few sentences or passage."
          required
        />
      </div></label
    >
    <label 
      ><span class="font-bold text-md">How has this project contributed to the development and adoption of
      Optimism?</span><span class="text-[#FF0000]">*</span>
      <div>
        <textarea
          on:input={dynamicHeight}
          bind:value={data.reason}
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-full resize-none max-h-32"
          placeholder ="Please describe how this project has contributed to the development and adoption of Optimism."
          required
        />
      </div></label
    >
    <label 
      ><span class="font-bold text-md">Which category describes this project best?</span><span class="text-[#FF0000]">*</span>
      <div>
        <select
          class="bg-[#EDEDED] px-5 my-5 rounded-lg text-sm w-48 h-12"
          bind:value={data.category}
          required
        >
          <option value="" disabled selected>Select Category</option>
          <option value="opstack">OP Stack</option>
          <option value="collectivegovernance">Collective Governance</option>
          <option value="developerecosystem">Developer Ecosystem</option>
          <option value="enduserexperienceandadoption"
            >End User Experience & Adoption</option
          >
        </select>
      </div></label
    >
    <label 
      ><span class="font-bold text-md">Why do you think this project be suited for this category?</span>
      <div>
        <input
          type="text"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-full"
          placeholder="Please describe why you think this project be suited for this category."
        />
      </div></label
    >
    <label 
      ><span class="font-bold text-md">Contact method of project or project lead</span><span class="text-[#FF0000]">*</span>
      <div>
        <input
          type="text"
          bind:value={data.contact}
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-full"
          placeholder = "Please provide a contact method of project or project lead."
          required
        />
      </div></label
    >
    <button
      type="submit"
      name="submit"
      class="flex justify-center my-3 mx-auto border-[#FF0000] bg-[#FF0000] border-2 px-8 py-2 rounded-xl font-semibold text-white"
      >Submit</button
    >
  </form>
</div>
