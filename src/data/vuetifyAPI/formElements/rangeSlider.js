export default {
  displayName: "Range Slider",
  vuetifyComponent: "v-range-slider",
  desc:
    "The Range Slider is a better visualization of the number range. It is used for gathering numerical user data",
  level: "advanced",
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
      desc: "none"
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
    height: {
      propName: "height",
      type: "number | string",
      default: "undefined",
      desc: "Sets the height of the input"
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
    "inverse-label": {
      propName: "inverse-label",
      type: "boolean",
      default: "false",
      desc: "Reverse the label position. Works with rtl."
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
      desc: "none"
    },
    "loader-height": {
      propName: "loader-height",
      type: "number | string",
      default: "2",
      desc: "Specifies the height of the loader"
    },
    loading: {
      propName: "loading",
      type: "boolean | string",
      default: "false",
      desc:
        "Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - primary, secondary, success, info, warning, error) or a Boolean which uses the component color (set by color prop - if it’s supported by the component) or the primary color"
    },
    max: {
      propName: "max",
      type: "number | string",
      default: "100",
      desc: "Sets the maximum allowed value"
    },
    messages: {
      propName: "messages",
      type: "string | array",
      default: "[]",
      desc: "Displays a list of messages or message if using a string"
    },
    min: {
      propName: "min",
      type: "number | string",
      default: "0",
      desc: "Sets the minimum allowed value"
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
    rules: {
      propName: "rules",
      type: "array",
      default: "[]",
      desc:
        "Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) false or is a string"
    },
    step: {
      propName: "step",
      type: "number | string",
      default: "1",
      desc: "If greater than 0, sets step interval for ticks"
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
    "thumb-color": {
      propName: "thumb-color",
      type: "string",
      default: "undefined",
      desc: "Sets the thumb and thumb label color"
    },
    "thumb-label": {
      propName: "thumb-label",
      type: "boolean | string",
      default: "undefined",
      desc:
        "Show thumb label. If true it shows label when using slider. If set to 'always' it always shows label."
    },
    "thumb-size": {
      propName: "thumb-size",
      type: "number | string",
      default: "32",
      desc: "Controls the size of the thumb label."
    },
    "tick-labels": {
      propName: "tick-labels",
      type: "array",
      default: "[]",
      desc:
        "When provided with Array, will attempt to map the labels to each step in index order"
    },
    "tick-size": {
      propName: "tick-size",
      type: "number | string",
      default: "2",
      desc: "Controls the size of ticks"
    },
    ticks: {
      propName: "ticks",
      type: "boolean | string",
      default: "false",
      desc:
        "Show track ticks. If true it shows ticks when using slider. If set to 'always' it always shows ticks."
    },
    "track-color": {
      propName: "track-color",
      type: "string",
      default: "undefined",
      desc: "Sets the track’s color"
    },
    "track-fill-color": {
      propName: "track-fill-color",
      type: "string",
      default: "undefined",
      desc: "Sets the track’s fill color"
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
    vertical: {
      propName: "vertical",
      type: "boolean",
      default: "false",
      desc: "Changes slider direction to vertical"
    }
  },
  events: {
    change: {
      eventName: "change",
      desc: "Emitted when the input is changed by user interaction"
    },
    click: {
      eventName: "click",
      desc: "Emitted when input is clicked"
    },
    "click:append": {
      eventName: "click:append",
      desc: "Emitted when appended icon is clicked"
    },
    "click:prepend": {
      eventName: "click:prepend",
      desc: "Emitted when prepended icon is clicked"
    },
    end: {
      eventName: "end",
      desc: "Slider value emitted at the end of slider movement"
    },
    input: {
      eventName: "input",
      desc: "The updated bound model"
    },
    mousedown: {
      eventName: "mousedown",
      desc: "Emitted when click is pressed"
    },
    mouseup: {
      eventName: "mouseup",
      desc: "Emitted when click is released"
    },
    start: {
      eventName: "start",
      desc: "Slider value emitted at start of slider movement"
    },
    "update:error": {
      eventName: "update:error",
      desc: "The error.sync event"
    }
  }
};
