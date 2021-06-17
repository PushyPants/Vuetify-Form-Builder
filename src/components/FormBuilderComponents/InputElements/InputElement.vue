<template>
  <div>
    <input-editor-overlay :element="element" />
    <div
      :is="element.vuetifyComponent"
      :label="element.displayName"
      v-bind="element.userDefinedProps"
      :class="'canvas-input'"
    ></div>
  </div>
</template>

<script>
import { FormBuilderMixins } from "../../../mixins/FormBuilderMixins";
import InputEditorOverlay from "./InputEditorOverlay";

export default {
  mixins: [FormBuilderMixins],
  props: {
    element: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    InputEditorOverlay,
  },
};
</script>