<template>
  <v-data-table
    :headers="headers"
    :items="items"
  >
    <template #item.uploadedAt="{item}">
      <td class="pl-0">
        {{ item.uploadedAt | moment("YYYY/MM/DD") }}
      </td>
      <!-- sd -->
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '#', value: 'sequence' },
        { text: 'File name', value: 'fileName' },
        { text: 'File type', value: 'fileType' },
        { text: 'Patient', value: 'patient' },
        { text: 'Project', value: 'project' },
        { text: 'Uploaded at', value: 'uploadedAt' },
        { text: 'Status', value: 'status' },
      ],
      items: [
        {
          sequence: 1,
          fileName: 'Audio1',
          fileType: 'mp3',
          status: 'Incomplete',
          uploadedAt: Date.now(),
          project: 'Project 1',
          patient: 'Patient 1',
        },
        {
          sequence: 2,
          fileName: 'Checklist',
          fileType: 'text',
          status: 'Completed',
          project: 'Project 2',
          patient: 'Patient 2',
          uploadedAt: Date.now(),
        },
      ],
    };
  },
};
</script>

<style>

</style>
