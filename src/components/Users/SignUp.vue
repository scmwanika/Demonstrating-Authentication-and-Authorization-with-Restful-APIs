<template>
  <div class="content">
    <div class="flex-container">
      <!-- SIGN UP -->
      <form @submit="signup()">
        <fieldset>
          <legend>SIGN UP</legend>
          <br />
          <label>Role:</label><br />
          <input type="text" v-model="role" required /><br />
          <label>Name:</label><br />
          <input type="text" v-model="name" required /><br />
          <label>Email:</label><br />
          <input type="email" v-model="email" required /><br />
          <label>Password: </label><br />
          <input type="password" v-model="password" /><br />
          <button class="btn btn-success" type="submit">SignUp</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { SIGNUP_MUTATION } from "@/graphql";

export default {
  name: "SignUp",
  data() {
    return {
      role: "",
      name: "",
      email: "",
      password: "",
      createdAt: "",
    };
  },
  methods: {
    signup() {
      this.$apollo.mutate({
        mutation: SIGNUP_MUTATION,
        variables: {
          role: this.role,
          name: this.name,
          email: this.email,
          password: this.password,
          createdAt: this.createdAt,
        },
      });
    },
  },
};
</script>
