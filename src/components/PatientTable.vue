<template>
  <v-data-table
    :headers="headers"
    :items="items"
    single-expand
    show-expand
    :expanded.sync="expanded"
    item-key="sequence"
  >
    <template #item.updatedAt="{item}">
      <td class="pl-0">
        {{ item.updatedAt | moment("YYYY/MM/DD") }}
      </td>
      <!-- sd -->
    </template>

    <template #expanded-item="{item}">
      <td
        :colspan="12"
        class="py-4"
      >
        <v-list rounded>
          <v-list-item>
            <v-list-item-content>
              <v-file-input
                label="Click to upload"
                chips
                show-size
                multiple
              />
            </v-list-item-content>
          </v-list-item>

          <v-subheader>
            Current files
          </v-subheader>
          <v-list-item-group>
            <v-list-item
              v-for="(file, i) in patientFiles"
              :key="i"
            >
              <v-list-item-content>
                {{ file.fileName }}
              </v-list-item-content>

              <v-list-item-content>
                {{ file.fileType }}
              </v-list-item-content>

              <v-list-item-content>
                {{ file.uploadedAt | moment("YYYY/MM/DD") }}
              </v-list-item-content>

              <v-list-item-content>
                {{ file.status }}
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </td>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      expanded: [],
      headers: [
        { text: '#', value: 'sequence' },
        { text: 'Patient name', value: 'patientName' },
        { text: 'Project', value: 'project' },
        { text: 'Updated at', value: 'updatedAt' },
      ],
      items: [
        {
          sequence: 1,
          patientName: 'Patient 1',
          updatedAt: Date.now(),
          project: 'Project 1',
        },
        {
          sequence: 2,
          patientName: 'Patient 2',
          updatedAt: Date.now(),
          project: 'Project 2',
        },
      ],
      patientFiles: [
        {
          sequence: 1,
          fileName: 'Audio1',
          fileType: 'mp3',
          status: 'Incomplete',
          uploadedAt: Date.now(),
        },
        {
          sequence: 2,
          fileName: 'Checklist',
          fileType: 'text',
          status: 'Completed',
          uploadedAt: Date.now(),
        },
      ],
    };
  },
};
</script>

<style>

</style>
