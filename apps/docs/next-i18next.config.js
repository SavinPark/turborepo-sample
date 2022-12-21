const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "ko"],
    defaultLocale: "ko",
    localePath: path.resolve("../../locales"),
    defaultNS: "all",
  },
};
