import { v4 } from "uuid";
// This will go inside a radio group and the collective settings will probably be merged

export default {
  displayName: "Radio Button",
  vuetifyComponent: "v-radio",
  type: "input",
  id: v4(),
  desc:
    "The v-radio component is a simple radio button. When combined with the v-radio-group component you can provide groupable functionality to allow users to select from a predefined set of options.",
  level: "basic",
  props: {
    "active-class": {
      propName: "active-class",
      type: "string",
      default: "undefined",
      desc:
        "Configure the active CSS class applied when the link is active. You can find more information about the active-class prop on the vue-router documentation."
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
        "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for dark themes."
    },
    disabled: {
      propName: "disabled",
      type: "boolean",
      default: "false",
      desc: "Removes the ability to click or target the component."
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
    name: {
      propName: "name",
      type: "string",
      default: "undefined",
      desc: "Sets the component’s name attribute"
    },
    "off-icon": {
      propName: "off-icon",
      type: "string",
      default: "'$radioOff'",
      desc: "The icon used when inactive"
    },
    "on-icon": {
      propName: "on-icon",
      type: "string",
      default: "'$radioOn'",
      desc: "The icon used when active"
    },
    readonly: {
      propName: "readonly",
      type: "boolean",
      default: "false",
      desc: "Puts input in readonly state"
    },
    ripple: {
      propName: "ripple",
      type: "boolean",
      default: "true",
      desc: "Applies the v-ripple directive."
    },
    value: {
      propName: "value",
      type: "any",
      default: "undefined",
      desc:
        "The value used when the component is selected in a group. If not provided, the index will be used."
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
