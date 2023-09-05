<script lang="ts">
  import { Axios } from "$lib/axios";
  import type { UserResponse } from "@/types/Response";
  import { User } from "@/stores/User";
</script>

<div>
  <h1 class="text-2xl">User Info</h1>
  {#if $User}
    <p>
      {$User.email}
    </p>
  {/if}
</div>
