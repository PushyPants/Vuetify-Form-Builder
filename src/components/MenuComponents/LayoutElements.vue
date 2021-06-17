<template>
  <div class="layout-element-container">
    <v-btn
      v-for="(element, idx) in layoutElements"
      :key="idx"
      class="mb-2"
      x-large
      @click="addElement(element)"
    >
      <v-icon class="mr-2">{{ element.icon }}</v-icon> {{ element.displayName }}
    </v-btn>
  </div>
</template>

<script>
import { v4 } from "uuid";
import layoutElements from "../../data/vuetifyAPI/layoutElements";

export default {
  data: () => ({
    layoutElements,
  }),
  methods: {
    addElement(element) {
      const elm = { ...element };
      elm.id = v4();
      elm.elements = [];
      elm.type = "layout";

      this.$emit("add-layout-obj", elm);
    },
  },
};
</script>

<style>
.element-border {
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}

.inner-element-border {
  border: 3px dotted rgba(0, 0, 0, 0.3);
  border-radius: 6px;
}

.layout-element-container {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  min-height: 250px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  margin: 12px 0;
}

.horizontal-layout-container {
  width: calc(100% - 8px);
  height: 75px;
  margin: 4px;
  cursor: pointer;
}

.horizontal-element-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  margin: 4px;
}
</style>
