<!-- eslint-disable -->
<template>
  <div class="h-screen">
    <div class="grid md:grid-cols-12">
      <div
        class="col-span-5 hidden h-screen bg-[#0192ED] md:grid place-content-center"
      >
        <div class="flex flex-col items-center">
          <img
            src="https://app.middey.com/img/logo.04b904c9.png"
            alt=""
            class="h-[170px] w-[170px] object-contain"
          />
          <h5 class="text-white -mt-4">Explore banking with Middey</h5>
          <div class="w-[100px] h-[3px] bg-white my-1"></div>
          <div class="text-center text-white px-10 font-medium mt-4">
            Welcome to the future of banking with Middey.
            <div>Middey offers world class-banking services,</div>
            <div>made just for you.</div>
          </div>
        </div>
      </div>
      <div
        class="col-span-7 h-screen overflow-y-auto bg-[#fff] flex justify-center items-center"
      >
        <div class="login_box">
          <h2 class="text-[#343a40] font-bold md:text-3xl text-xl">
            Welcome to Middey
          </h2>
          <small>Provide the following details to create an account </small>

          <div class="my-4 grid grid-cols-2 gap-6">
            <div>
              <label>First Name</label>
              <div class="rounded flex border">
                <input
                  type="text"
                  name="first_name"
                  v-model.trim="first_name"
                  class="bg-transparent w-full border-none outline-none flex-1 p-3"
                />
              </div>
              <div class="text-red-500 w-full text-xs md:text-base">
                <p
                  v-if="!$v.first_name.required && $v.first_name.$dirty"
                  class=""
                >
                  First Name is required!
                </p>
              </div>
            </div>
            <div>
              <label>Last Name</label>
              <div class="rounded flex border">
                <input
                  type="text"
                  name="last_name"
                  v-model.trim="last_name"
                  class="bg-transparent w-full border-none outline-none flex-1 p-3"
                />
              </div>
              <div class="text-red-500 w-full text-xs md:text-base">
                <p
                  v-if="!$v.last_name.required && $v.last_name.$dirty"
                  class=""
                >
                  Last Name is required!
                </p>
              </div>
            </div>
            <div>
              <label>UserName</label>
              <div class="rounded flex border">
                <input
                  type="text"
                  name="username"
                  v-model.trim="username"
                  class="bg-transparent w-full border-none outline-none flex-1 p-3"
                />
              </div>
              <div class="text-red-500 w-full text-xs md:text-base">
                <p v-if="!$v.username.required && $v.username.$dirty" class="">
                  Username is required!
                </p>
              </div>
            </div>
            <div>
              <label>Phone Number</label>
              <div class="rounded flex border">
                <input
                  type="number"
                  name="phoneNumber"
                  v-model.trim="phoneNumber"
                  class="bg-transparent w-full border-none outline-none flex-1 p-3"
                />
              </div>
              <!-- <div class="text-red-500 w-full text-xs md:text-base">
                <p
                  v-if="!$v.phoneNumber.required && $v.phoneNumber.$dirty"
                  class=""
                >
                  Phone Number is required!
                </p>
              </div> -->
            </div>
          </div>

          <div class="mt-4">
            <label>Email</label>
            <div class="mb-4 rounded flex border">
              <input
                type="email"
                name="email"
                v-model.trim="email"
                class="bg-transparent w-full border-none outline-none flex-1 p-3"
              />
            </div>
            <div class="text-red-500 w-full text-xs md:text-base">
              <p v-if="!$v.email.required && $v.email.$dirty" class="">
                Email is required!
              </p>
              <p v-if="!$v.email.email" class="">Invalid email address</p>
            </div>

            <label>Password</label>
            <div class="mb-4 rounded flex border">
              <input
                type="password"
                name="password"
                v-model.trim="password"
                @keypress.enter="submitForm"
                class="bg-transparent w-full border-none outline-none flex-1 p-3"
              />
            </div>
            <div class="text-red-500 w-full text-xs md:text-base">
              <p v-if="!$v.password.required && $v.password.$dirty" class="">
                Password is required!
              </p>
              <p v-if="!$v.password.minLength" class="">
                Password must be between 6 characters and above
              </p>
            </div>

            <button
              @click="submitForm"
              class="flex justify-center items-center space-x-3 bg-[#0192ED] text-white px-8 py-3 rounded w-full mt-6"
              :class="loading ? 'cursor-not-allowed' : ''"
              :disabled="loading"
            >
              <div
                v-if="loading"
                class="h-6 w-6 rounded-full border-4 border-t-[#fff] border-r-[#fff] border-b-[#ed323730] border-l-[#ed323730] animate-spin"
              ></div>

              <div v-else class="font-medium">Register</div>
            </button>
            <div class="text-sm font-medium mt-4 text-center">
              Already registered?
              <span
                ><router-link to="/" class="text-[#0192ED] font-semibold"
                  >Sign in
                </router-link></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- eslint-disable -->

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";
import { mapState } from "vuex";
import { useRegister } from "@/Utils/useAuth";

export default {
  props: [],
  mixins: [validationMixin],

  data() {
    return {
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      username: "",
      phoneNumber: "",
    };
  },

  computed: {
    ...mapState(["loading"]),
  },

  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        //Register Logic
        const credentials = {
          first_name: this.first_name,
          last_name: this.last_name,
          username: this.username,
          user_email: this.email,
          user_password: this.password,
        };
        useRegister(credentials, this.$store, this.$router, this);
      } else {
      }
    },
  },
  validations: {
    email: { required, email },
    first_name: { required },
    last_name: { required },
    username: { required },
    password: {
      required,
      minLength: minLength(6),
    },
  },
};
</script>
<!-- eslint-disable -->

<style scoped>
label {
  font-weight: 500;
  font-size: 14px;
}
.login_box {
  background-color: #fff;
  width: 80%;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0 5px 10px rgb(0 0 0 / 9%);
}
</style>
