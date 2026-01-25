<script>

export let form = {};

const errors = form?.errors ?? {};
const values = form?.values ?? {};

// save email and password values to refill form if theres validation errors
const email = form?.values?.email ?? '';
const password = form?.values?.password ?? '';

</script>

<main>

    <!-- Login Box -->
<div class="flex flex-col justify-center items-center min-h-[100px]">

    <form class="login" method="POST" action="?/login" novalidate>
        <div class="w-[50dvw] h-[80dvh] border-1 border-gray-300 rounded-lg shadow-lg flex flex-col items-center m-10 gap-5">
            <p class="mt-5 font-bold">Login to your account</p>
            <p>Enter Email:</p>
            <input name="email" value={email} required type="email" placeholder="Email" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
            {#if errors.email}
			    <span style="color: red">{errors.email}</span>
		    {/if}
            <p>Enter Password:</p>
            <input name="password" value={password} required type="password" placeholder="Password" class="p-2 border border-gray-300 rounded-lg shadow-md w-[80%] focus:border-lightorange focus:border-2 focus:outline-none"/>
            {#if errors.password}
			    <span style="color: red">{errors.password}</span>
		    {/if}
            <p>Forgot Password?<a href="/" class="p-[5px] w-[100px] text-center text-lightorange text-black md:hover:text-darkorange md:hover:underline">Reset</a></p>
            <button type="submit" class="border-2 border-lightorange rounded-[10px] text-sm p-[5px] w-[80%] text-center text-lightorange md:hover:text-darkorange md:hover:border-darkorange md:hover:cursor-pointer">Login</button>
            <p>Don't have an account?<a href="/register" class="p-[5px] w-[100px] text-center text-lightorange text-black md:hover:text-darkorange md:hover:underline">Sign Up</a></p>
        </div>
    </form>

</div>
<!-- END -->

</main>