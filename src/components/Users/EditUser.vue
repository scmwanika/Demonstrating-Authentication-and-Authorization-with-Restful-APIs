<template>
  <div class="content">
    <div class="flex-container">
      <!-- EDIT USER -->
      <form @submit="updateUser()">
        <fieldset>
          <legend>EDIT USER</legend>
          <br />
          <label>Role:</label><br />
          <input type="text" v-model="getUser.role" required /><br />
          <label>Name:</label><br />
          <input type="text" v-model="getUser.name" required /><br />
          <label>Email:</label><br />
          <input type="email" v-model="getUser.email" required /><br />
          <label>Password: </label><br />
          <input type="password" v-model="getUser.password" /><br />
          <button class="btn btn-success" type="submit">Update</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { USER_QUERY, UPDATE_USER_MUTATION } from "@/graphql";

export default {
  name: "EditUser",
  data() {
    return {
      getUser: {},
      id: this.$route.params.id,
      role: "",
      name: "",
      email: "",
      password: "",
      createdAt: "",
    };
  },
  apollo: {
    // get user by ID
    getUser: {
      query: USER_QUERY,
      variables() {
        return {
          id: this.id,
        };
      },
    },
  },
  // UPDATE USER
  // methods: {
  //   updateUser() {
  //     this.$apollo.mutate({
  //       mutation: UPDATE_USER_MUTATION,
  //       variables: {
  //         role: this.role,
  //         name: this.name,
  //         email: this.email,
  //         password: this.password,
  //         createdAt: this.createdAt,
  //       },
  //     });
  //   },
  // },
};
</script>
