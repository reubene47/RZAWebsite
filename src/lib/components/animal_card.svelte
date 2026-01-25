<script>
  export let animal; // expects an object from your database
</script>

<a href={`/animals/${animal.slug}`} class="block w-full md:w-[30%] p-2">
  <div class="relative group overflow-hidden bg-white border-2 border-lightorange h-[60dvh] md:h-[40dvh] cursor-pointer md:hover:shadow-lg md:hover:shadow-lightorange">
    <!-- Image -->
    <img src={animal.img_url} alt={animal.animal_name} 
         class="w-full h-full object-fit md:object-cover transition-transform duration-300 md:group-hover:scale-110" />

    <!-- Overlay text -->
    <div class="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 text-center pointer-events-none">
      <h3 class="text-xl unkempt-bold transition-all duration-200 group-hover:underline">{animal.animal_name}</h3>
    </div>
  </div>
</a>