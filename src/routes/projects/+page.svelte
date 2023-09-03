<script>
  import Navbar from '@/components/Navbar.svelte'
  import Footer from '@/components/Footer.svelte'
  import BigCard from '@/components/Projects/BigCard.svelte'

  let data = [{
    name: "TokenUnlock",
    desc: "Token unlocks refer to the release of previously locked or restricted tokens into the market. These tokens become available for trading, buying, and selling after the end of their vesting period. The vesting period is the duration during which the tokens are restricted.",
    img: "img/test_logo.png",
    tags: ["DeFi", "Token", "Unlock"],
    likeCount: 19,
    dislikeCount: 2,
    commentCount: 3,
  },
  {
    name: "TokenUnlock",
    desc: "Token unlocks refer to the release of previously locked or restricted tokens into the market. These tokens become available for trading, buying, and selling after the end of their vesting period. The vesting period is the duration during which the tokens are restricted.",
    img: "img/test_logo.png",
    tags: ["DeFi", "Token", "Unlock"],
    likeCount: 19,
    dislikeCount: 2,
    commentCount: 3,
  },
  {
    name: "TokenUnlock",
    desc: "Token unlocks refer to the release of previously locked or restricted tokens into the market. These tokens become available for trading, buying, and selling after the end of their vesting period. The vesting period is the duration during which the tokens are restricted.",
    img: "img/test_logo.png",
    tags: ["DeFi", "Token", "Unlock"],
    likeCount: 19,
    dislikeCount: 2,
    commentCount: 3,
  }]
</script>

<Navbar />
<div>
  <div class="h-[10em] overflow-hidden">
    <img src="./img/retropgfcity.png" class="w-fit" alt="" />
  </div>
  <div class="px-8">
    <div class="my-8">
      <h1 class="text-[40px] flex justify-center font-bold text-center">
        Discovery Project nominated by the community
      </h1>
      <div class="flex justify-center">
        <p class="text-md text-center text-gray-600 mt-2 max-w-[50em]">
          RetroPGF 3 will allocate 30m OP tokens to reward contributions that
          supported the development and adoption of Optimism. To ensure that
          multiple projects are included in RetroPGF 3.
        </p>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-x-6 gap-y-6">
      {#each data as project}
        <BigCard
          name={project.name}
          desc={project.desc}
          img={project.img}
          tags={project.tags}
          likeCount={project.likeCount}
          disLikeCount={project.dislikeCount}
          commentCount={project.commentCount}
        />
      {/each}
    </div>
  </div>
</div>
<Footer />
