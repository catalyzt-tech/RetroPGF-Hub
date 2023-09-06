<script lang="ts">
  let buttonProps: { class: [any] } = {
    class: [$$restProps.class],
  }
</script>

<button
  on:click
  on:focus
  on:mouseenter
  on:mouseleave
  {...buttonProps}
  class="bg-black font-normal text-white py-3 px-8 rounded-[1em] text-lg transition ease-in-out hover:bg-red-500 duration-200"
>
  <slot />
</button>
