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
  props: {
    projects: {
      type: Object,
      default: () => ({
        value: 'project 1',
        text: 'id 1',
      }),
    },
  },
};
</script>

<style>

</style>
