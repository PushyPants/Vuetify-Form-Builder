<template>
  <div class="layout-element-container">
    <div
      class="horizontal-layout-container element-border"
      @click="addHorizontal()"
    >
      <div class="horizontal-element-inner inner-element-border">
        <!-- <v-icon large>mdi-plus-circle-outline</v-icon> -->
        <h2>Horizontal Container</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    horizontalSchema: {
      type: "HorizontalLayout",
      elements: [],
      options: {},
    },
  }),
  methods: {
    addHorizontal() {
      this.$emit("add-layout-obj", this.horizontalSchema);
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
