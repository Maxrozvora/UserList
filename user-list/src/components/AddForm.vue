<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
      >
        Add User
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-form
              ref="form"
              v-model="valid"
          >
            <v-row>
              <v-col cols="12">
                <v-text-field
                    v-model="username"
                    :rules="nameRules"
                    label="User name"
                    required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="city"
                    label="City"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="street"
                    label="Street"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="4">
                <v-text-field
                    v-model="block"
                    label="Block"
                ></v-text-field>
              </v-col>

            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
        <v-btn color="blue darken-1" text @click="addUser" :disabled="!valid">Save</v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
    >
      User was added
      <template v-slot:action="{ attrs }">
        <v-btn
            color="blue"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-dialog>
</template>

<script>
export default {
  name: "AddForm",
  data: () => ({
    valid: true,
    dialog: false,
    username: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length > 3) || 'Name must be more than 3 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    city: '',
    street: '',
    block: '',
    snackbar: false,
    timeout: 2000,
  }),

  methods: {
    reset () {
      this.$refs.form.reset()
    },

    addUser() {
      const user = {
        id: new Date().valueOf(),
        username: this.username,
        email: this.email,
        address: {
          street: this.street,
          city: this.city,
          block: this.block
        }
      }
      this.$store.commit('addUser', user)
      this.reset();
      this.snackbar = true;
      this.dialog = false;
    },

    close() {
      this.dialog = false;
      this.reset();
    }
  },
}
</script>
<style scoped>

</style>