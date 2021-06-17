<script>
import { mapGetters, mapActions } from "vuex";

export const FormBuilderMixins = {
  computed: {
    ...mapGetters([
      "formElements",
      "hoverActiveInput",
      "activeInputElement",
      "hoverActiveRow",
      "activeRowElement",
      "hoverActiveCol",
      "activeColElement",
      "elementToEdit",
      "elementToRemove",
    ]),
  },
  methods: {
    ...mapActions([
      "addRowElement",
      "addInputElement",
      "removeElement",
      "setHoverActiveInput",
      "setActiveInputElement",
      "setHoverActiveRow",
      "setActiveRowElement",
      "setHoverActiveCol",
      "setActiveColElement",
      "setElementToEdit",
      "setElementToRemove",
    ]),
    sanitizedDefaults(propsObj = {}) {
      let filteredObj = {};

      for (const prop in propsObj) {
        const propDefault = propsObj[prop].default;
        const isNumber = !isNaN(parseInt(propDefault));

        let sanitizedProp = (() => {
          switch (true) {
            case propDefault === "undefined":
              return undefined;
            case propDefault === "null":
              return null;
            case isNumber:
              return parseInt(propDefault);
            case propDefault.includes("'"):
              return propDefault.slice(1, -1);
            case propDefault === "true":
            case propDefault === "false":
            case propDefault.includes("["):
              return JSON.parse(propDefault);
            case propDefault.includes("{"):
              const stringified = JSON.stringify(propDefault);
              return JSON.parse(stringified);
            default:
              return propDefault;
          }
        })();

        filteredObj[prop] = sanitizedProp;
      }

      return filteredObj;
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

.form-builder-col {
  height: calc(100vh - 68px);
  overflow: auto;
}

.form-builder-col .v-expansion-panel-header {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
</style>