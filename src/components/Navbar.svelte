<script lang="ts">
  let showMenu: boolean = false
  const toggleNavbar = () => {
    showMenu = !showMenu
  }
  import { loginSession } from "../stores/session";
</script>

<div class="text-base">
  <div>
    <nav
      class="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <a href="/">
          <img src="/img/hub-logo.png" alt="logo" height={100} class="w-40" />
        </a>
        <!-- Mobile menu button -->
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
        <a class="text-gray-800 hover:text-red-400" href="/projects">Projects</a>
        <a class="text-gray-800 hover:text-red-400" href="/archive">Archive</a>
        <a class="text-gray-800 hover:text-red-400" href="/nominate-form"
          >Nominate</a
        >
      </div>
    </nav>
  </div>
</div>
