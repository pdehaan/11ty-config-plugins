const { inspect } = require("node:util");

/**
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @returns {ReturnType<import("@11ty/eleventy/src/defaultConfig")>}
 */
module.exports = function (eleventyConfig) {
  console.log("[CONFIG]", inspect(eleventyConfig.dir, { sorted: true }));

  eleventyConfig.addPlugin(require("./plugins/custom"));

  return {
    dir: {
      input: "src",
      // output: "www",
    }
  };
};
