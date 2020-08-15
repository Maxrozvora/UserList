<template>
  <div>
    <v-list three-line subheader>
      <v-subheader inset>User List</v-subheader>

      <v-list-item
          v-for="(item, index) in getList"
          :key="index"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.username"></v-list-item-title>
          <v-list-item-subtitle>Email: {{item.email}}</v-list-item-subtitle>
          <v-list-item-subtitle>Address: {{item.address.city}} {{item.address.street}} {{item.address.block}} </v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="green lighten-1" @click="editUser(item)">mdi-pencil-circle</v-icon>
          </v-btn>
          <v-btn icon @click="deleteUser(item)">
            <v-icon color="red lighten-1">mdi-delete-circle</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>

      <v-divider inset></v-divider>
    </v-list>
  </div>
</template>

<script>
export default {
name: "List",
  data: () => ({}),
  computed: {
    getList() {
      return this.$store.getters['getUserList']
    }
  },

  methods: {
    deleteUser(user) {
      if (confirm('Are you sure for delete user?'))
        this.$store.commit('deleteUser', user)
    },

    editUser(user) {
      this.dialog = true
    },

  }
}
</script>

<style scoped>

</style>