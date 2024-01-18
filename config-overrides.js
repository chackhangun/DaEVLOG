const { addBabelPlugins, override } = require("customize-cra");
module.exports = override(
  ...addBabelPlugins(
    /* Add plug-in names here (separate each value by a comma) */
    "babel-plugin-transform-typescript-metadata",
    "babel-plugin-parameter-decorator"
  )
);
