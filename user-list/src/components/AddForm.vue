<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          absolute
          fab
          right
      >
        <v-icon>mdi-plus</v-icon>
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
                    v-model="zipcode"
                    label="Zipcode"
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
  </v-dialog>
</template>

<script>
import {bus} from "@/plugins/bus";

export default {
  name: "AddForm",
  data: () => ({
    valid: true,
    dialog: false,
    id: null,
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
    zipcode: '',
    timeout: 2000,
    adding: false
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
          zipcode: this.zipcode
        }
      }
      if (this.adding) {
        user.id = this.id
        this.$store.commit('editUser', user)
      }
      else
        this.$store.commit('addUser', user)
      this.reset();
      this.dialog = false;
      this.adding = false;
    },

    close() {
      this.dialog = false;
      this.reset();
      this.adding = false;
    },

    editUser(user) {
      this.dialog = true;
      this.id = user.id
      this.username = user.username;
      this.email = user.email;
      this.city = user.address.city;
      this.street = user.address.street;
      this.zipcode = user.address.zipcode;

      this.adding = true;
    }
  },

  mounted() {
    bus.$on('editUser', this.editUser)
  },

  beforeDestroy() {
    bus.$off('editUser', this.editUser)
  }
}
</script>
<style scoped>

</style>