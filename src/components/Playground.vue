<template>
  <div>
    <v-app-bar>
      <v-icon>mdi-vuetify</v-icon>
      <v-toolbar-title>Welcome to the Playground</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        fab
        small
        color="primary"
        @click="displayPreview = !displayPreview"
      >
        <v-icon>mdi-file-find</v-icon>
      </v-btn>
      <!-- test button(s) -->
    </v-app-bar>
    <v-card class="test-card">
      <!-- put code here -->
      <v-row no-gutters>
        <v-col md="3">
          <v-card class="form-builder-col">
            <v-card-title> Form Components </v-card-title>
            <v-divider></v-divider>
            <v-card-text class="pa-0">
              <v-expansion-panels
                v-model="expansion"
                style="width: 99.5%"
                flat
                title
                accordion
                multiple
              >
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>Layout Elements</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <layout-elements @add-layout-obj="addRowElement" />
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3>Form Elements</h3>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <input-elements @add-input-element="addInputElement" />
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col md="9">
          <v-card class="form-builder-col">
            <v-card-title> Form Builder </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <form-builder-canvas />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>

    <v-dialog v-model="displayPreview" width="75%">
      <preview
        v-if="displayPreview"
        :jsonSchema="jsonSchema"
        :uiSchema="uiSchema"
      />
    </v-dialog>
  </div>
</template>

<script>
import Preview from "./PreviewComponents/Preview";
import LayoutElements from "./MenuComponents/LayoutElements";
import InputElements from "./MenuComponents/InputElements";
import FormBuilderCanvas from "./FormBuilderComponents/FormBuilderCanvas";
import { FormBuilderMixins } from "../mixins/FormBuilderMixins";

export default {
  mixins: [FormBuilderMixins],
  components: {
    Preview,
    LayoutElements,
    InputElements,
    FormBuilderCanvas,
  },
  data: () => ({
    displayPreview: false,
    expansion: [0, 1],
  }),
  watch: {
    formElements() {
      console.log(this.formElements);
    },
    elementToRemove(v) {
      this.removeElement(v);
    },
  },
};
</script>

<style scoped>
.test-card {
  min-height: calc(100vh - 68px);
}

.border {
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.form-builder-col {
  height: calc(100vh - 68px);
  overflow: auto;
}

.form-builder-col .v-expansion-panel-header {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>
