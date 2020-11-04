module.exports = {
  root: true,
  
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", "@vue/standard"],
  parserOptions: {
    "eol-last": ["error", "never"],
    parser: "babel-eslint",
    "eol-last": ["error", "never"],
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }]
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
  },
};
