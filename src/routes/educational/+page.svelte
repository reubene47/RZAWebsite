<script>

    let infobox = "max-w-[60%] flex items-center w-[75dvw] h-[60dvh] md:w-[50ddvw] md:h-[70dvh] min-h-[200px] bg-lightgreen border-1 border-darkgreen rounded-lg shadow-lg flex flex-col md:hover:-translate-y-10 duration-300 lg:w-[25vw] lg:h-[60dvh]";
    let infobox_img = "w-[90%] h-[50%] rounded-lg m-3";
    let infobox_desc = "unkempt-bold flex items-center m-3 text-[0.9rem] xl:text-[1.2rem] text-center w-[90%] h-[30%]";

</script>

<main>

<div class="max-w-6xl mx-auto px-4 py-16 space-y-20">
  <!-- Overview -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    <h2 class="unkempt-bold text-2xl md:text-3xl text-darkbrown">
      Educational Visits Overview
    </h2>
    <p class="text-gray-700">
      Our educational visits provide structured, curriculum-linked learning experiences that enhance classroom teaching
      through real-world observation and engagement.
    </p>
  </section>

  <!-- Horizontal Divider -->
  <div class="h-[4px] bg-gray-300"></div>

  <!-- Curriculum -->
  <section class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
    <div class="space-y-4">
      <h2 class="unkempt-bold text-2xl md:text-3xl text-darkbrown">
        Curriculum Links and Learning Outcomes
      </h2>
      <p class="text-gray-700 leading-relaxed">
        Each visit supports the National Curriculum and relevant qualification frameworks by reinforcing key concepts
        through practical application.
      </p>
    </div>

    <ul class="list-disc pl-6 space-y-2 text-gray-700">
      <li>Develop subject knowledge through real-world examples</li>
      <li>Improve observation, enquiry, and analytical skills</li>
      <li>Encourage curiosity and independent learning</li>
    </ul>
  </section>
</div>

<div class="bg-gray-50 py-10">
  <div class="max-w-6xl mx-auto px-4 space-y-12">

    <h2 class="unkempt-bold text-2xl md:text-3xl text-center text-darkbrown">
      Safeguarding and Safety
    </h2>
    <p class="text-gray-600">
        We take the safety and well-being of all visitors seriously. Our staff are trained in safeguarding procedures to ensure a secure environment for students. Key measures include:
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ul class="list-disc pl-6 space-y-2 text-gray-700">
        <li>DBS-checked staff</li>
        <li>Designated Safeguarding Lead</li>
        <li>Clear supervision procedures</li>
      </ul>

      <ul class="list-disc pl-6 space-y-2 text-gray-700">
        <li>Risk assessments available</li>
        <li>First aid trained staff on site</li>
        <li>Emergency procedures in place</li>
      </ul>
    </div>
  </div>
</div>

<div class="py-10">
  <div class="w-full mx-auto space-y-12">

    <div class="text-center max-w-2xl mx-auto space-y-4">
      <h2 class="unkempt-bold text-2xl md:text-3xl text-darkbrown">
        Animals You May Encounter
      </h2>
      <p class="text-gray-600">
        Students learn about animal behaviour, habitats, and conservation through close observation and guided discussion.
      </p>
      <p class="text-gray-600">
        Take a look at some of the fascinating species you might see during your visit:
      </p>
    </div>

    <!-- Info Boxes - Div -->
    <div class="flex flex-col md:flex-row h-auto justify-center items-center gap-10 bg-gray-50 pt-20 pb-20">

        <!-- Info Box - Red Panda -->
        <div class={infobox}>
            <img src="/animal_images/img_red_panda.jpg" class={infobox_img} alt="Red Panda"/>
            <p class="flex justify-center underline">Red Panda</p>
            <p class={infobox_desc}>A small, tree-dwelling mammal with reddish fur and a long bushy tail, more closely related to raccoons than to giant pandas despite its name</p>
        </div>

        <!-- Info Box - Humboldt Penguin -->
        <div class={infobox}>
            <img src="/animal_images/img_humboldt_penguin.jpg" class={infobox_img} alt="Humboldt Penguin"/>
            <p class="justify-center underline">Humboldt Penguin</p>
            <p class={infobox_desc}>A medium-sized penguin from South America that can be identified by the unique pattern of black spots on its chest, which differs for every individual penguin</p>
        </div>

        <!-- Info Box - Komodo Dragon -->
        <div class={infobox}>
            <img src="/animal_images/img_komodo_dragon.jpg" class={infobox_img} alt="Komodo Dragon"/>
            <p class="justify-center underline">Komodo Dragon</p>
            <p class={infobox_desc}>The world's largest living lizard, native to a few Indonesian islands, which uses venom in its bite to weaken prey</p>
        </div>
    </div>

  </div>
</div>

</main>