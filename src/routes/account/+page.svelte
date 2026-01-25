<script>
  export let data;

  const user = data.user;
  const zooBookings = data.zooBookings;
  const hotelBookings = data.hotelBookings;
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
      <form method="POST" action="?/changePassword">
        <input name="currentPassword" type="password" placeholder="Current Password" class="border p-2 rounded w-full mb-2" required />
        <input name="newPassword" type="password" placeholder="New Password" class="border p-2 rounded w-full mb-2" required />
        <input name="confirmPassword" type="password" placeholder="Confirm New Password" class="border p-2 rounded w-full mb-2" required />
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Change Password</button>
      </form>
    </section>

    <!-- Zoo Bookings -->
    <section class="w-[80%] max-w-xl p-4 border rounded-lg shadow-md">
      <h2 class="font-semibold mb-2">Zoo Bookings</h2>
      {#if zooBookings.length > 0}
        <ul class="list-disc pl-5">
          {#each zooBookings as booking}
            <li>{booking.date} - {booking.time} - {booking.ticket_type}</li>
          {/each}
        </ul>
      {:else}
        <p>No zoo bookings found.</p>
      {/if}
    </section>

    <!-- Hotel Bookings -->
    <section class="w-[80%] max-w-xl p-4 border rounded-lg shadow-md">
      <h2 class="font-semibold mb-2">Hotel Bookings</h2>
      {#if hotelBookings.length > 0}
        <ul class="list-disc pl-5">
          {#each hotelBookings as booking}
            <li>{booking.check_in} → {booking.check_out} - {booking.room_type}</li>
          {/each}
        </ul>
      {:else}
        <p>No hotel bookings found.</p>
      {/if}
    </section>

  {:else}
    <p>Please <a href="/login" class="text-blue-500 underline">login</a> to view your account.</p>
  {/if}

</main>