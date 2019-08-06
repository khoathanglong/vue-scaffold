<template>
  <v-toolbar
    flat
  >
    <v-autocomplete
      label="Search your projects"
      :items="projects"
      rounded
      class="pt-4 mt-4"
      prepend-inner-icon="mdi-magnify"
    />
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      projects: ['Project 1', 'Project 2'],
    };
  },
};
</script>

<style>

</style>
