<script>
    let buttonProps = {
        class: [$$restProps.class],
    };
</script>

<button
    on:click
    on:focus
    on:mouseenter
    on:mouseleave
    {...buttonProps}
    class="bg-black font-medium text-white py-3 px-8 rounded-[1em] text-lg"
>
    <slot />
</button>
