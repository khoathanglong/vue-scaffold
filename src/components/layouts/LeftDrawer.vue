<template>
  <v-navigation-drawer
    :value="drawer"
    app
    clipped
    left
  >
    <v-list dense>
      Left
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style>

</style>
