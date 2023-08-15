<script>
</script>

<div class="flex justify-center">
  <form class="border-2 border-black rounded-2xl mx-36 my-10 p-8">
    <label class="font-bold text-md"
      >Project Name
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
          required
        />
      </div>
    </label>
    <label class="font-bold text-md"
      >Project Logo (Icon)
      <div>
        <input
          type="file"
          accept="image/png,image/jpeg"
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
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
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Project Website / Link
      <div>
        <input
          type="url"
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
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
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
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
        <input
          type="text"
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >How has this project contributed to the development and adoption of
      Optimism?
      <div>
        <input
          type="text"
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Which category describes this project best?
      <div>
        <select
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
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
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
          required
        />
      </div></label
    >
    <label class="font-bold text-md"
      >Contact method of project or project lead
      <div>
        <input
          type="text"
          class="border-black border-2 p-4 my-5 rounded-md text-sm w-fit h-fit"
          required
        />
      </div></label
    >
    <button
      type="submit"
      name="submit"
      class="flex justify-center mx-auto border-[#FF0000] bg-[#FF0000] border-2 px-4 py-2 rounded-xl font-bold text-white"
      >Submit!</button
    >
  </form>
</div>
