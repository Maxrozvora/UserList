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
      <add-form></add-form>
    </v-main>
  </v-app>
</template>

<script>

import AddForm from "@/components/AddForm";
export default {
  name: 'App',

  components: {
    AddForm
  },

  data: () => ({
    //
  }),
};
</script>
