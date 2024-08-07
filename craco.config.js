const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@context": path.resolve(__dirname, "src/context/"),
      // "@assets": path.resolve(__dirname, "src/assets/"),
      // "@api": path.resolve(__dirname, "src/api/"),
    },
  },
  style: {
    modules: {
      localIdentName: "[local]__[hash:base64:5]",
    },
    sass: {
      loaderOptions: {
        additionalData: `@import "src/styles/_variables.scss";`,
      },
    },
  },
};
