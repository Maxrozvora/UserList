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
        <list></list>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import AddForm from "@/components/AddForm";
import List from "@/components/List";
export default {
  name: 'App',

  components: {
    List,
    AddForm
  },

  data: () => ({
    //
  }),
};
</script>
