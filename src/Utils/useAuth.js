/* eslint-disable  */
import axios from "@/Utils/axios.config.js";

export const useRegister = (credentials, store, router, dis) => {
  store.dispatch("setLoading", true);
  axios
    .post("/users/", credentials, {
      headers: {
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJsb2NhbGhvc3QiLCJpYXQiOjE2NTcxOTcxNTksImV4cCI6MTY3Mjk3NzE1OSwidXNlciI6eyJJRCI6MSwidXNlcm5hbWUiOiJCcnVpeiIsInVzZXJfZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJmaXJzdF9uYW1lIjoiQWRleWVtaSIsImxhc3RfbmFtZSI6IkF5b21pIiwicm9sZXMiOlsiYWRtaW5pc3RyYXRvciJdfX0.4mOg8AWJHBqKzsikPJcTilJcJOILh6keqh1MQUgJWWg",
      },
    })
    .then((response) => {
      console.log(response);

      store.dispatch("setLoading", false);
      dis.$toast.success("Registration Successful");

      router.push("/");
    })
    .catch((error) => {
      store.dispatch("setLoading", false);
      dis.$toast.error("Registration Error");
    });
};

export const useLogin = (credentials, store, router, dis) => {
  store.dispatch("setLoading", true);
  axios
    .post("/users/login/", credentials)
    .then((response) => {
      console.log(response.data.data);
      store.dispatch("setUser", response.data.data);
      axios
        .get(`/users/?user_id=${response.data.data.user_id}`, {
          headers: {
            authorization: `Bearer ${response.data.data.access_token}`,
          },
        })
        .then((response) => {
          console.log(response.data.data);
          store.dispatch("setLoading", false);
          store.dispatch("setUseData", response.data.data);
          dis.$toast.success("Login Successful");
          router.push("/dashboard");
        });
    })
    .catch((error) => {
      store.dispatch("setLoading", false);
      dis.$toast.error("Login failed");

      console.log(error);
    });
};
