<script>

  export let data;
  const { animal } = data;

</script>

<main>

<div class="w-auto h-auto m-10 flex justify-center unkempt-bold text-[1.5rem] md:text-[2rem]">
      <p>Meet our animals!</p>
</div>

    <!-- Animal Info - Div Main-->
<div class="flex flex-col md:flex-row m-5">
    <div class="flex flex-col w-full h-full md:w-[50%] md:h-[50%] gap-5 ml-5 mt-5">
        <img src={animal.img_url} class="md:h-[80dvh] rounded-lg" alt={animal.animal_name}/>
        <a href="/animals" class="flex items-center justify-center bg-lightorange border-2 border-darkorange w-[20dvw] h-[8dvh] md:w-[15dvw] md:h-[5dvh] rounded-[10px] text-sm p-[5px] text-center md:hover:text-darkorange md:hover:scale-115 duration-200">Back to Animals</a>
    </div>

    <div class="flex flex-col w-full h-full md:w-[50%] md:h-[50%] gap-5 ml-5 mt-5">
        <h1 class="w-auto h-auto flex justify-center unkempt-bold text-[1.5rem] md:text-[3rem]">{animal.animal_name}</h1>
        <p class="w-auto h-auto underline flex unkempt-bold text-[1.5rem] md:text-[2rem]">Description</p>
        <p class="w-auto h-auto flex sans-serif text-[1.5rem] md:text-[1.5rem]">{animal.animal_desc}</p>
        <p class="w-auto h-auto underline flex unkempt-bold text-[1.5rem] md:text-[2rem]">Scientific Name</p>
        <p class="w-auto h-auto flex sans-serif text-[1.5rem] md:text-[1.5rem]">{animal.scientific_name}</p>
    </div>
</div>

<!-- END -->

</main>