<template>
  <div class="file-filter">
    <div>
      <v-chip
        v-if="fileType"
        close
      >
        <strong>
          {{ fileType }}
        </strong>
      </v-chip>

      <v-chip
        v-if="fileStatus"
        close
      >
        <strong> {{ fileStatus }}</strong>
      </v-chip>
    </div>
    <v-autocomplete
      v-model="filterSelections"
      class="mt-4"
      prepend-inner-icon="mdi-magnify"
      label="Search your patients"
      :items="items"
      clearable
      chips
    >
      <!-- display selections as chips  -->
      <template #selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          close
          @click:close="remove(item)"
        >
          <strong>{{ item }}</strong>&nbsp;
        </v-chip>
      </template>

      <!-- add filter button -->
      <template #append-outer>
        <v-menu
          v-model="menu"
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ on: menu }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on: tooltip }">
                <v-btn
                  color="primary lighten-2"
                  v-on="{ ...tooltip, ...menu }"
                  class="white--text ml-0"
                  fab
                  x-small
                >
                  <v-icon dark>
                    mdi-filter
                  </v-icon>
                </v-btn>
              </template>
              <span>Click to add more filters</span>
            </v-tooltip>
          </template>
          <v-card>
            <v-list>
              <v-list-item>
                <v-select
                  label="Select file status"
                  v-model="fileStatus"
                  :items="fileStatusList"
                />
              </v-list-item>
              <v-list-item>
                <v-select
                  label="Select file type"
                  v-model="fileType"
                  :items="fileTypeList"
                />
              </v-list-item>
            </v-list>

            <v-card-actions>
              <v-spacer />

              <v-btn
                text
                @click="menu = false"
              >
                Cancel
              </v-btn>

              <v-btn
                color="primary"
                text
                @click="menu = false"
              >
                Search
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ['Audio 10', 'Audio 22', 'Audio 1', 'Audio 2', 'Audio 1', 'Audio 2', 'Audio 1', 'Audio 2', 'Audio 17', 'Audio 25', 'Audio 12', 'Audio 28', 'Audio 13', 'Audio 23', 'Audio 1q', 'Audio 2w'],
      fileStatus: '',
      fileStatusList: ['complete', 'incomplete'],
      fileType: '',
      fileTypeList: ['mp3', 'text'],
      menu: false,
      filterSelections: 'xxxAudio 10',
    };
  },
  watch: {
    fileType(val) {
      if (val) this.filterSelections.push(val);
    },
    fileStatus(val) {
      if (val) this.filterSelections.push(val);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list {
  padding: 0 !important;
}

</style>
