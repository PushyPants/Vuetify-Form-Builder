<template>
  <div class="form-elements-container">
    <div
      v-for="(element, idx) in vElements"
      :key="idx"
      class="element-picker-container"
      draggable="true"
    >
      <div
        class="element-picker-overlay"
        @click="addElement(element, 'input')"
      />
      <div :is="element.vuetifyComponent" :label="element.displayName" />
    </div>
    <v-divider class="pa-0 ma-0"></v-divider>
  </div>
</template>

<script>
import vElements from "../../data/vuetifyAPI/formElements";
import { FormBuilderMixins } from "../../mixins/FormBuilderMixins";

export default {
  mixins: [FormBuilderMixins],
  data: () => ({
    vElements,
  }),
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