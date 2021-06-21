<script>
import { v4 } from "uuid";
import { mapGetters, mapActions } from "vuex";
import layoutElements from "../data/vuetifyAPI/layoutElements";
const lodash_get = require("lodash/get");
const lodash_find = require("lodash/find");

export const FormBuilderMixins = {
  data: () => ({
    layoutElements,
  }),
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
    activeLayoutElement() {
      return (
        this.hoverActiveCol ||
        this.hoverActiveRow ||
        this.activeColElement ||
        this.activeRowElement
      );
    },
  },
  methods: {
    ...mapActions([
      "updateFormElements",
      "addRowElement",
      "addInputElement",
      "addColumnElement",
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
    addElement(element) {
      const elm = { ...element };

      switch (elm.type) {
        case "row":
          this.addRow(elm);
          break;
        case "column":
          this.addColumn(elm);
          break;
        default:
          this.addInput(elm);
      }
    },
    addRow(element) {
      // every time we add a row we are going to automatically
      // add a column forformatting and logistical reasons
      const elementsArr = [...this.formElements];
      const col = { ...this.layoutElements.col };
      const activeLayout = this.activeLayoutElement;
      const activeEl = lodash_find(elementsArr, ["id", activeLayout]);
      element.children = [col];
      const activity = {
        hoverCol: this.hoverActiveCol,
        hoverRow: this.hoverActiveRow,
        activeCol: this.activeColElement,
        activeRow: this.activeRowElement,
        activeLayout: this.activeLayoutElement,
      };
      debugger;

      if (activeEl && activeEl.type !== "row") {
        const parentPath = this.getParentPath(
          elementsArr,
          this.activeLayoutElement
        );
        element.parentPath = parentPath;
        const parentElement = lodash_get(elementsArr, parentPath, elementsArr);
        parentElement.push(element);
      } else {
        elementsArr.push(element);
      }

      this.updateFormElements(elementsArr);
      this.setActiveRowElement(element.id);
      this.setActiveColElement(col.id);
    },
    addColumn(element) {},
    findPathFromId(obj, id) {
      for (const key in obj) {
        if (obj[key] && typeof obj[key] === "object") {
          let result = this.findPathFromId(obj[key], id);
          if (result) {
            result.unshift(key);
            return result;
          }
        } else if (obj[key] === id) {
          return [key];
        }
      }
    },
    joinPath(arr) {
      return arr
        .map((val) => {
          return isNaN(parseInt(val)) ? `.${val}` : `[${parseInt(val)}]`;
        })
        .join("");
    },
    getParentPath(obj, id) {
      const pathArr = this.findPathFromId(obj, id);
      const joinedPath = this.joinPath(pathArr);
      const len = joinedPath.length;
      const lastIdx = joinedPath.lastIndexOf("[");
      const toEnd = lastIdx - len;
      const parentPath = joinedPath.slice(0, toEnd);

      return parentPath;
    },
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