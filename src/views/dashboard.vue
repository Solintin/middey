<!-- eslint-disable -->
<template>
  <div class="flex h-screen">
    <button
      @click="toggle"
      class="toggle-menu absolute right-5 top-8 place-content-center text-black font-bold text-xl bg-[#fff] w-8 h-8 p-5 rounded-full"
    >
      <i class="fa-solid fa-bars"></i>
    </button>
    <div
      :class="[isMobile ? 'isOpen' : null, 'sidebar']"
      class="sidebar transform duration-500 md:w-[300px] w-[280px] z-10 h-screen md:flex flex-col justify-between bg-white py-10"
    >
      <div>
        <div class="flex flex-col px-10 items-center space-y-2">
          <div
            class="grid place-content-center uppercase text-white font-bold text-xl bg-[#0192ED] p-8 rounded-full"
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
          <div
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
          </div>
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
    <div class="main h-screen">
      <DashboardComp />
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
import DashboardComp from "../components/DashboardComp.vue";
export default {
  name: "admin",
  data() {
    return {
      sideLinks: sideBarContent,
      isMobile: false,
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    },
    checkMobile() {
      return this.isMobile;
    },
    ...mapGetters(["currentUserData"]),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    toggle() {
      this.isMobile = !this.isMobile;
    },
  },
  components: { DashboardComp },
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

.toggle-menu {
  display: none;
}
.sidebar {
  position: fixed;
  min-width: 300px;
  left: 0;
  top: 0;
  bottom: 0;
}
.main {
  margin-left: 300px;
  width: 100%;
}
@media screen and (max-width: 640px) {
  .toggle-menu {
    display: grid;
  }

  .main {
    margin-left: 0;
  }

  .sidebar {
    left: -100vw;
    transition: all 0.2s linear;
  }
  .sidebar.isOpen {
    left: 0;
  }
}
</style>
