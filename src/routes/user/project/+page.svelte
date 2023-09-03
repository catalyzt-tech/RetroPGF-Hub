<script lang="ts">
  import { Axios } from "$lib/axios";
  import { onMount } from "svelte";
  import { loginSession } from "@/stores/session";
  import type { Project } from "@/types/Response";

  let projects: Project[] = [];

  onMount(async () => {
    try {
      const response = (
        await Axios.get("/api/users/projects", {
          headers: { "access-token": $loginSession },
        })
      ).data;
      projects = response.data.Project;
      console.log(projects);
    } catch (error) {
      console.log(error);
    }
  });
</script>

<div>
  <h1 class="text-2xl">projects</h1>
  {#each projects as project, id}
    <p class="text-red-500 text-xl">{id}</p>
    <p class="text-xl">{project.name}</p>
    <img src={project.logo_url} alt="" width="100" />
    <img src={project.banner_url} alt="banner" width="200" />
    <hr class="border" />
  {/each}
</div>
