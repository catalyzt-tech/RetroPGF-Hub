<script lang="ts">
  import { browser } from "$app/environment";
  import { uploadFile } from "$lib/uploadFile";

  const dynamicHeight = (event: any) => {
    if (browser) {
      const textarea: any = event.target;
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    }
  };
  let bannerImageFile: File;

  const onFileSelected = (e: any) => {
    bannerImageFile = e.target.files[0];
  };

  const onSubmit = async () => {
    const banner_url = await uploadFile(bannerImageFile, "project_banner");
    console.log(banner_url);
  };
</script>

<div class="flex justify-center">
  <form
    class="border-2 border-black rounded-2xl mx-36 my-10 p-8"
    on:submit|preventDefault={onSubmit}
  >
    <label class="font-bold text-md"
      >Project Name
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-[50em]"
          required
        />
      </div>
    </label>
    <label class="font-bold text-md"
      >Project Logo (Icon)
      <div>
        <input
          type="file"
          on:change={(e) => onFileSelected(e)}
          accept="image/png,image/jpeg"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Project Banner
      <div>
        <input
          type="file"
          accept="image/png,image/jpeg"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Project Website / Link
      <div>
        <input
          type="url"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-[50em]"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Which category within the cryptocurrency space describe this project
      best?
      <div>
        <select
          name="Category"
          class="bg-[#EDEDED] px-5 my-5 rounded-md text-sm w-48 h-12"
          required
          >Category
          <option value="" disabled selected>Select category</option>
          <option value="defi">DeFi</option>
          <option value="nft">NFT</option>
          <option value="bridge">Bridge</option>
          <option value="wallet">Wallet</option>
          <option value="tool">Tool</option>
          <option value="portfoliotracker">Portfolio Tracker</option>
          <option value="dao">DAO</option>
          <option value="onramp">On-ramp</option>
        </select>
      </div></label
    >
    <label class="font-bold text-md"
      >Project Description
      <div>
        <textarea
          on:input={dynamicHeight}
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-[50em] resize-none max-h-32"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >How has this project contributed to the development and adoption of
      Optimism?
      <div>
        <textarea
          on:input={dynamicHeight}
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-[50em] resize-none max-h-32"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Which category describes this project best?
      <div>
        <select
          class="bg-[#EDEDED] px-5 my-5 rounded-lg text-sm w-48 h-12"
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
    <label class="font-bold text-md"
      >Why do you think this project be suited for this category?
      <div>
        <input
          type="text"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-[50em]"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Contact method of project or project lead
      <div>
        <input
          type="text"
          class="bg-[#EDEDED] p-4 my-5 rounded-md text-sm w-[50em]"
          required
        />
      </div></label
    >
    <button
      type="submit"
      name="submit"
      class="flex justify-center my-3 mx-auto border-[#FF0000] bg-[#FF0000] border-2 px-8 py-2 rounded-xl font-bold text-white"
      >Submit!</button
    >
  </form>
</div>
