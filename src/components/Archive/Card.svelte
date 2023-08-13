<script lang="ts">
  export let name: string;
  export let category: string;
</script>

<div class="border-2 relative border-black w-1/5 m-5 rounded-2xl overflow-hidden">
  <div class ="absolute right-4 top-2 font font-bold text-sm text-[#FF0000] border-black border-[1px] bg-white px-2.5 p-1.5 rounded-[10px] ">
    45,456 
    <div class="w-5 inline-flex align-[-20%]">
      <img alt='OP'src ='./img/Optimism.png'/>
    </div>

  </div>
  <div class="bg-cover w-fit">
    <img src="./img/banner_test.jpg" alt="banner_image">
  </div>
  <div class="ml-3 -mt-10 overflow-hidden w-20 border-2 border-black rounded-lg ">
    <img src="./img/icon.jpg" class="w-fit"/>
  </div>
  <h1 class="font-bold p-4 text-[20px] ">{name}</h1>
  <div class ='px-4'>The "Bankless" term is also associated with the "Bankless" newsletter and media platform, created by David Hoffman and Ryan Sean Adams. </div>
  <div class = "p-4 flex flex-row justify-end place-self-end">
    <p class = "px-2 py-1 border-2 border-black font-medium rounded-lg bg-black text-white">{category}</p>
  </div>
</div>
