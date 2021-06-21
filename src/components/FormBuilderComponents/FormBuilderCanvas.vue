<template>
  <v-row no-gutters class="form-builder-elements-container">
    <v-col>
      <v-form>
        <div
          class="form-builder-element-wrapper"
          v-for="(element, idx) in formElements"
          :key="idx"
        >
          <form-builder-row-element
            v-if="element.type === 'row'"
            :element="element"
          >
          </form-builder-row-element>
          <form-builder-input-element v-else :element="element" />
        </div>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import { FormBuilderMixins } from "../../mixins/FormBuilderMixins";
import FormBuilderRowElement from "./FormBuilderRowElement";
import FormBuilderInputElement from "./FormBuilderInputElement";

export default {
  mixins: [FormBuilderMixins],
  components: {
    FormBuilderInputElement,
    FormBuilderRowElement,
  },
};
</script>

<style>
.form-builder-elements-container form {
  width: 100% !important;
}

.form-builder-element-wrapper {
  position: relative;
  padding: 6px;
  margin-bottom: 6px;
}
</style>