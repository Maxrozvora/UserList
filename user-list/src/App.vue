<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <span class="display-1 font-weight-bold">
          User List
        </span>
      </div>

    </v-app-bar>
    <v-main>
      <v-container>
        <add-form></add-form>
        <search-input></search-input>
        <list></list>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AddForm from "@/components/AddForm";
import List from "@/components/List";
import SearchInput from "@/components/SearchInput";
export default {
  name: 'App',

  components: {
    SearchInput,
    List,
    AddForm
  },

  provide() {
    return {
      toggleDialog: () => {
        // this.dialog = !this.dialog
      }
    }
  },

  data: () => ({
    dialog: false,
    editedUser: null
  }),

  methods: {

  },

  mounted() {
    this.$store.dispatch('getUsers')
  }
};
</script>
