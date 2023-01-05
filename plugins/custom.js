const { inspect } = require("node:util");

module.exports = (eleventyConfig, pluginConfig) => {
  console.log("[PLUGIN]", inspect(eleventyConfig.dir, { sorted: true }));
  return {};
};
