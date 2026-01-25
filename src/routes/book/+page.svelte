<script>

	export let form = {}; // initialise empty object for form submission result/errors   - this is the default svelte storage location for this data
    export let data;


	let popup = ''; // for popup message '' | 'success' | 'error'

	const users = data.users ?? [];

	const errors = form?.errors ?? {};
	//console.log("errors client side:", errors); // debugging

	const visit_date = form?.values?.visit_date ?? '';
	const num_adults = form?.values?.num_adults ?? '';
	const num_children = form?.values?.num_children ?? '';

</script>

<main>

    <!-- Book Box -->
<div class="border-2 border-blue-500 flex flex-col items-center">

    <form class="book" method="POST" action="?/add" novalidate>
        <div class="xs:w-[50dvw] w-[60dvw] md:w-[40dvw] min-h-[90dvh] border-1 border-gray-300 rounded-lg shadow-lg flex flex-col items-center m-10 gap-5">
            <p class="mt-5 font-bold">Zoo Booking</p>
            <p>Enter or Select Date:</p>
            <input name="visit-date" value={visit_date} required type="date" placeholder="Date" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
			<p class="text-center">Enter or Select Number of Adults:</p>
            <input name="num-adults" value={num_adults} required type="number" placeholder="Number of Adults" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
			<p class="text-center">Enter or Select Number of Children:</p>
            <input name="num-children" value={num_children} required type="number" placeholder="Number of Children" class=" p-2 border-1 border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
			<button type="submit" class="border-2 border-lightorange rounded-[10px] text-sm p-[5px] w-[80%] text-center text-lightorange md:hover:text-darkorange md:hover:border-darkorange md:hover:cursor-pointer">Book</button>
        </div>
    </form>
    
</div>

<!-- END -->

</main>