<script lang="ts">
  import { Axios } from "$lib/axios";
  import { onMount } from "svelte";
  import { loginSession } from "@/stores/session";
  import type { User } from "@/types/Response";
  let user: User;
  onMount(async () => {
    try {
      const response = (
        await Axios.get("/api/users", {
          headers: { "access-token": $loginSession },
        })
      ).data;
      user = response.data;
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  });
</script>

<div>
  <h1 class="text-2xl">User Info</h1>
  <p>{JSON.stringify(user)}</p>
  <!-- <h1>userName : {user.id}</h1> -->
</div>
