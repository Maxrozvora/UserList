<template>
  <v-text-field
      class="mt-4"
      v-model="value"
      label="Search user by name"
      required
      @input="search"
  ></v-text-field>
</template>

<script>
export default {
name: "SearchInput",
  data: () => ({
    value: ''
  }),
  methods: {
    search() {
        this.$store.commit('setSearchValue', this.value)
    }
  }
}
</script>

<style scoped>

</style>