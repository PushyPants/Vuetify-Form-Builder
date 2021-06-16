<script>
export const FormBuilderMixins = {
  mounted() {
    this.defineVProps();
  },
  methods: {
    defineVProps() {
      if (this.settings) {
        for (const setting in this.settings) {
          this[setting] = this.settings[setting];
        }
      }
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