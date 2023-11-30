<template>
  <div class="content">
    <legend>USERS</legend>
    <table class="table is-striped is-narrow is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th>Role</th>
          <th>Name</th>
          <th>Email</th>
          <th>CreatedAt</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in getUsers" :key="user.id">
          <td>{{ user.role }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.createdAt }}</td>
          <td style="font-weight: bold">
            <RouterLink :to="{ name: 'EditUser', params: { id: user.id } }"
              >Edit</RouterLink
            >
            |
            <a href="" style="color: red" @click="deleteUser(user.id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ALL_USERS_QUERY, DELETE_USER_MUTATION } from "@/graphql";

export default {
  name: "ListUsers",
  data() {
    return {
      getUsers: [],
    };
  },
  apollo: {
    // GET ALL USERS
    getUsers: {
      query: ALL_USERS_QUERY,
    },
  },
  // DELETE USER
  // methods: {
  //   deleteUser() {
  //     this.$apollo.mutate({
  //       mutation: DELETE_USER_MUTATION,
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
