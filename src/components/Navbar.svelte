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

  let url: string | URL | undefined = ''
  onMount(() => {
    url = new URL(window.location.href)
    url = url.pathname.slice(1)
    if (url !== '') {
      Page = url
      console.log(Page)
    }
  })

  const selectPage = (event: any) => {
    console.log(event.target.getAttribute('category'))
    Page = event.target.getAttribute('category')
  }
</script>

<div class="text-base">
  <div>
    <nav class="container mx-auto md:flex md:justify-between md:items-center">
      <div class="flex items-center justify-between h-16">
        <a href="/" class="pl-6" on:click={selectPage}>
          <img src="/img/hub-logo.png" alt="logo" height={100} class="w-40" />
        </a>
        <div class="flex pr-6 md:hidden">
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
        class="flex-col space-y-3 my-3 mx-6 justify-center md:my-0 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
          ? 'flex'
          : 'hidden'}"
      >
        <ul
          class="{showMenu
            ? 'flex-col'
            : ''} flex mt-8 space-y-3 md:space-y-0 md:items-center md:h-16 md:mt-0"
        >
          <a
            class="{Page === 'projects'
              ? 'md:font-bold show-inset'
              : ''} md:flex text-gray-800 hover:bg-red-500 md:hover:bg-transparent md:bg-white hover:text-white md:hover:text-red-600 bg-gray-200 px-3 py-1 transition rounded-full md:rounded-none ease-linear duration-200 md:h-full shadow-inset"
            href="/projects"
          >
            <button
              on:click={selectPage}
              type="button"
              category="projects"
              class="flex items-center"
            >
              Projects
            </button>
          </a>
          <a
            class="{Page === 'history'
              ? 'md:font-bold show-inset'
              : ''} md:flex text-gray-800 hover:bg-red-500 md:hover:bg-transparent md:bg-white hover:text-white md:hover:text-red-600 bg-gray-200 px-3 py-1 transition rounded-full md:rounded-none ease-linear duration-200 md:h-full shadow-inset"
            href="/history"
            ><button
              on:click={selectPage}
              type="button"
              category="history"
              class="flex items-center"
            >
              History
            </button></a
          >
          <a
            class="{Page === 'archive'
              ? 'md:font-bold show-inset'
              : ''} md:flex text-gray-800 hover:bg-red-500 md:hover:bg-transparent md:bg-white hover:text-white md:hover:text-red-600 bg-gray-200 px-3 py-1 transition rounded-full md:rounded-none ease-linear duration-200 md:h-full shadow-inset"
            href="/archive"
            ><button
              on:click={selectPage}
              type="button"
              category="archive"
              class="flex items-center"
            >
              Archive
            </button></a
          >
          <a
            class="{Page === 'suggest-form'
              ? 'md:font-bold show-inset'
              : ''} md:flex text-gray-800 hover:bg-red-500 md:hover:bg-transparent md:bg-white hover:text-white md:hover:text-red-600 bg-gray-200 px-3 py-1 transition rounded-full md:rounded-none ease-linear duration-200 md:h-full shadow-inset"
            href="/suggest-form"
            ><button
              on:click={selectPage}
              type="button"
              category="nominate-form"
              class="flex items-center"
            >
              Suggest
            </button></a
          >
          <a
            class="{Page === 'stats'
              ? 'md:font-bold show-inset'
              : ''} md:flex text-gray-800 hover:bg-red-500 md:hover:bg-transparent md:bg-white hover:text-white md:hover:text-red-600 bg-gray-200 px-3 py-1 transition rounded-full md:rounded-none ease-linear duration-200 md:h-full shadow-inset"
            href="/stats"
            ><button
              on:click={selectPage}
              type="button"
              category="stats"
              class="flex items-center"
            >
              Stats
            </button></a
          >
          <a
            class="{Page === 'review'
              ? 'md:font-bold show-inset'
              : ''} md:flex text-gray-800 hover:bg-red-500 md:hover:bg-transparent md:bg-white hover:text-white md:hover:text-red-600 bg-gray-200 px-3 py-1 transition rounded-full md:rounded-none ease-linear duration-200 md:h-full shadow-inset"
            href="/review"
            ><button
              on:click={selectPage}
              type="button"
              category="review"
              class="flex items-center"
            >
              Review
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

<style>
  @media (min-width: 768px) {
    .show-inset {
      box-shadow: inset 0 -3px 0 black;
    }
    .shadow-inset:hover {
      box-shadow: inset 0 -3px 0 rgb(255, 0, 0);
    }
  }
</style>
