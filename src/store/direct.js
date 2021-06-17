export default {
  directGetters(state) {
    const getterObj = {};
    Object.keys(state).map(
      (prop) => (getterObj[prop] = (state) => state[prop])
    );
    return getterObj;
  },
  directActions(state, context, data = null) {
    const actionsObj = {};
    Object.keys(state).map((prop) => {
      const propKey = actionsObj[prop];
      const properCaseKey = propKey.charAt(0).toUpperCase() + propKey.slice(1);

      actionsObj[propKey] = (context, data) => {
        const handler = `set${properCaseKey}Handler`;
        context.commit(handler, data);
      };
      return actionsObj;
    });
  },
  directMutations(state, data = null) {
    const mutationsObj = {};
    Object.keys(state).map((prop) => {
      const propKey = mutationsObj[prop];
      const properCaseKey = propKey.charAt(0).toUpperCase() + propKey.slice(1);
      const handler = `set${properCaseKey}Handler`;

      mutationsObj[handler] = (state, data) => {
        state[prop] = data;
      };
      return mutationsObj;
    });
  }
};
