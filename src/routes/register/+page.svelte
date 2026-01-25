<script>

	export let form = {}; // initialise empty object for form submission result/errors   - this is the default svelte storage location for this data
    export let data;

	let popup = ''; // for popup message '' | 'success' | 'error'

	// debug line:
	//console.log('data:', data);     // Logs the entire data object received

	// pull out specific variabled=s from data object to be used in the page (good practice)
	// [] used as this is a list of users
	const users = data.users ?? []; // this defaults to an  array if data.users doesnt exist/null

	// below the questionmark after data warns the compiler this may not exist and not to error if it doesnt
	// {} used as default as an object (key/value pairs)

	const errors = form?.errors ?? {};
	//console.log("errors client side:", errors); // debugging

	// if (form?.success) {
	// 	popup = 'success';
	// 	setTimeout(() => (popup = null), 3000);
	// }

	// if (form?.delete_success) {
	// 	popup = 'delete_success';
	// 	setTimeout(() => (popup = null), 3000);
	// }

	// if (form?.errors) {
	// 	popup = 'error';
	// 	setTimeout(() => (popup = null), 3000);
	// }

	const email = form?.values?.email ?? '';
	const forename = form?.values?.forename ?? '';
	const surname = form?.values?.surname ?? '';
	const password = form?.values?.password ?? '';
	const passwordCheck = form?.values?.passwordCheck ?? '';

</script>

<main>

    <!-- Sign Up Box -->
<div class="flex flex-col justify-center items-center">

    <form class="register" method="POST" action="?/add" novalidate>
        <div class="xs:w-[50dvw] w-[60dvw] md:w-[40dvw] min-h-[90dvh] border-1 border-gray-300 rounded-lg shadow-lg flex flex-col items-center m-10 gap-5 pb-5">
            <p class="mt-5 font-bold">Create an account</p>
            <p>Enter Email:</p>
            <input name="email" value={email} required type="email" placeholder="Email" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
            {#if errors.emailLength}
			    <span class="text-center p-2 text-red-500">{errors.emailLength}</span>
		    {/if}
			{#if errors.emailExists}
			    <span class="text-center p-2 text-red-500">{errors.emailExists}</span>
		    {/if}
			<p>Enter Forename:</p>
            <input name="forename" value={forename} required type="text" placeholder="Forename" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
            {#if errors.forenameLength}
			    <span class="text-center p-2 text-red-500">{errors.forenameLength}</span>
		    {/if}
			<p>Enter Surname:</p>
			<input name="surname" value={surname} required type="text" placeholder="Surname" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
            {#if errors.surnameLength}
			    <span class="text-center p-2 text-red-500">{errors.surnameLength}</span>
		    {/if}
			<p>Enter Password:</p>
            <input name="password" value={password} required type="password" placeholder="Password" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
            {#if errors.password}
			    <span class="text-center p-2 text-red-500">{errors.password}</span>
		    {/if}
			<p>Re-type Password:</p>
            <input name="passwordCheck" value={passwordCheck} required type="password" placeholder="Re-type Password" class=" p-2 border-1 border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
            {#if errors.passwordCheck}
			    <span class="text-center p-2 text-red-500">{errors.passwordCheck}</span>
		    {/if}
			<button type="submit" class="border-2 border-lightorange rounded-[10px] text-sm p-[5px] w-[80%] text-center text-lightorange md:hover:text-darkorange md:hover:border-darkorange md:hover:cursor-pointer">Register</button>
            <p>Already have an account?<a href="/login" class="p-[5px] w-[100px] text-center text-lightorange text-black md:hover:text-darkorange md:hover:underline">Login</a></p>
		</div>
    </form>
    
</div>

<!-- END -->

</main>