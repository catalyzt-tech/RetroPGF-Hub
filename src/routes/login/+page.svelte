<script lang="ts">
  import { Axios } from "$lib/axios";
  import { auth, githubProvider, googleProvider } from "$lib/firebase";
  import {
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  import { loginSession } from "@/stores/session";
  import { goto } from "$app/navigation";

  const handleLogin = async (
    provider: GoogleAuthProvider | GithubAuthProvider
  ) => {
    const result = await signInWithPopup(auth, provider);
    const idToken = await result.user.getIdToken();

    Axios.post(
      "/api/users/login",
      {},
      {
        headers: { "id-token": idToken },
      }
    )
      .then((response) => {;
        loginSession.set(response.data.accessToken);
        goto("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
</script>

<div>
  <h1 class="text-2xl">Login</h1>
  <button
    class="text-red-300 bg-black"
    on:click={() => handleLogin(googleProvider)}
  >
    Google Login
  </button>
  <button
    class="text-red-600 bg-blue-500"
    on:click={() => handleLogin(githubProvider)}
  >
    Github Login
  </button>
</div>
