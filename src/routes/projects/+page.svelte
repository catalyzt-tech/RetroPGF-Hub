<script lang="ts">
  import Alertbar from "@/components/Alertbar.svelte";
  import BigCard from "@/components/Projects/BigCard.svelte";
  import { Axios } from "@/lib/axios";
  import { onMount } from "svelte";
  import { User } from "@/stores/User";
  import type {
    ProjectResponse,
    UserLikeProjectResponse,
  } from "@/types/Response";

  let projects: ProjectResponse[] = [];
  let userLike: UserLikeProjectResponse[] = [];

  onMount(async () => {
    try {
      const response = (await Axios.get("/api/projects")).data;
      projects = response.data;
      console.log(projects);
      if ($User) {
        await Axios.get("/api/users/favorites").then((res) => {
          userLike = res.data.data;
        });
      }
    } catch (error) {
      console.log(error);
    }
  });
</script>

<Alertbar />
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
      {#each projects as project}
        <BigCard
          id={project.id}
          name={project.name}
          desc={project.description}
          img={project.logo_url}
          tag={project.category}
          likeCount={project._count.Like}
          isLike={userLike.some((like) => like.project_id == project.id)}
          commentCount={project._count.Comment}
        />
      {/each}
    </div>
  </div>
</div>
