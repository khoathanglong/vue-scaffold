<template>
  <v-list rounded>
    <v-list-item-group v-model="selectedProject">
      <v-list-item
        v-for="(project, i) in projects"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon
            color="info"
          >
            mdi-folder-text-outline
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ project }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      selectedProject: '',
      projects: [
        'Project 1',
        'Project 2',
      ],
    };
  },
};
</script>

<style>

</style>
