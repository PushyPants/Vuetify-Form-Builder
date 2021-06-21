import { v4 } from "uuid";

export default {
  displayName: "Row",
  vuetifyComponent: "v-row",
  type: "row",
  children: [],
  id: v4(),
  icon: "mdi-view-day",
  desc: "Horizontal container to hold columns",
  level: "basic",
  props: {
    align: {
      propName: "align",
      type: "string",
      default: "undefined",
      desc:
        "Applies the align-items css property. Available options are start, center, end, baseline and stretch."
    },
    "align-content": {
      propName: "align-content",
      type: "string",
      default: "undefined",
      desc:
        "Applies the align-content css property. Available options are start, center, end, space-between, space-around and stretch."
    },
    "align-content-lg": {
      propName: "align-content-lg",
      type: "string",
      default: "undefined",
      desc:
        "Changes the align-content property on large and greater breakpoints."
    },
    "align-content-md": {
      propName: "align-content-md",
      type: "string",
      default: "undefined",
      desc:
        "Changes the align-content property on medium and greater breakpoints."
    },
    "align-content-sm": {
      propName: "align-content-sm",
      type: "string",
      default: "undefined",
      desc:
        "Changes the align-content property on small and greater breakpoints."
    },
    "align-content-xl": {
      propName: "align-content-xl",
      type: "string",
      default: "undefined",
      desc:
        "Changes the align-content property on extra large and greater breakpoints."
    },
    "align-lg": {
      propName: "align-lg",
      type: "string",
      default: "undefined",
      desc: "Changes the align-items property on large and greater breakpoints."
    },
    "align-md": {
      propName: "align-md",
      type: "string",
      default: "undefined",
      desc:
        "Changes the align-items property on medium and greater breakpoints."
    },
    "align-sm": {
      propName: "align-sm",
      type: "string",
      default: "undefined",
      desc: "Changes the align-items property on small and greater breakpoints."
    },
    "align-xl": {
      propName: "align-xl",
      type: "string",
      default: "undefined",
      desc:
        "Changes the align-items property on extra large and greater breakpoints."
    },
    dense: {
      propName: "dense",
      type: "boolean",
      default: "false",
      desc: "Reduces the gutter between v-cols."
    },
    justify: {
      propName: "justify",
      type: "string",
      default: "undefined",
      desc:
        "Applies the justify-content css property. Available options are start, center, end, space-between and space-around."
    },
    "justify-lg": {
      propName: "justify-lg",
      type: "string",
      default: "undefined",
      desc:
        "Changes the justify-content property on large and greater breakpoints."
    },
    "justify-md": {
      propName: "justify-md",
      type: "string",
      default: "undefined",
      desc:
        "Changes the justify-content property on medium and greater breakpoints."
    },
    "justify-sm": {
      propName: "justify-sm",
      type: "string",
      default: "undefined",
      desc:
        "Changes the justify-content property on small and greater breakpoints."
    },
    "justify-xl": {
      propName: "justify-xl",
      type: "string",
      default: "undefined",
      desc:
        "Changes the justify-content property on extra large and greater breakpoints."
    },
    "no-gutters": {
      propName: "no-gutters",
      type: "boolean",
      default: "false",
      desc: "Removes the gutter between v-cols."
    },
    tag: {
      propName: "tag",
      type: "string",
      default: "'div'",
      desc: "Specify a custom tag used on the root element."
    }
  },
  events: {}
};
