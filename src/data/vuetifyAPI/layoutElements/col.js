export default {
  displayName: "Column",
  vuetifyComponent: "v-col",
  desc: "Divides a row element into columns",
  level: "basic",
  props: {
    "align-self": {
      propName: "align-self",
      type: "string",
      default: "undefined",
      desc:
        "Applies the align-items css property. Available options are start, center, end, auto, baseline and stretch."
    },
    cols: {
      propName: "cols",
      type: "boolean | string | number",
      default: "false",
      desc:
        "Sets the default number of columns the component extends. Available options are 1 -> 12 and auto."
    },
    lg: {
      propName: "lg",
      type: "boolean | string | number",
      default: "false",
      desc: "Changes the number of columns on large and greater breakpoints."
    },
    md: {
      propName: "md",
      type: "boolean | string | number",
      default: "false",
      desc: "Changes the number of columns on medium and greater breakpoints."
    },
    offset: {
      propName: "offset",
      type: "string | number",
      default: "undefined",
      desc: "Sets the default offset for the column."
    },
    "offset-lg": {
      propName: "offset-lg",
      type: "string | number",
      default: "undefined",
      desc:
        "Changes the offset of the component on large and greater breakpoints."
    },
    "offset-md": {
      propName: "offset-md",
      type: "string | number",
      default: "undefined",
      desc:
        "Changes the offset of the component on medium and greater breakpoints."
    },
    "offset-sm": {
      propName: "offset-sm",
      type: "string | number",
      default: "undefined",
      desc:
        "Changes the offset of the component on small and greater breakpoints."
    },
    "offset-xl": {
      propName: "offset-xl",
      type: "string | number",
      default: "undefined",
      desc:
        "Changes the offset of the component on extra large and greater breakpoints."
    },
    order: {
      propName: "order",
      type: "string | number",
      default: "undefined",
      desc: "Sets the default order for the column."
    },
    "order-lg": {
      propName: "order-lg",
      type: "string | number",
      default: "undefined",
      desc:
        "Changes the order of the component on large and greater breakpoints."
    },
    "order-md": {
      propName: "order-md",
      type: "string | number",
      default: "undefined",
      desc:
        "Changes the order of the component on medium and greater breakpoints."
    },
    "order-sm": {
      propName: "order-sm",
      type: "string | number",
      default: "undefined",
      desc:
        "Changes the order of the component on small and greater breakpoints."
    },
    "order-xl": {
      propName: "order-xl",
      type: "string | number",
      default: "undefined",
      desc:
        "Changes the order of the component on extra large and greater breakpoints."
    },
    sm: {
      propName: "sm",
      type: "boolean | string | number",
      default: "false",
      desc: "Changes the number of columns on small and greater breakpoints."
    },
    tag: {
      propName: "tag",
      type: "string",
      default: "'div'",
      desc: "Specify a custom tag used on the root element."
    },
    xl: {
      propName: "xl",
      type: "boolean | string | number",
      default: "false",
      desc:
        "Changes the number of columns on extra large and greater breakpoints."
    }
  },
  events: {}
};
