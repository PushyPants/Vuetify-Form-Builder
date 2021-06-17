<template>
  <v-row no-gutters class="form-builder-elements-container">
    <v-form>
      <div
        class="form-builder-element-wrapper"
        v-for="(element, idx) in formElements"
        :key="idx"
      >
        <row-element v-if="element.type === 'layout'" :element="element" />
        <input-element v-else :element="element" />
      </div>
    </v-form>
  </v-row>
</template>

<script>
import { FormBuilderMixins } from "../../mixins/FormBuilderMixins";
import RowElement from "../FormBuilderComponents/LayoutElements/RowElement/RowElement";
import InputElement from "./InputElements/InputElement";

export default {
  mixins: [FormBuilderMixins],
  components: {
    InputElement,
    RowElement,
  },
  data: () => ({}),
  methods: {
    setHoverActive(type, id) {
      const properCaseType = this.properCase(type);
      this[`hoverActive${properCaseType}`] = id;
      console.log(`setting hoverActive${properCaseType} to: `, id);
    },
    setHoverInactive(type) {
      const properCaseType = this.properCase(type);
      this[`hoverActive${properCaseType}`] = "";
      console.log(`setting hoverActive${properCaseType} to: `, "");
    },
    setActiveElement(type, id) {
      const properCaseType = this.properCase(type);
      this[`active${properCaseType}Element`] = id;
      console.log(`setting active${properCaseType}Element to: `, id);
    },
    properCase(word) {
      return word.toLowerCase().charAt(0).toUpperCase() + word.slice(1);
    },
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