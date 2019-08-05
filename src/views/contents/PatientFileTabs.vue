<template>
  <div>
    <v-card>
      <v-toolbar
        flat
      >
        <!-- <v-app-bar-nav-icon /> -->


        <v-toolbar-title>Project 1 - Patients</v-toolbar-title>

        <v-spacer />

        <v-text-field
          class="mt-4"
          prepend-inner-icon="mdi-magnify"
          label="Search your patients"
        />

      <!-- <template #extension>
        <v-tabs
          v-model="tab"
          grow
          centered
        >
          <v-tabs-slider />
          <v-tab
            active-class
            class="ml-0"
          >
            <v-icon class="pr-2">
              mdi-account-box-multiple
            </v-icon>
            Patients
          </v-tab>

          <v-tab>
            <v-icon class="pr-2">
              mdi-file-multiple
            </v-icon>
            Files
          </v-tab>
        </v-tabs>
      </template> -->
      </v-toolbar>
    </v-card>

    <v-card class="mt-4">
      <v-tabs
        v-model="tab"
        grow
        centered
      >
        <v-tabs-slider />
        <v-tab
          active-class
          class="ml-0"
        >
          <v-icon class="pr-2">
            mdi-account-box-multiple
          </v-icon>
          Patients
        </v-tab>

        <v-tab>
          <v-icon class="pr-2">
            mdi-file-multiple
          </v-icon>
          Files
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item :value="0">
          <v-card
            flat
            class="mt-4 pa-2"
          >
            <PatientTable />
          </v-card>
        </v-tab-item>
        <v-tab-item
          :value="1"
        >
          <v-card
            flat
            class="mt-4 pa-2"
          >
            <FileTable />
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import FileTable from '@/components/FileTable.vue';
import PatientTable from '@/components/PatientTable.vue';

export default {
  components: { FileTable, PatientTable },
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style>

</style>
