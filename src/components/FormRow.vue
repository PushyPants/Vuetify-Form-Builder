<template>
  <v-row
    no-gutters
    class="form-builder-row"
    :justify="justify"
    :align="align"
    :align-content="alignContent"
  >
    <v-col
      v-for="(element, idx) in FormElements"
      :key="`col-${idx}`"
      class="form-row-column"
    >
      <component
        :is="determineFormElement(element.type)"
        :settings="element.settings"
      />
    </v-col>
    <form-row-controls
      @decrease-cols="decreaseCols"
      @increase-cols="increaseCols"
      @delete-row="deleteRow"
    />
  </v-row>
</template>

<script>
import FormRowControls from "./FormElements/FormRowControls";
import ShortText from "./FormElements/ShortText";
import LongText from "./FormElements/LongText";
import NoElementPlaceholder from "./FormElements/NoElementPlaceholder";

export default {
  props: ["settings"],
  components: {
    FormRowControls,
    ShortText,
    LongText,
    Placeholder: NoElementPlaceholder,
  },
  data: () => ({
    defaultSettings: {
      rowSettings: {
        justify: "space-between",
        align: "center",
        alignContent: "center",
      },
      rowElements: [{ type: "shortText" }],
    },
    mutableRowClone: {},
  }),
  beforeMount() {
    this.setMutableRowClone();
  },
  computed: {
    rowSettings() {
      return this?.mutableRowClone?.rowSettings;
    },
    rowElements() {
      return this?.mutableRowClone?.rowElements;
    },
    justify() {
      return this?.rowSettings?.justify || "space-between";
    },
    align() {
      return this?.rowSettings?.align || "center";
    },
    alignContent() {
      return this?.rowSettings?.alignContent || "center";
    },
    cols() {
      return this?.rowSettings?.cols || 1;
    },
    FormElements() {
      return this?.rowElements;
    },
  },
  methods: {
    setMutableRowClone() {
      const notArray = !Array.isArray(this.settings);
      const settingsDataType = typeof this.settings;
      const isObject = settingsDataType === "object";
      // const notEmpty = isObject && !!Object.keys(this.settings).length;

      this.mutableRowClone =
        notArray && isObject ? this.settings : this.defaultSettings;
    },
    determineFormElement(type) {
      type = type?.toLowerCase();

      switch (type) {
        case "shorttext":
          return "ShortText";
        case "longtext":
          return "LongText";
        default:
          return "Placeholder";
      }
    },
    elementSettings(idx) {
      return this.rowElements[idx]?.settings;
    },
    updateRow(rowObj) {
      this.$emit("update-row", rowObj);
    },
    increaseCols() {
      const rowEls = this.mutableRowClone.rowElements;
      if (rowEls.length < 3) {
        this.mutableRowClone.rowElements.push({});
        this.$emit("update-row", this.mutableRowClone);
      }
    },
    decreaseCols() {
      const rowEls = this.mutableRowClone.rowElements;
      if (rowEls.length > 1) {
        this.mutableRowClone.rowElements.pop();
        this.$emit("update-row", this.mutableRowClone);
      }
    },
    deleteRow() {},
  },
  watch: {
    settings(newVal) {
      this.mutableRowClone = { ...this.settings };
    },
  },
};
</script>

<style>
.form-builder-row {
  position: relative;
  padding: 2px;
  min-height: 100px;
  border: 4px solid gray;
}

.form-row-column {
  min-height: 90px;
  border: 1px dotted grey;
}
</style>