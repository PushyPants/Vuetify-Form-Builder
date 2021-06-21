<template>
  <!-- this is a v-row for us to wrap our dynamic row component in & style -->
  <v-row
    no-gutters
    @mouseover="setHoverActive(element.id)"
    @mouseleave="setHoverActiveRow('')"
    @click="setActiveRowElement(element.id)"
  >
    <!-- This is the left col that will hold our dynamic row and content -->
    <v-col
      class="canvas-row-col"
      :class="{ 'show-row-overlay-border': active }"
    >
      <v-icon class="mt-n9 drag-handle start-hidden" :class="{ unhide: active }"
        >mdi-drag-horizontal</v-icon
      >

      <!-- *** THIS IS THE ROW THAT WILL BE THE 'ROW DESIGNER' -->
      <v-row no-gutters class="mt-n6" :class="'canvas-row'">
        <!-- this slot is where we pass the row contents through -->
        <slot></slot>
        <v-col
          v-for="(col, idx) in cols"
          :key="idx"
          class="canvas-builder-col-element"
        ></v-col>
      </v-row>
    </v-col>

    <!-- This is the right column with edit/delete buttons -->
    <v-col
      cols="auto"
      class="row-editor-buttons-col"
      :class="{ 'full-opacity': active }"
    >
      <v-btn icon x-small class="mb-1" @click="addElement(element.id)"
        ><v-icon>mdi-plus</v-icon></v-btn
      >
      <v-btn icon x-small class="mb-1" @click="removeElement(element.id)"
        ><v-icon>mdi-minus</v-icon></v-btn
      >
      <v-btn icon x-small class="mb-1" @click="setElementToEdit(element.id)"
        ><v-icon>mdi-pencil</v-icon></v-btn
      >
      <v-btn icon x-small @click="removeElement(element.id)"
        ><v-icon>mdi-delete</v-icon></v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
import { FormBuilderMixins } from "../../mixins/FormBuilderMixins";

export default {
  mixins: [FormBuilderMixins],
  props: {
    element: {
      type: Object,
      default: () => {},
    },
  },
  data: () => ({
    cols: 1,
  }),
  computed: {
    active() {
      const hover = this.element?.id === this.hoverActiveRow;
      const active = this.element?.id === this.activeRowElement;

      return hover || (!hover && active);
    },
  },
  methods: {
    setHoverActive() {
      if (!this.hoverActiveRow) {
        this.setHoverActiveRow(this.element?.id);
      }
    },
  },
};
</script>

<style>
.form-builder-elements-controller {
  position: absolute;
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  border-radius: 6px;
  cursor: pointer;
}

.full-opacity {
  opacity: 1 !important;
}

.form-element-drag-handle-col {
  border: 12px solid rgba(0, 0, 0, 0.1);
  border-right: 0px;
  border-radius: 6px 0 0 6px;
  text-align: center;
}

.drag-handle {
  cursor: move;
}

.form-element-editor-buttons-col {
  width: 65px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  border-radius: 0 6px 6px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
}

.start-hidden {
  visibility: hidden;
}

.unhide {
  visibility: visible !important;
}

.canvas-row-col {
  border: 12px solid transparent;
  border-right: 0px;
  border-radius: 6px 0 0 6px;
  text-align: center;
}

.row-editor-buttons-col {
  width: 45px;
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

.show-row-overlay-border {
  border: 12px solid rgba(0, 0, 0, 0.1) !important;
  border-right: 0px !important;
}

.canvas-row {
  width: 100% !important;
  min-height: 100px;
  border: 1px dotted rgba(0, 0, 0, 1);
}

.canvas-builder-col-element {
  width: 100%;
  min-height: 50px;
  border: 1px dotted blue;
}
</style>