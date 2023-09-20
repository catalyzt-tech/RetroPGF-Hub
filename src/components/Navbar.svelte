<script lang="ts">
  import { Axios } from '@/lib/axios'
  import { onMount } from 'svelte'
  import { User } from '@/stores/User'

  let showMenu: boolean = false
  const toggleNavbar = () => {
    showMenu = !showMenu
  }

  onMount(async () => {
    try {
      const response = await Axios.get('/api/users', {})
      if (response.status === 200) {
        $User = response.data.data
      }
    } catch (error) {
      console.log(error)
    }
  })

  const handleLogout = async () => {
    await Axios.post('/api/users/logout')
    window.location.pathname = '/'
  }
  let Page: string = ''
  const selectPage = (event: any) => {
    console.log(event.target.getAttribute('category'))
    Page = event.target.getAttribute('category')
  }
</script>

<div class="text-base">
  <div>
    <nav class="container mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between">
        <a href="/" on:click={selectPage}>
          <img src="/img/hub-logo.png" alt="logo" height={100} class="w-40" />
        </a>
        <div class="flex md:hidden">
          <button
            on:click={toggleNavbar}
            type="button"
            class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
          ? 'flex'
          : 'hidden'}"
      >
        <ul class="flex items-center h-16">
          <a
            class="{Page === 'projects'
              ? 'font-bold'
              : ''} flex mr-8 text-gray-800 hover:text-red-600 transition ease-linear duration-200 h-full"
            href="/projects"
            ><button
              on:click={selectPage}
              category="projects"
              class="flex items-center"
            >
              Projects
            </button></a
          >
          <a
            class="{Page === 'archive'
              ? 'font-semibold'
              : ''} flex mr-8 text-gray-800 hover:text-red-600 transition ease-linear duration-200 h-full"
            href="/archive"
            ><button
              on:click={selectPage}
              category="archive"
              class="flex items-center"
            >
              Archive
            </button></a
          >
          <a
            class="{Page === 'form'
              ? 'font-bold'
              : ''} flex text-gray-800 hover:text-red-600 transition ease-linear duration-200 h-full"
            href="/nominate-form"
            ><button
              on:click={selectPage}
              category="form"
              class="flex items-center"
            >
              Nominate
            </button></a
          >
        </ul>
        {#if !$User}
          <a
            class=" text-gray-800 hover:bg-red-500 hover:text-white px-3 py-1 bg-gray-200 rounded-full transition ease-linear duration-200"
            href="/login"
            >Login
          </a>
        {:else}
          <button on:click={handleLogout}>Logout</button>
        {/if}
      </div>
    </nav>
  </div>
</div>
