<template>
  <row-editor-overlay :element="element">
    <!-- dynamic columns/elements will go here -->
    <span>row content</span>
  </row-editor-overlay>
</template>

<script>
import { FormBuilderMixins } from "../../../../mixins/FormBuilderMixins";
import RowEditorOverlay from "./RowEditorOverlay";

export default {
  mixins: [FormBuilderMixins],
  props: {
    element: {
      type: Object,
      default: () => {},
    },
  },
  components: {
    RowEditorOverlay,
  },
};
</script>

<style>
.start-hidden {
  visibility: hidden;
}

.unhide {
  visibility: visible !important;
}

.full-opacity {
  opacity: 1 !important;
}

.show-row-overlay-border {
  border: 12px solid rgba(0, 0, 0, 0.1) !important;
}

.canvas-row-col {
  border: 12px solid transparent;
  border-right: 0px;
  border-radius: 6px 0 0 6px;
  text-align: center;
}

.row-editor-buttons-col {
  width: 65px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 0 6px 6px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  opacity: 0;
}

.canvas-row {
  width: 100% !important;
  min-height: 100px;
  border: 1px dotted rgba(0, 0, 0, 1);
}
</style>