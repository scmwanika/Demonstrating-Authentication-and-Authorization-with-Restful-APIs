<template>
  <div class="content">
    <div class="flex-container">
      <!-- LOGIN -->
      <form @submit="login()">
        <fieldset>
          <legend>LOGIN</legend>
          <br />
          <label>Email:</label><br />
          <input type="email" v-model="email" required /><br />
          <label>Password: </label><br />
          <input type="password" v-model="password" /><br />
          <button class="btn btn-success" type="submit">Login</button>
          <a style="float: right; font-weight: bold" href="/signup">SignUp </a>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
//import { LOGIN_MUTATION } from "@/graphql";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {},
};
</script>
