<template>
  <v-row justify="center">

    <v-form
        ref="form"
        v-model="valid"
    >
      <v-text-field
          v-model="username"
          :rules="nameRules"
          label="User name"
          required
      ></v-text-field>

      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          v-model="city"
          label="City"
      ></v-text-field>

      <v-text-field
          v-model="street"
          label="Street"
      ></v-text-field>

      <v-text-field
          v-model="block"
          label="Block"
      ></v-text-field>

      <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="addUser"
      >
        Add user
      </v-btn>


    </v-form>

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

  </v-row>
</template>

<script>
export default {
  name: "AddForm",
  data: () => ({
    valid: true,
    username: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
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
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
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
      console.log('user', user)
      this.$store.commit('addUser', user)
      this.reset();
      this.snackbar = true;
    }
  },
}
</script>
<style scoped>

</style>