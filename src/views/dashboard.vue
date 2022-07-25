<!-- eslint-disable -->
<template>
  <div class="flex h-screen">
    <div
      class="w-[400px] h-screen flex flex-col justify-between bg-white py-10"
    >
      <div>
        <div class="flex flex-col px-10 items-center space-y-2">
          <div
            class="grid place-content-center text-white font-bold text-xl bg-[#0192ED] p-8 rounded-full"
          >
            {{ currentUserData.first_name.charAt(0)
            }}{{ currentUserData.last_name.charAt(0) }}
          </div>
          <h2 class="">Welcome Back,</h2>
          <h2 class="text-xl font-bold">
            {{ currentUserData.first_name }} {{ currentUserData.last_name }}
          </h2>
        </div>
        <div class="mt-10 px-5 space-y-2">
          <router-link
            v-for="(item, idx) in sideLinks"
            :key="idx"
            :to="item.link"
            class="flex items-center hover:bg-[#0192ED90] hover:text-[#ffffffdb] transition-all transform duration-500 font-medium rounded-md px-5 py-2"
            :class="
              item.link.includes(currentPath)
                ? 'bg-[#0192ED90] text-[#ffffffdb]'
                : 'text-[#515352]'
            "
          >
            <span class="w-2/12">
              <i :class="`${item.icon} text-base`"></i
            ></span>
            <div class="w-10/12">{{ item.name }}</div>
          </router-link>
        </div>
      </div>
      <div
        @click="logout"
        class="flex items-center transform duration-500 transition-all font-medium text-base rounded-md hover:bg-[#0192ED90] hover:text-[#ffffffdb] mx-5 px-5 py-2 cursor-pointer"
      >
        <span class="w-2/12">
          <i class="fa-solid fa-arrow-right-from-bracket"></i
        ></span>
        <div class="w-10/12">Logout</div>
      </div>
    </div>
    <div class="w-full overflow-y-auto bg-[#E5E5E5] py-10 px-4">
      <h1 class="font-bold">Dashboard</h1>
      <div class="mt-5">
        <div class="grid grid-cols-2 items-stretch gap-4">
          <div class="card text-white flex flex-col justify-between">
            <div class="space-y-1 text-2xl">
              <div>Account Details</div>
              <div>7359583211</div>
              <div>WEMA BANK</div>
            </div>

            <div class="space-y-1 text-2xl">
              <div>Wallet Balance</div>
              <div>₦50,000</div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
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
  </div>
</template>
<!-- eslint-disable -->

<script>
const sideBarContent = [
  {
    name: "Home",
    link: "/dashboard",
    icon: "fa-solid fa-home",
  },
  {
    name: "Employees",
    link: "/",
    icon: "fa-solid fa-users",
  },
  {
    name: "Payroll",
    link: "/",
    icon: "fa-solid fa-credit-card",
  },
  {
    name: "Settings",
    link: "/",
    icon: "fa-solid fa-cog",
  },
  {
    name: "KYC",
    link: "/",
    icon: "fa-solid fa-file",
  },
];
import { mapGetters } from "vuex";
export default {
  name: "admin",
  data() {
    return {
      sideLinks: sideBarContent,
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
    ...mapGetters(["currentUserData"]),
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>
<!-- eslint-disable -->

<style>
.card {
  background: url("https://app.middey.com/img/wallet-bg.8dc05788.jpeg");
  background-size: cover;
  background-position: 50%;
  border-radius: 10px;
  display: flex;
  align-items: start;
  padding: 2rem;
}
</style>
