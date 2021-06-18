import { resolve } from "path";

export default {
  chainWebpack: (config) => {
    config.resolve.alias.set("Mixins", resolve("src/mixins"));
  }
};
