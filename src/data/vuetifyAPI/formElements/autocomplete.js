export default {
  displayName: "Auto Complete",
  vuetifyComponent: "v-autocomplete",
  desc:
    "The Autocomplete component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically requesting information from an API.",
  level: "advanced",
  props: {
    "allow-overflow": {
      propName: "allow-overflow",
      type: "boolean",
      default: "true",
      desc: "Allow the menu to overflow off the screen"
    },
    "append-icon": {
      propName: "append-icon",
      type: "string",
      default: "'$dropdown'",
      desc: "Appends an icon to the component, uses the same syntax as v-icon"
    },
    "append-outer-icon": {
      propName: "append-outer-icon",
      type: "string",
      default: "undefined",
      desc:
        "Appends an icon to the outside the component’s input, uses same syntax as v-icon"
    },
    attach: {
      propName: "attach",
      type: "any",
      default: "false",
      desc:
        "Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root v-app component by default."
    },
    "auto-select-first": {
      propName: "auto-select-first",
      type: "boolean",
      default: "false",
      desc: "When searching, will always highlight the first option"
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
    "cache-items": {
      propName: "cache-items",
      type: "boolean",
      default: "false",
      desc:
        "Keeps a local unique copy of all items that have been passed through the items prop."
    },
    chips: {
      propName: "chips",
      type: "boolean",
      default: "false",
      desc: "Changes display of selections to chips"
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
    "deletable-chips": {
      propName: "deletable-chips",
      type: "boolean",
      default: "false",
      desc: "Adds a remove icon to selected chips"
    },
    dense: {
      propName: "dense",
      type: "boolean",
      default: "false",
      desc: "Reduces the input height"
    },
    "disable-lookup": {
      propName: "disable-lookup",
      type: "boolean",
      default: "false",
      desc: "Disables keyboard lookup"
    },
    disabled: {
      propName: "disabled",
      type: "boolean",
      default: "false",
      desc: "Disables the input"
    },
    eager: {
      propName: "eager",
      type: "boolean",
      default: "false",
      desc:
        "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."
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
    filter: {
      propName: "filter",
      type: "function",
      default: "(item, queryText, itemText) => {}",
      desc: "The filtering algorithm used when searching. example"
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
    "hide-no-data": {
      propName: "hide-no-data",
      type: "boolean",
      default: "false",
      desc:
        "Hides the menu when there are no options to show. Useful for preventing the menu from opening before results are fetched asynchronously. Also has the effect of opening the menu when the items array changes if not already open."
    },
    "hide-selected": {
      propName: "hide-selected",
      type: "boolean",
      default: "false",
      desc: "Do not display in the select menu items that are already selected"
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
    "item-color": {
      propName: "item-color",
      type: "string",
      default: "'primary'",
      desc: "Sets color of selected items"
    },
    "item-disabled": {
      propName: "item-disabled",
      type: "string | array | function",
      default: "disabled",
      desc: "Set property of items’s disabled value"
    },
    "item-text": {
      propName: "item-text",
      type: "string | array | function",
      default: "text",
      desc: "Set property of items’s text value"
    },
    "item-value": {
      propName: "item-value",
      type: "string | array | function",
      default: "value",
      desc:
        "Set property of items’s value - must be primitive. Dot notation is supported. Note: This is currently not supported with v-combobox GitHub Issue"
    },
    items: {
      propName: "items",
      type: "array",
      default: "[]",
      desc:
        "Can be an array of objects or array of strings. When using objects, will look for a text, value and disabled keys. This can be changed using the item-text, item-value and item-disabled props. Objects that have a header or divider property are considered special cases and generate a list header or divider; these items are not selectable."
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
    "menu-props": {
      propName: "menu-props",
      type: "string | array | object",
      default:
        "{\n  closeOnClick: false,\n  closeOnContentClick: false,\n  disableKeys: true,\n  openOnClick: false,\n  maxHeight: 304,\n  offsetY: true,\n  offsetOverflow: true,\n  transition: false\n}",
      desc:
        'Pass props through to the v-menu component. Accepts either a string for boolean props menu-props="auto, overflowY", or an object :menu-props="{ auto: true, overflowY: true }"'
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
      desc: "Changes select to multiple. Accepts array for value"
    },
    "no-data-text": {
      propName: "no-data-text",
      type: "string",
      default: "'$vuetify.noDataText'",
      desc: "Display text when there is no data"
    },
    "no-filter": {
      propName: "no-filter",
      type: "boolean",
      default: "false",
      desc:
        "Do not apply filtering when searching. Useful when data is being filtered server side"
    },
    "open-on-clear": {
      propName: "open-on-clear",
      type: "boolean",
      default: "false",
      desc:
        "When using the clearable prop, once cleared, the select menu will either open or stay open, depending on the current state"
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
    "return-object": {
      propName: "return-object",
      type: "boolean",
      default: "false",
      desc:
        "Changes the selection behavior to return the object directly rather than the value specified with item-value"
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
    rules: {
      propName: "rules",
      type: "array",
      default: "[]",
      desc:
        "Accepts a mixed array of types function, boolean and string. Functions pass an input value as an argument and must return either true / false or a string containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) false or is a string"
    },
    "search-input": {
      propName: "search-input",
      type: "string",
      default: "undefined",
      desc: "Search value. Can be used with .sync modifier."
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
    "small-chips": {
      propName: "small-chips",
      type: "boolean",
      default: "false",
      desc: "Changes display of selections to chips with the small property"
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
    },
    "value-comparator": {
      propName: "value-comparator",
      type: "function",
      default: "(a: any, b: any): boolean",
      desc: "The comparison algorithm used for values. More info"
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
    },
    "update:list-index": {
      eventName: "update:list-index",
      desc: "Emitted when menu item is selected using keyboard arrows"
    },
    "update:search-input": {
      eventName: "update:search-input",
      desc: "The search-input.sync event"
    }
  }
};
