import { v4 } from "uuid";

export default {
  displayName: "Long Text",
  vuetifyComponent: "v-textarea",
  type: "input",
  id: v4(),
  desc:
    "Long Text in its simplest form is a multi-line text-field, useful for larger amounts of text.",
  level: "basic",
  props: {
    "append-icon": {
      propName: "append-icon",
      type: "string",
      default: "undefined",
      desc: "Appends an icon to the component, uses the same syntax as v-icon"
    },
    "append-outer-icon": {
      propName: "append-outer-icon",
      type: "string",
      default: "undefined",
      desc:
        "Appends an icon to the outside the component’s input, uses same syntax as v-icon"
    },
    "auto-grow": {
      propName: "auto-grow",
      type: "boolean",
      default: "false",
      desc: "Automatically grow the textarea depending on amount of text"
    },
    autofocus: {
      propName: "autofocus",
      type: "boolean",
      default: "false",
      desc: "Enables autofocus"
    },
    "background-color": {
      propName: "background-color",
      type: "string",
      default: "undefined",
      desc: "Changes the background-color of the input"
    },
    "clear-icon": {
      propName: "clear-icon",
      type: "string",
      default: "'$clear'",
      desc: "Applied when using clearable and the input is dirty"
    },
    clearable: {
      propName: "clearable",
      type: "boolean",
      default: "false",
      desc:
        "Add input clear functionality, default icon is Material Design Icons mdi-clear"
    },
    color: {
      propName: "color",
      type: "string",
      default: "undefined",
      desc:
        "Applies specified color to the control - it can be the name of material color (for example success or purple) or css color (#033 or rgba(255, 0, 0, 0.5)). You can find list of built in classes on the colors page."
    },
    counter: {
      propName: "counter",
      type: "boolean | number | string",
      default: "undefined",
      desc:
        "Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation."
    },
    "counter-value": {
      propName: "counter-value",
      type: "function",
      default: "null",
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
    filled: {
      propName: "filled",
      type: "boolean",
      default: "false",
      desc: "Applies the alternate filled input style"
    },
    flat: {
      propName: "flat",
      type: "boolean",
      default: "false",
      desc:
        "Removes elevation (shadow) added to element when using the solo or solo-inverted props"
    },
    "full-width": {
      propName: "full-width",
      type: "boolean",
      default: "false",
      desc: "Designates input type as full-width"
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
    messages: {
      propName: "messages",
      type: "string | array",
      default: "[]",
      desc: "Displays a list of messages or message if using a string"
    },
    "no-resize": {
      propName: "no-resize",
      type: "boolean",
      default: "false",
      desc: "Remove resize handle"
    },
    outlined: {
      propName: "outlined",
      type: "boolean",
      default: "false",
      desc: "Applies the outlined style to the input"
    },
    "persistent-hint": {
      propName: "persistent-hint",
      type: "boolean",
      default: "false",
      desc: "Forces hint to always be visible"
    },
    "persistent-placeholder": {
      propName: "persistent-placeholder",
      type: "boolean",
      default: "false",
      desc: "Forces placeholder to always be visible"
    },
    placeholder: {
      propName: "placeholder",
      type: "string",
      default: "undefined",
      desc: "Sets the input’s placeholder text"
    },
    prefix: {
      propName: "prefix",
      type: "string",
      default: "undefined",
      desc: "Displays prefix text"
    },
    "prepend-icon": {
      propName: "prepend-icon",
      type: "string",
      default: "undefined",
      desc: "Prepends an icon to the component, uses the same syntax as v-icon"
    },
    "prepend-inner-icon": {
      propName: "prepend-inner-icon",
      type: "string",
      default: "undefined",
      desc:
        "Prepends an icon inside the component’s input, uses the same syntax as v-icon"
    },
    readonly: {
      propName: "readonly",
      type: "boolean",
      default: "false",
      desc: "Puts input in readonly state"
    },
    reverse: {
      propName: "reverse",
      type: "boolean",
      default: "false",
      desc: "Reverses the input orientation"
    },
    rounded: {
      propName: "rounded",
      type: "boolean",
      default: "false",
      desc: "Adds a border radius to the input"
    },
    "row-height": {
      propName: "row-height",
      type: "number | string",
      default: "24",
      desc: "Height value for each row. Requires the use of the auto-grow prop."
    },
    rows: {
      propName: "rows",
      type: "number | string",
      default: "5",
      desc: "Default row count"
    },
    rules: {
      propName: "rules",
      type: "array",
      default: "[]",
      desc:
        "Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) false or is a string"
    },
    shaped: {
      propName: "shaped",
      type: "boolean",
      default: "false",
      desc:
        "Round if outlined and increase border-radius if filled. Must be used with either outlined or filled"
    },
    "single-line": {
      propName: "single-line",
      type: "boolean",
      default: "false",
      desc: "Label does not move on focus/dirty"
    },
    solo: {
      propName: "solo",
      type: "boolean",
      default: "false",
      desc: "Changes the style of the input"
    },
    "solo-inverted": {
      propName: "solo-inverted",
      type: "boolean",
      default: "false",
      desc: "Reduces element opacity until focused"
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
    suffix: {
      propName: "suffix",
      type: "string",
      default: "undefined",
      desc: "Displays suffix text"
    },
    type: {
      propName: "type",
      type: "string",
      default: "'text'",
      desc: "Sets input type"
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
    }
  },
  events: {
    blur: {
      eventName: "blur",
      desc: "Emitted when the input is blurred"
    },
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
    "click:append-outer": {
      eventName: "click:append-outer",
      desc: "Emitted when appended outer icon is clicked"
    },
    "click:clear": {
      eventName: "click:clear",
      desc: "Emitted when clearable icon clicked"
    },
    "click:prepend": {
      eventName: "click:prepend",
      desc: "Emitted when prepended icon is clicked"
    },
    "click:prepend-inner": {
      eventName: "click:prepend-inner",
      desc: "Emitted when prepended inner icon is clicked"
    },
    focus: {
      eventName: "focus",
      desc: "Emitted when component is focused"
    },
    input: {
      eventName: "input",
      desc: "The updated bound model"
    },
    keydown: {
      eventName: "keydown",
      desc: "Emitted when any key is pressed"
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
