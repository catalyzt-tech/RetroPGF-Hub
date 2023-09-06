<script lang="ts">
  import { Axios } from '@/lib/axios'
  import { auth, githubProvider, googleProvider } from '@/lib/firebase'
  import { User } from '@/stores/User'
  import {
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
  } from 'firebase/auth'
  import { onMount } from 'svelte'

  let email = ''
  let password = ''

  onMount(() => {
    // check if user is login
    // * But Its not work *
    console.log($User)
    if ($User) window.location.pathname = '/'
  })

  const handleLogin = async (
    provider: GoogleAuthProvider | GithubAuthProvider
  ) => {
    const result = await signInWithPopup(auth, provider)
    const idToken = await result.user.getIdToken()

    Axios.post(
      '/api/users/login',
      {},
      {
        headers: { 'id-token': idToken },
      }
    )
      .then((response) => {
        if (response.status === 200 || 201) window.location.pathname = '/'
        else console.log('Err')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handlePasswordLogin = async () => {
    const result = await signInWithEmailAndPassword(auth, email, password) //create user before login : Use createUserWithEmailAndPassword()
    const idToken = await result.user.getIdToken()

    Axios.post(
      '/api/users/login',
      {},
      {
        headers: { 'id-token': idToken },
      }
    )
      .then((response) => {
        if (response.status === 200 || 201) window.location.pathname = '/'
        else console.log('Err')
      })
      .catch((err) => {
        console.log(err)
      })
  }
</script>

<div class="flex flex-col">
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
  <div class="flex items-center justify-center">
    <div
      class="px-8 py-6 mt-4 text-left bg-white rounded-xl border-2 border-black shadow-lg"
    >
      <div class="flex justify-center">
        <img src="/img/hub-logo.png" alt="logo" height={100} class="w-40" />
      </div>
      <h3 class="text-xl font-bold text-center text-red-600 mt-3">Login</h3>
      <form action="">
        <div class="mt-4">
          <div>
            <label class="block" for="email"
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
            <label class="block"
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
          <div class="flex items-baseline justify-between">
            <button
              class="px-6 py-2 mt-4 text-white font-bold bg-red-600 rounded-lg hover:bg-gray-200 hover:text-gray-800"
              on:click={handlePasswordLogin}>Login</button
            >
            <a href="#" class="text-sm hover:underline">Forgot password?</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
