<script>
	import '../app.css';
	import { slide } from 'svelte/transition';

	let { children } = $props();
	let showBurgerMenu = $state(false);

	let navbutton = "bg-lightorange border-2 border-darkorange rounded-[10px] text-sm p-[5px] w-[100px] text-center md:hover:text-darkorange md:hover:scale-115 duration-200";
	let icon = "text-lightorange w-[50px] h-[50px] text-lightorange md:hover:text-darkorange md:hover:scale-115 transform transition-transform duration-200";
	let mobile_navbutton = "w-[100%] text-black border-t-2 border-t-lightorange text-center p-5 hover:bg-darkorange hover:text-white duration-200";
</script>

<div class="min-h-screen flex flex-col">
	<!-- Navigation Bar (Renders on all pages) -->
    <div class="h-fit w-full bg-lightgreen flex justify-between align-center items-center gap-5 text-white">
		<!-- Logo -->
		<div class="flex items-center">
			<a href="/">
				<img src="/all_images/img_RZA_logo_removebg.png" alt="Logo" class="w-auto h-[100px]" />
			</a>
		</div>
		
		<div class="hidden md:flex gap-5 pr-10 items-center">
			<!-- User Icon SVG -->
			<a href="/register" title="Account" class={icon}>
			<svg
				fill="currentColor"
				stroke="currentColor"
				viewBox="0 0 256 256"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M228,128A100,100,0,1,0,60.71,201.90967a3.97048,3.97048,0,0,0,.842.751,99.79378,99.79378,0,0,0,132.8982-.00195,3.96558,3.96558,0,0,0,.83813-.74756A99.76267,99.76267,0,0,0,228,128ZM36,128a92,92,0,1,1,157.17139,64.87207,75.616,75.616,0,0,0-44.50782-34.04053,44,44,0,1,0-41.32714,0,75.61784,75.61784,0,0,0-44.50782,34.04A91.70755,91.70755,0,0,1,36,128Zm92,28a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,156ZM68.86475,198.417a68.01092,68.01092,0,0,1,118.27.00049,91.80393,91.80393,0,0,1-118.27-.00049Z"/>
			</svg>
			</a>

			<!-- Rest of nav bar buttons -->
			<a href="/" class={navbutton}>Home</a>
			<a href="/book" class={navbutton}>Book</a>
			<a href="/hotel" class={navbutton}>Hotel</a>
			<a href="/educational" class={navbutton}>Educational</a>
		</div>
		
		<!-- Burger Menu Button -->
		<button class="md:hidden" aria-label="Burger Menu" onclick={() => showBurgerMenu = !showBurgerMenu}>
			<svg class="stroke-lightorange w-[50px] h-[50px] cursor-pointer mr-3"
				fill="currentColor"
				stroke="currentColor"
				viewBox="0 0 24 24" 
				xmlns="http://www.w3.org/2000/svg">
				<path d="M20 7L4 7" stroke-width="1.5" stroke-linecap="round"/>
				<path d="M20 12L4 12" stroke-width="1.5" stroke-linecap="round"/>
				<path d="M20 17L4 17" stroke-width="1.5" stroke-linecap="round"/>
			</svg>
		</button>
	</div>

	{#if showBurgerMenu}
	<div class="md:hidden z-50 w-[50%] h-auto bg-white flex flex-col items-center text-white absolute top-[100px] right-0 border-l-2 border-l-lightorange border-b-2 border-b-lightorange" transition:slide={{ duration: 300 }}>
		<a href="/register" class={mobile_navbutton} onclick={() => showBurgerMenu = !showBurgerMenu}>Account</a>
		<a href="/" class={mobile_navbutton} onclick={() => showBurgerMenu = !showBurgerMenu}>Home</a>
		<a href="/book" class={mobile_navbutton} onclick={() => showBurgerMenu = !showBurgerMenu}>Book</a>
		<a href="/hotel" class={mobile_navbutton} onclick={() => showBurgerMenu = !showBurgerMenu}>Hotel</a>
		<a href="/educational" class={mobile_navbutton} onclick={() => showBurgerMenu = !showBurgerMenu}>Educational</a>
	</div>
	{/if}

    <!-- Rendered content based on page -->
    <div class="flex-1">
        {@render children?.()}
    </div>

    <!-- Footer -->
    <div class="h-fit w-full bg-lightgreen mb-0 flex justify-between items-center">
        <div class="flex items-center">
			<a href="/">
            	<img src="/all_images/img_RZA_logo_removebg.png" alt="Logo" class="w-auto h-[100px]"/>
			</a>
            <p class="text-black ml-5">© Riget Zoo Adventures 2025</p>
        </div>

		<a href="/accessibility" title="Accessibility" class="text-center mr-5">
			<svg class={icon}
					fill="currentColor"
					stroke="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 122.88 122.88">
					<path d="M61.44,0A61.46,61.46,0,1,1,18,18,61.21,61.21,0,0,1,61.44,0Zm-.39,74.18L52.1,98.91a4.94,4.94,0,0,1-2.58,2.83A5,5,0,0,1,42.7,95.5l6.24-17.28a26.3,26.3,0,0,0,1.17-4,40.64,40.64,0,0,0,.54-4.18c.24-2.53.41-5.27.54-7.9s.22-5.18.29-7.29c.09-2.63-.62-2.8-2.73-3.3l-.44-.1-18-3.39A5,5,0,0,1,27.08,46a5,5,0,0,1,5.05-7.74l19.34,3.63c.77.07,1.52.16,2.31.25a57.64,57.64,0,0,0,7.18.53A81.13,81.13,0,0,0,69.9,42c.9-.1,1.75-.21,2.6-.29l18.25-3.42A5,5,0,0,1,94.5,39a5,5,0,0,1,1.3,7,5,5,0,0,1-3.21,2.09L75.15,51.37c-.58.13-1.1.22-1.56.29-1.82.31-2.72.47-2.61,3.06.08,1.89.31,4.15.61,6.51.35,2.77.81,5.71,1.29,8.4.31,1.77.6,3.19,1,4.55s.79,2.75,1.39,4.42l6.11,16.9a5,5,0,0,1-6.82,6.24,4.94,4.94,0,0,1-2.58-2.83L63,74.23,62,72.4l-1,1.78Zm.39-53.52a8.83,8.83,0,1,1-6.24,2.59,8.79,8.79,0,0,1,6.24-2.59Zm36.35,4.43a51.42,51.42,0,1,0,15,36.35,51.27,51.27,0,0,0-15-36.35Z"/>
			</svg>
		</a>
	</div>
</div>

<!-- Burger Menu SVG --> 
<!-- <svg class="stroke-lightorange w-[50px] h-[50px]"
	fill="currentColor"
	stroke="currentColor"
	viewBox="0 0 24 24" 
	xmlns="http://www.w3.org/2000/svg">
	<path d="M20 7L4 7" stroke-width="1.5" stroke-linecap="round"/>
	<path d="M20 12L4 12" stroke-width="1.5" stroke-linecap="round"/>
	<path d="M20 17L4 17" stroke-width="1.5" stroke-linecap="round"/>
</svg> -->