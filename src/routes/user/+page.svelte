<script lang="ts">
  import { User } from "@/stores/User";
</script>

<div>
  <h1 class="text-3xl text-red-500">User Info</h1>
  {#if $User}
    <h1 class="text-2xl">
      {$User.user_name}
    </h1>
    <p>
      {$User.email}
    </p>
    <img src={$User.profile} alt="" srcset="" />
  {/if}
</div>
