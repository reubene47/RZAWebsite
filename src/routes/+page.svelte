<script>

  let infobox = "relative group overflow-hidden w-full md:w-[32.9 dvw] md:h-[60dvh] flex flex-col justify-center";
  let infobox_img = "w-full h-full hover:cursor-pointer md:hover:scale-110 duration-400";
  let infobox_title = "text-lg unkempt-bold md:group-hover:underline";
  let hor_divider = "w-[80%] h-[4px] bg-gray-300 mt-10 mb-10 mx-auto"

</script>

<main>

<div class="relative w-full">
  <!-- Background image -->
  <img src="/all_images/img_zoo_aerial.jpg" alt="Zoo aerial" class="w-full h-[30dvh] md:h-[70dvh] object-cover"/>

  <!-- Title and description overlay -->
  <div class="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50">

    <h1 class="text-[2rem] md:text-[4rem] font-bold">Riget Zoo Adventures</h1>
    <p class="mt-3 text-[0.7rem] md:text-[1.5rem] w-[80%]">
      Experience the wild like never before at Riget Zoo Adventures! Immerse yourself in thrilling animal encounters, educational exhibits, and unforgettable adventures for the whole family. Plan your visit today and create memories that will last a lifetime!
    </p>

  </div>

</div>

<!-- Horizontal Divider -->
<div class={hor_divider}></div>
    
    <!-- Explore facilities and attractions title -->
<div class="w-full h-auto mt-10 mb-10 flex justify-center unkempt-bold text-[1.5rem] md:text-[2rem]">
  <p>Explore our attractions and facilities</p>
</div>

    <!-- Explore attractions and facilities info boxes -->
<div class="border-2 border-lightorange divide-y-2 md:divide-y-0 md:divide-x-2 divide-lightorange flex flex-col md:flex-row h-auto justify-center items-center">

    <!-- Info Box - Animals -->
     <a href="/animals" class="w-full">
      <div class={infobox}>
          <img src="/animal_images/img_multi_animals.jpg" class={infobox_img} alt="Animals"/>

          <div class="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 text-center">
              <h3 class={infobox_title}>Animals</h3>
              <p class="text-sm">Meet wildlife from around the world</p>
          </div>
      </div>
    </a>

        <!-- Info Box - Cafe -->
    <a href="/cafe" class="w-full">
      <div class={infobox}>
          <img src="/all_images/img_cafe.avif" class={infobox_img} alt="Cafe"/>

          <div class="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 text-center">
              <h3 class={infobox_title}>Cafe</h3>
              <p class="text-sm">Enjoy delicious meals and refreshments</p>
          </div>
      </div>
    </a>

        <!-- Info Box - Other facilities -->
    <a href="/facilities" class="w-full">
      <div class={infobox}>
          <img src="/all_images/img_adventure_playground.jpg" class={infobox_img} alt="Other facilities"/>

          <div class="absolute bottom-0 left-0 w-full bg-black/70 text-white p-4 text-center">
                <h3 class={infobox_title}>Other attractions and facilities</h3>
                <p class="text-sm">Explore our endless variety of attractions and facilities</p>
          </div>
      </div>
    </a>

</div>

<!-- Horizontal Divider -->
<div class={hor_divider}></div>
    
    <!-- Explore facilities and attractions title -->
<div class="w-full h-auto mt-10 mb-10 flex justify-center unkempt-bold text-[1.5rem] md:text-[2rem]">
  <p>Discover our site</p>
</div>

    <!-- Map of Riget Zoo Adventures - Div -->
<div class="border-2 border-lightorange w-[70%] h-[60dvh] mb-20 mx-10 mx-auto">
  <img src="/all_images/img_zoo_map.png" alt="Map of Riget Zoo Adventures" class="w-full h-full"/>
</div>

<!-- Horizontal Divider -->
<div class={hor_divider}></div>
    
<div class="w-full h-auto mt-10 mb-10 flex justify-center unkempt-bold text-[1.5rem] md:text-[2rem]">
  <p>Experince our zoo with videos</p>
</div>

    <!-- Video of child feeding giraffe -->
<video loop autoplay class="border-2 bg-gray-200 border-lightorange w-[40%] md:w-[30%] h-[60dvh] mb-20 mx-auto p-2 md:p-5 rounded-lg">
  <source src="/videos/vid_child_feeding_giraffe.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<!-- Horizontal Divider -->
<div class={hor_divider}></div>

<!-- Contact info -->
<div class="bg-gray-50 w-full min-h-[60dvh] flex flex-col md:flex-row text-center text-[1rem] md:text-[1.5rem] divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-300">

  <!-- Image -->
  <div class="flex justify-center items-center w-full md:w-[50%]">
    <img src="/all_images/img_contact_us.png" alt="Contact Us" class="w-[50%] h-[50%] md:w-[75%] h-[75%]"/>
  </div>

  <!-- Info Box -->
  <div class="flex flex-col justify-center gap-6 w-full md:w-[50%] p-6">
    <div class="divide-y-2 divide-gray-300">
      <p>Email: info@rigetzoo.com</p>
      <p>Phone: +44 12345678910</p>
      <p>Address: Riget Zoo, Hampshire, UK</p>
    </div>
  </div>

</div>

<!-- END -->

</main>