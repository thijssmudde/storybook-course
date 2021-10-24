const postcss = require("rollup-plugin-postcss");

module.exports = {
  rollup(config, options) {
    // Include external dependencies: https://github.com/jaredpalmer/tsdx/issues/179
    if (config.output.format === "umd") {
      delete config.external;
    }

    config.plugins.push(
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
    );
    return config;
  },
};
