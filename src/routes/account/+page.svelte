<script>
  export let data;

  const user = data.user;
  const zoo_bookings = data.zoo_bookings;
  const hotel_bookings = data.hotel_bookings;
</script>

<main class="p-6 flex flex-col items-center gap-6">

  {#if user}
    <h1 class="text-2xl font-bold">Welcome, {user.user_forename} {user.user_surname}</h1>

    <!-- Logout Button -->
    <form method="POST" action="?/logout">
      <button
        type="submit"
        class="border-2 border-red-500 text-red-500 rounded-md px-4 py-2 hover:bg-red-500 hover:text-white"
      >
        Logout
      </button>
    </form>

    <!-- Change Password Section -->
    <section class="w-[80%] max-w-xl p-4 border rounded-lg shadow-md">
      <h2 class="font-semibold mb-2">Change Password</h2>
      <form method="POST" action="?/change_password">
        <input name="currentPassword" type="password" placeholder="Current Password" class="border p-2 rounded w-full mb-2" required />
        <input name="newPassword" type="password" placeholder="New Password" class="border p-2 rounded w-full mb-2" required />
        <input name="confirmPassword" type="password" placeholder="Confirm New Password" class="border p-2 rounded w-full mb-2" required />
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Change Password</button>
      </form>
    </section>

    <!-- Zoo Bookings -->
    <section class="w-[80%] max-w-xl p-4 border rounded-lg shadow-md">
      <h2 class="font-semibold mb-2">Zoo Bookings</h2>
      {#if zoo_bookings.length > 0}
        <ul class="list-disc pl-5">
          {#each zoo_bookings as booking}
            <li>{booking.visit_date} - {booking.num_adults} adults, {booking.num_children} children, {booking.num_infants} infants, {booking.num_concession} consession -</li>
          {/each}
        </ul>
      {:else}
        <p>No zoo bookings found.<a href="/register" class="p-[5px] w-[100px] text-center text-lightorange text-black md:hover:text-darkorange md:hover:underline">Book</a></p>
      {/if}
    </section>

    <!-- Hotel Bookings -->
    <section class="w-[80%] max-w-xl p-4 border rounded-lg shadow-md">
      <h2 class="font-semibold mb-2">Hotel Bookings</h2>
      {#if hotel_bookings.length > 0}
        <ul class="list-disc pl-5">
          {#each hotel_bookings as booking}
            <li>{booking.checkin_date} → {booking.checkout_date} - {booking.room_type} | Adults: {booking.num_adults}, Children: {booking.num_children}, Infants: {booking.num_infants}</li>
          {/each}
        </ul>
      {:else}
        <p>No hotel bookings found.<a href="/register" class="p-[5px] w-[100px] text-center text-lightorange text-black md:hover:text-darkorange md:hover:underline">Book</a></p>
      {/if}
    </section>

  {:else}
    <p>Please <a href="/login" class="text-blue-500 underline">login</a> to view your account.</p>
  {/if}

</main>