<template>
  <div>
    <!-- This row is the container for the control overlay elements -->
    <v-row
      no-gutters
      justify="end"
      class="form-builder-elements-controller"
      :class="{ 'full-opacity': active }"
      @mouseover="setHoverActive()"
      @mouseleave="setHoverActiveInput(element.id)"
      @click="setActiveInputElement(element.id)"
    >
      <!-- this col overlays the main body of the element and holds the drag handle -->
      <v-col class="form-element-drag-handle-col">
        <v-icon class="mt-n8 drag-handle">mdi-drag-horizontal</v-icon>
      </v-col>

      <!-- this col holds the controls edit/delete -->
      <v-col cols="auto" class="form-element-editor-buttons-col">
        <v-btn fab x-small class="mb-1"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn fab x-small @click="removeElement(element.id)"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
      </v-col>
    </v-row>

    <!-- *** THIS IS THE DYNAMIC COMPONENT THAT POPULATES THE VUETIFY ELEMENT *** -->
    <div
      :is="element.vuetifyComponent"
      :label="element.displayName"
      v-bind="element.userDefinedProps"
      class="canvas-input"
    ></div>
  </div>
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
  computed: {
    active() {
      const hover = this.element?.id === this.hoverActiveInput;
      const active = this.element?.id === this.activeInputElement;

      return hover || (!hover && active);
    },
  },
  methods: {
    setHoverActive() {
      if (!this.hoverActive) {
        console.log(`hover in`);
        this.setHoverActiveInput(this.element?.id);
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
</style>e main body of the element and holds the drag handle -->
      <v-col class="form-element-drag-handle-col">
        <v-icon class="mt-n8 drag-handle">mdi-drag-horizontal</v-icon>
      </v-col>

      <!-- this col holds the controls edit/delete -->
      <v-col cols="auto" class="form-element-editor-buttons-col">
        <v-btn fab x-small class="mb-1"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn fab x-small @click="removeElement(element.id)"
          ><v-icon>mdi-delete</v-icon></v-btn
        >
      </v-col>
    </v-row>

    <!-- *** THIS IS THE DYNAMIC COMPONENT THAT POPULATES THE VUETIFY ELEMENT *** -->
    <div
      :is="element.vuetifyComponent"
      :label="element.displayName"
      v-bind="element.userDefinedProps"
      class="canvas-input"
    ></div>
  </div>
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
  computed: {
    active() {
      const hover = this.element?.id === this.hoverActiveInput;
      const active = this.element?.id === this.activeInputElement;

      return hover || (!hover && active);
    },
  },
  methods: {
    setHoverActive() {
      if (!this.hoverActive) {
        console.log(`hover in`);
        this.setHoverActiveInput(this.element?.id);
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
</style>