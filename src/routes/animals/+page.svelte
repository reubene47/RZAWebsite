<script>
  export let data;
  import AnimalCard from '$lib/components/animal_card.svelte';
</script>

<div class="w-auto h-auto m-10 flex justify-center unkempt-bold text-[1.5rem] md:text-[2rem]">
      <p>Meet our animals!</p>
</div>

<div class="flex flex-wrap gap-4 justify-center mb-10">
  {#each data.animals as animal}
    <AnimalCard {animal} />
  {/each}
</div>