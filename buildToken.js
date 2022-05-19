const StyleDictionary = require("style-dictionary").extend({
  source: ["token/*.json"],
  platforms: {
    js: {
      transformGroup: "js",
      buildPath: "./token/",
      files: [
        {
          destination: "_variables.js",
          format: "javascript/module",
        },
      ],
    },
    scss: {
      transformGroup: "web",
      buildPath: "./src/assets/scss/",
      files: [
        {
          destination: "_variables.scss",
          format: "scss/variables",
        },
      ],
    },
  },
});

StyleDictionary.buildAllPlatforms();
