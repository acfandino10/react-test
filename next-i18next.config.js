const path = require("path");

module.exports = {
    debug: process.env.NODE_ENV === 'development',
    serializeConfig: false,
    react: { useSuspense: false },
  };