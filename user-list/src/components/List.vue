<template>
  <div>
    <v-list three-line subheader>
      <h1 class="h1">User List</h1>
      <v-divider></v-divider>

      <v-list-item
          v-for="(item, index) in getList"
          :key="index"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item.username" class="font-weight-bold"></v-list-item-title>
          <v-list-item-subtitle><span class="font-weight-bold">Email:</span> {{item.email}}</v-list-item-subtitle>
          <v-list-item-subtitle><span class="font-weight-bold">Address:</span> {{item.address.city}} {{item.address.street}} {{item.address.zipcode}} </v-list-item-subtitle>
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
      <div class="font-weight-light grey--text mb-3 text--darken-3 title mt-3 text-center" v-if="!getList.length">Users not found</div>

      <v-divider inset></v-divider>
    </v-list>
  </div>
</template>

<script>
import {bus} from "@/plugins/bus";

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
      bus.$emit('editUser', user)
    },

  }
}
</script>

<style scoped>

</style>