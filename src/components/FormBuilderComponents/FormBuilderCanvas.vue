<template>
  <div class="form-builder-elements-container">
    <div
      class="form-builder-element-wrapper"
      v-for="(element, idx) in formElements"
      :key="idx"
    >
      <element-editor-overlay
        :element="element"
        :hoverActiveElement="hoverActive"
        :activeElement="activeElement"
        @hover-active="setHoverActive"
        @hover-inactive="setHoverInactive"
        @active-element="setActiveElement"
      />
      <div
        :is="element.vuetifyComponent"
        :label="element.displayName"
        v-bind="element.userDefinedProps"
      ></div>
    </div>
  </div>
</template>

<script>
import { FormBuilderMixins } from "../../mixins/FormBuilderMixins";
import ElementEditorOverlay from "./ElementEditorOverlay";

export default {
  props: ["formElements"],
  mixins: [FormBuilderMixins],
  components: {
    ElementEditorOverlay,
  },
  data: () => ({
    items: [],
    hoverActive: "",
    activeElement: "",
  }),
  methods: {
    setHoverActive(id) {
      console.log("emit received");
      this.hoverActive = id;
    },
    setHoverInactive() {
      console.log("emit received");
      this.hoverActive = "";
    },
    setActiveElement(id) {
      console.log("emit received");
      this.activeElement = id;
    },
  },
};
</script>

<style>
.form-builder-element-wrapper {
  position: relative;
  padding: 6px;
  margin-bottom: 6px;
}
</style>