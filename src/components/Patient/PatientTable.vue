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
    </template>


    <template #item.uploadButton="{item}">
      <td class="pl-0">
        <v-btn
          color="primary lighten-2"
          class="white--text ml-0"
          fab
          x-small
        >
          <v-icon dark>
            mdi-cloud-upload-outline
          </v-icon>
        </v-btn>
      </td>
    </template>


    <template #expanded-item="{item}">
      <td
        :colspan="12"
        class="py-4"
      >
        <v-list
          shaped
          two-line
          subheader
        >
          <v-subheader>
            Current files
          </v-subheader>

          <v-list-item-group color="primary">
            <v-list-item
              v-for="(file, i) in patientFiles"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon>mdi-music-circle-outline</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>
                  {{ file.fileName }}
                </v-list-item-title>

                <v-list-item-subtitle>
                  {{ file.uploadedAt | moment("YYYY/MM/DD") }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <!-- <v-list-item-content>
                {{ file.fileType }}
              </v-list-item-content> -->
              <!--
              <v-list-item-content>
                {{ file.uploadedAt | moment("YYYY/MM/DD") }}
              </v-list-item-content> -->

              <!-- <v-list-item-content>
                {{ file.status }}
              </v-list-item-content> -->
              <v-list-item-action>
                <v-icon color="success">
                  mdi-check-circle
                </v-icon>
              </v-list-item-action>
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
        { text: 'Updated at', value: 'updatedAt' },
        { text: 'Upload', value: 'uploadButton', sortable: false },
      ],
      items: [
        {
          sequence: 1,
          patientName: 'Patient 1',
          updatedAt: Date.now(),
        },
        {
          sequence: 2,
          patientName: 'Patient 2',
          updatedAt: Date.now(),
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
