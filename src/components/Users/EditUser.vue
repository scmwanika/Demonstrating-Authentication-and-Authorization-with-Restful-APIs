<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3"></div>
        <div class="column is-9">
          <h2 class="title">Edit User</h2>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Name</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input is-static" v-model="getuser.name" />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Email</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input is-static" v-model="getuser.email" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { USER_QUERY } from "@/graphql";

export default {
  name: "EditUser",
  data() {
    return {
      getuser: {},
      id: this.$route.params.id,
    };
  },
  apollo: {
    // get user by ID
    getuser: {
      query: USER_QUERY,
      variables() {
        return {
          id: this.id,
        };
      },
    },
  },
};
</script>
