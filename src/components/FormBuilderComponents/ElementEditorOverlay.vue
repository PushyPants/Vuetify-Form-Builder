<template>
  <v-row
    no-gutters
    justify="end"
    class="form-builder-elements-controller"
    :class="{ 'full-opacity': active }"
    @mouseover="setHoverActive(element.id)"
    @mouseleave="setHoverInactive(element.id)"
    @click="setActiveElement(element.id)"
  >
    <v-col class="form-element-drag-handle-col">
      <v-icon class="mt-n8">mdi-drag-horizontal</v-icon>
    </v-col>
    <v-col cols="auto" class="form-element-editor-buttons-col">
      <v-btn fab x-small class="mb-1"><v-icon>mdi-pencil</v-icon></v-btn>
      <v-btn fab x-small><v-icon>mdi-delete</v-icon></v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    element: {
      type: Object,
      default: () => {},
    },
    hoverActiveElement: {
      type: String,
      default: "",
    },
    activeElement: {
      type: String,
      default: "",
    },
  },
  computed: {
    active() {
      const hover = this.element?.id === this.hoverActiveElement;
      const active = this.element?.id === this.activeElement;

      return hover || (!hover && active);
    },
  },
  methods: {
    setHoverActive(id) {
      if (!this.hoverActive) {
        console.log(`sending emit`, id);
        this.$emit("hover-active", id);
      }
    },
    setHoverInactive(id) {
      console.log(`sending emit`, id);
      this.$emit("hover-inactive", id);
    },
    setActiveElement(id) {
      console.log(`sending emit`, id);
      this.$emit("active-element", id);
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