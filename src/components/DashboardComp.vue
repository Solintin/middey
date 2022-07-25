<!-- eslint-disable -->
<template>
  <div class="w-full h-full overflow-y-auto bg-[#E5E5E5] py-10 px-4">
    <h1 class="font-bold">Dashboard</h1>
    <div class="mt-5">
      <div class="grid md:grid-cols-2 items-stretch gap-4">
        <div class="card text-white flex flex-col justify-between">
          <div class="space-y-1 text-2xl mb-3">
            <div>Account Details</div>
            <div>7359583211</div>
            <div>WEMA BANK</div>
          </div>

          <div class="space-y-1 text-2xl">
            <div>Wallet Balance</div>
            <div>₦50,000</div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div
            class="flex flex-col space-y-1 p-4 rounded-md tranform hover:-translate-y-2 duration-300 shadow-sm bg-white"
          >
            <div
              class="grid place-content-center w-10 h-10 text-white bg-[#0192ED] p-4 rounded-full"
            >
              <i class="fa fa-paper-plane" aria-hidden="true"></i>
            </div>
            <h2 class="font-medium text-lg">Send</h2>
            <h6 class="text-xs font-medium">
              Send Money to any bank at low rate
            </h6>
          </div>
          <div
            class="flex flex-col space-y-1 p-4 rounded-md tranform hover:-translate-y-2 duration-300 shadow-sm bg-white"
          >
            <div
              class="grid place-content-center w-10 h-10 text-white bg-[#0192ED] p-4 rounded-full"
            >
              <i class="fa-solid fa-download"></i>
            </div>
            <h2 class="font-medium text-lg">Receive</h2>
            <h6 class="text-xs font-medium">
              Send Money to any bank at low rate
            </h6>
          </div>
          <div
            class="flex flex-col space-y-1 p-4 rounded-md tranform hover:-translate-y-2 duration-300 shadow-sm bg-white"
          >
            <div
              class="grid place-content-center w-10 h-10 text-white bg-[#0192ED] p-4 rounded-full"
            >
              <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
            <h2 class="font-medium text-lg">History</h2>
            <h6 class="text-xs font-medium">Check your trasaction history</h6>
          </div>
          <div
            class="flex flex-col space-y-1 p-4 rounded-md tranform hover:-translate-y-2 duration-300 shadow-sm bg-white"
          >
            <div
              class="grid place-content-center w-10 h-10 text-white bg-[#0192ED] p-4 rounded-full"
            >
              <i class="fa fa-file" aria-hidden="true"></i>
            </div>
            <h2 class="font-medium text-lg">Payroll</h2>
            <h6 class="text-xs font-medium">Manage your payroll</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
export default {};
</script>

<style></style>
