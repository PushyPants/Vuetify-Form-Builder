// this is the v-form
// putting this here in case we need to have form settings
export default {
  displayName: "Form",
  vuetifyComponent: "v-form",
  desc:
    "The internal form component makes it easy to add validation to form inputs. All input components have a rules prop which accepts a mixed array of types function, boolean and string. These allow you to specify conditions in which the input is valid or invalid. Whenever the value of an input is changed, each function in the array will receive the new value and each array element will be evaluated. If a function or array element returns false or a string, validation has failed and the string value will be presented as an error message.",
  level: "advanced",
  props: {
    disabled: {
      propName: "disabled",
      type: "boolean",
      default: "false",
      desc: "Puts all children inputs into a disabled state."
    },
    "lazy-validation": {
      propName: "lazy-validation",
      type: "boolean",
      default: "false",
      desc:
        "If enabled, value will always be true unless there are visible validation errors. You can still call validate() to manually trigger validation"
    },
    readonly: {
      propName: "readonly",
      type: "boolean",
      default: "false",
      desc: "Puts all children inputs into a readonly state."
    },
    value: {
      propName: "value",
      type: "boolean",
      default: "false",
      desc: "A boolean value representing the validity of the form."
    }
  },
  events: {
    input: {
      eventName: "input",
      desc: "The updated bound model"
    },
    submit: {
      eventName: "submit",
      desc: "Emitted when form is submitted"
    }
  },
  functions: {
    reset: {
      functionName: "reset",
      returns: "void",
      description:
        "Resets the state of all registered inputs (inside the form) to {} for arrays and null for all other values. Resets errors bag when using the lazy-validation prop."
    },
    resetValidation: {
      functionName: "resetValidation",
      returns: "void",
      description:
        "Resets validation of all registered inputs without modifying their state"
    },
    validate: {
      functionName: "validate",
      returns: "boolean",
      description:
        "Validates all registered inputs. Returns true if successful and false if not"
    }
  }
};
