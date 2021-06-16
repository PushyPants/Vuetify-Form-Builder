<template>
  <div class="form-elements-container">
    <div
      v-for="(element, idx) in vElements"
      :key="idx"
      class="element-picker-container"
    >
      <div class="element-picker-overlay" @click="addElement(element)" />
      <div :is="element.vuetifyComponent" :label="element.displayName" />
    </div>
    <v-divider class="pa-0 ma-0"></v-divider>
  </div>
</template>

<script>
import { v4 } from "uuid";
import vElements from "../../data/vuetifyAPI/formElements";

export default {
  data: () => ({
    vElements,
  }),
  methods: {
    addElement(element) {
      const elm = { ...element };
      elm.id = v4();
      console.log(elm);
      this.$emit("add-element", elm);
    },
  },
};
</script>

<style>
.form-elements-container {
  min-height: 450px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  margin: 12px 0;
  padding: 12px;
}

.element-picker-container {
  position: relative;
  padding: 6px;
}

.element-picker-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  border-radius: 6px;
  cursor: pointer;
}

.element-picker-overlay:hover {
  box-sizing: content-box;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
}
</style>