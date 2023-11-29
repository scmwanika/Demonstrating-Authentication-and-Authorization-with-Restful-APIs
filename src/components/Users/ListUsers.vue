<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-9">
          <h2 class="title">Users</h2>

          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in getUsers" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                  <RouterLink :to="{ name: 'EditUser', params: { id: user.id } }">Edit</RouterLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ALL_USERS_QUERY } from "@/graphql";

export default {
  name: "ListUsers",
  data() {
    return {
      getUsers: [],
    };
  },
  apollo: {
    // get all users
    getUsers: {
      query: ALL_USERS_QUERY,
    },
  },
};
</script>
