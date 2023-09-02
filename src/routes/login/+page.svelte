<script lang="ts">
  import { auth, googleProvider } from "$lib/firebase";
  import { signInWithPopup } from "firebase/auth";

  const googleLogin = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const idToken = await result.user.getIdToken();
    console.log(idToken);
  };
</script>

<div>
  <h1>Login</h1>
  <button class="text-red-300 bg-black"> Google Login </button>
  <button class="text-red-300 bg-blue-300" on:click={googleLogin}>
    Github Login
  </button>
</div>
