module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "airbnb"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "comma-dangle": [2, "never"],
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"]
  }
};