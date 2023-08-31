<script lang="ts">
    export let title: string;
    export let desc: string;
    export let buttonText: string;
    export let buttonPath: string;
</script>

<div
    class="rounded-[30px] border-black border bg-white px-10 py-4 flex flex-col justify-center items-center max-w-xs"
>
    <div class="font-bold text-lg mb-3">{title}</div>
    <div class="text-center mb-3">{desc}</div>
    <a href={buttonPath}>
        <div
            class="border rounded-[1em] border-red-500 hover:bg-red-500 hover:text-white py-2 px-6"
        >
            {buttonText}
        </div>
    </a>
</div>
