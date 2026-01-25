<script>

	export let form = {}; // initialise empty object for form submission result/errors   - this is the default svelte storage location for this data
  export let data;

	let popup = ''; // for popup message '' | 'success' | 'error'

	const users = data.users ?? [];

	const errors = form?.errors ?? {};
	//console.log("errors client side:", errors); // debugging

	const visit_checkinDate = form?.values?.visit_checkinDate ?? '';
  const visit_checkoutDate = form?.values?.visit_checkoutDate ?? '';
	const num_adults = form?.values?.num_adults ?? '';
	const num_children = form?.values?.num_children ?? '';
  let room_type = form?.values?.room_type ?? '';
  const num_beds = form?.values?.num_beds ?? '';

</script>

<main>

<div class="relative min-h-screen bg-cover bg-center text-white" style="background-image: url('/all_images/img_hotel_room.jpg');">
  <!-- Black overlay -->
  <div class="absolute inset-0 bg-black/20"></div>

  <!-- Content -->
  <div class="relative z-10 flex flex-col justify-center items-center min-h-screen">
    <form class="book" method="POST" action="?/add_booking" novalidate>
      <div class="xs:w-[50dvw] w-[60dvw] md:w-[40dvw] min-h-[90dvh] border border-gray-300 rounded-lg shadow-lg flex flex-col items-center m-10 gap-5 p-5 bg-black/50">
        <p class="mt-5 font-bold">Hotel Booking</p>
        <p>Enter or Select Check-In Date:</p>
        <input name="visit-checkinDate" value={visit_checkinDate} required type="date" placeholder="Date"class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none bg-white text-black"/>
        <p>Enter or Select Check-Out Date:</p>
        <input name="visit-checkoutDate" value={visit_checkoutDate} required type="date" placeholder="Date"class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none bg-white text-black"/>
        <p class="text-center">Enter or Select Number of Adults:</p>
        <input name="num-adults" value={num_adults} required type="number" min=1 max=10 placeholder="Number of Adults" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none bg-white text-black"/>
        <p class="text-center">Enter or Select Number of Children:</p>
        <input name="num-children" value={num_children} required type="number" placeholder="Number of Children" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none bg-white text-black"/>
        <p class="text-center">Select Room Type:</p>
        <select name="room-type" bind:value={room_type} required class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none bg-white text-black">
          <option value="standard">Standard</option>
          <option value="extra">Extra</option>
          <option value="deluxe">Deluxe</option>
        </select>
        <p class="text-center">Enter or Select Number of Beds:</p>
        <input name="num-beds" value={num_beds} required type="number" placeholder="Number of Beds" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none bg-white text-black"/>
        <button type="submit" class="bg-lightorange rounded-[10px] text-sm p-[5px] w-[80%] text-center text-white md:hover:bg-darkorange md:hover:cursor-pointer">Book</button>
      </div>
    </form>
  </div>
</div>

<!-- END -->

</main>