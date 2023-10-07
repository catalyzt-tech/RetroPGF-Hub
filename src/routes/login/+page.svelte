<script lang="ts">
  import Alertbar from "@/components/Alertbar.svelte";
  import { Axios } from "@/lib/axios";
  import { auth, githubProvider, googleProvider } from "@/lib/firebase";
  import { User } from "@/stores/User";
  import {
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
  } from "firebase/auth";
  import { onMount } from "svelte";

  let email: any = "";
  let password: any = "";

  onMount(async () => {
    // check if user is login
    // * But Its not work *
    try {
      const response = await Axios.get("/api/users");
      if (response.status === 200) {
        $User = response.data.data;
      }
    } catch (error) {
      console.log(error);
    }

    if ($User) window.location.pathname = "/";
  });

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
      .then((response) => {
        if (response.status === 200 || 201) window.location.pathname = "/";
        else console.log("Err");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handlePasswordLogin = async () => {
    const result = await signInWithEmailAndPassword(auth, email, password); //create user before login : Use createUserWithEmailAndPassword()
    const idToken = await result.user.getIdToken();

    Axios.post(
      "/api/users/login",
      {},
      {
        headers: { "id-token": idToken },
      }
    )
      .then((response) => {
        if (response.status === 200 || 201) window.location.pathname = "/";
        else console.log("Err");
      })
      .catch((err) => {
        console.log(err);
      });
  };
</script>

<Alertbar />
<div class="flex flex-col items-center justify-center">
  <div class="flex-grow">
    <div class="flex items-center justify-center">
      <div
        class="px-8 py-6 mt-4 text-left bg-white rounded-xl border-2 border-black shadow-lg"
      >
        <h3 class="text-2xl font-bold text-center mt-3">Sign In</h3>
        <form action="">
          <div class="mt-4">
            <div>
              <label class="block font-medium" for="email"
                >Email<label>
                  <input
                    type="text"
                    placeholder="Email"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                    bind:value={email}
                    required
                  />
                </label></label
              >
            </div>
            <div class="mt-4">
              <label class="block font-medium"
                >Password<label>
                  <input
                    type="password"
                    placeholder="Password"
                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
                    bind:value={password}
                    required
                  />
                </label></label
              >
            </div>
            <div class="flex items-baseline justify-between my-1">
              <button
                class="px-6 py-2 mt-4 text-white font-semibold bg-red-600 rounded-lg hover:bg-black hover:text-white transition ease-linear duration-200"
                on:click={handlePasswordLogin}>Login</button
              >
              <a href="#" class="text-sm hover:underline">Forgot password?</a>
            </div>
            <div class="mt-3 my-1 flex mx-3 justify-center font-semibold">
              Or
            </div>
            <button
              class="px-4 py-3 mt-4 mr-1 text-black font-medium bg-gray-200 rounded-lg hover:bg-black hover:text-white transition ease-linear duration-00"
              on:click={() => handleLogin(googleProvider)}
            >
              <img
                src="img/google_logo.png"
                alt="google"
                width={20}
                height={20}
                class="inline mr-2 mb-1"
              />
              Sign in with Google
            </button>
            <button
              class="px-4 py-3 mt-4 mr-1 text-black font-medium bg-gray-200 rounded-lg hover:invert transition ease-linear duration-200"
              on:click={() => handleLogin(githubProvider)}
            >
              <img
                src="img/github_logo.png"
                alt="google"
                width={20}
                height={20}
                class="inline mr-2 mb-1"
              />
              Sign in with Github
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
