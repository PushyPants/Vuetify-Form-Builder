import { v4 } from "uuid";

export default {
  displayName: "Switch",
  vuetifyComponent: "v-switch",
  type: "input",
  id: v4(),
  desc:
    "The Switch component provides users the ability to choose between two distinct values. These are very similar to a toggle, or on/off switch, though aesthetically different than a checkbox.",
  level: "basic",
  props: {
    "append-icon": {
      propName: "append-icon",
      type: "string",
      default: "undefined",
      desc: "Appends an icon to the component, uses the same syntax as v-icon"
    },
    "background-color": {
      propName: "background-color",
      type: "string",
      default: "undefined",
      desc: "Changes the background-color of the input"
    },
    color: {
      propName: "color",
      type: "string",
      default: "undefined",
      desc:
        "Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). You can find list of built in classes on the colors page."
    },
    dark: {
      propName: "dark",
      type: "boolean",
      default: "false",
      desc:
        "Applies the dark theme variant to the component. This will default the components color to white unless you’ve configured your application theme to dark or if you are using the color prop on the component. You can find more information on the Material Design documentation for dark themes."
    },
    dense: {
      propName: "dense",
      type: "boolean",
      default: "false",
      desc: "Reduces the input height"
    },
    disabled: {
      propName: "disabled",
      type: "boolean",
      default: "false",
      desc: "Disable the input"
    },
    error: {
      propName: "error",
      type: "boolean",
      default: "false",
      desc: "Puts the input in a manual error state"
    },
    "error-count": {
      propName: "error-count",
      type: "number | string",
      default: "1",
      desc: "The total number of errors that should display at once"
    },
    "error-messages": {
      propName: "error-messages",
      type: "string | array",
      default: "[]",
      desc:
        "Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the rules prop. This field will not trigger validation"
    },
    "false-value": {
      propName: "false-value",
      type: "any",
      default: "undefined",
      desc: "Sets value for falsy state"
    },
    flat: {
      propName: "flat",
      type: "boolean",
      default: "false",
      desc:
        "Display component without elevation. Default elevation for thumb is 4dp, flat resets it"
    },
    "hide-details": {
      propName: "hide-details",
      type: "boolean | string",
      default: "undefined",
      desc:
        "Hides hint and validation errors. When set to auto messages will be rendered only if there’s a message (hint, error message, counter value etc) to display"
    },
    hint: {
      propName: "hint",
      type: "string",
      default: "undefined",
      desc: "Hint text"
    },
    id: {
      propName: "id",
      type: "string",
      default: "undefined",
      desc: "Sets the DOM id on the component"
    },
    "input-value": {
      propName: "input-value",
      type: "any",
      default: "undefined",
      desc: "The v-model bound value"
    },
    inset: {
      propName: "inset",
      type: "boolean",
      default: "false",
      desc: "Enlarge the v-switch track to encompass the thumb"
    },
    label: {
      propName: "label",
      type: "string",
      default: "undefined",
      desc: "Sets input label"
    },
    light: {
      propName: "light",
      type: "boolean",
      default: "false",
      desc: "Applies the light theme variant to the component."
    },
    loading: {
      propName: "loading",
      type: "boolean | string",
      default: "false",
      desc:
        "Displays circular progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it’s supported by the component) or the primary color"
    },
    messages: {
      propName: "messages",
      type: "string | array",
      default: "[]",
      desc: "Displays a list of messages or message if using a string"
    },
    multiple: {
      propName: "multiple",
      type: "boolean",
      default: "false",
      desc: "Changes expected model to an array"
    },
    "persistent-hint": {
      propName: "persistent-hint",
      type: "boolean",
      default: "false",
      desc: "Forces hint to always be visible"
    },
    "prepend-icon": {
      propName: "prepend-icon",
      type: "string",
      default: "undefined",
      desc: "Prepends an icon to the component, uses the same syntax as v-icon"
    },
    readonly: {
      propName: "readonly",
      type: "boolean",
      default: "false",
      desc: "Puts input in readonly state"
    },
    ripple: {
      propName: "ripple",
      type: "boolean | object",
      default: "true",
      desc: "Applies the v-ripple directive."
    },
    rules: {
      propName: "rules",
      type: "array",
      default: "[]",
      desc:
        "Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) false or is a string"
    },
    success: {
      propName: "success",
      type: "boolean",
      default: "false",
      desc: "Puts the input in a manual success state"
    },
    "success-messages": {
      propName: "success-messages",
      type: "string | array",
      default: "[]",
      desc:
        "Puts the input in a success state and passes through custom success messages."
    },
    "true-value": {
      propName: "true-value",
      type: "any",
      default: "undefined",
      desc: "Sets value for truthy state"
    },
    "validate-on-blur": {
      propName: "validate-on-blur",
      type: "boolean",
      default: "false",
      desc: "Delays validation until blur event"
    },
    value: {
      propName: "value",
      type: "any",
      default: "undefined",
      desc: "The input’s value"
    },
    "value-comparator": {
      propName: "value-comparator",
      type: "function",
      default: "null",
      desc: "Apply a custom value comparator function"
    }
  },
  events: {
    change: {
      eventName: "change",
      desc: "Emitted when the input is changed by user interaction"
    },
    click: {
      eventName: "click",
      desc:
        "Emitted when input is clicked. Note: the change event should be used instead of click when monitoring state change"
    },
    "click:append": {
      eventName: "click:append",
      desc: "Emitted when appended icon is clicked"
    },
    "click:prepend": {
      eventName: "click:prepend",
      desc: "Emitted when prepended icon is clicked"
    },
    mousedown: {
      eventName: "mousedown",
      desc: "Emitted when click is pressed"
    },
    mouseup: {
      eventName: "mouseup",
      desc: "Emitted when click is released"
    },
    "update:error": {
      eventName: "update:error",
      desc: "The error.sync event"
    }
  }
};
