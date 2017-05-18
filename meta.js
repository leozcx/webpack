module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "vuex": {
      "type": "confirm",
      "message": "Install vuex?"
    },
    "i18n": {
      "type": "confirm",
      "message": "Use vue-i18n?"
    },
    "config": {
      "type": "confirm",
      "message": "Generate environment specific config file? (via Proxy)"
    },
    "toast": {
      "type": "confirm",
      "message": "Add pre-configured toast support?"
    },
    "toastConfig": {
      "when": "toast",
      "type": "list",
      "message": "Pick a toast implementation",
      "choices": [
        {
          "name": "vue-toasted (https://github.com/shakee93/vue-toasted)",
          "value": "vue-toasted",
          "short": "vue-toasted"
        }
      ]
    },
    "postcss": {
      "type": "confirm",
      "message": "Use PostCSS?"
    },
    "fontawesome": {
      "type": "confirm",
      "message": "Use Font Awesome?"
    },
    "flow": {
      "type": "confirm",
      "message": "Use Flow.js as static type checker?"
    },
    "lint": {
      "type": "confirm",
      "message": "Use ESLint to lint your code?"
    },
    "lintConfig": {
      "when": "lint",
      "type": "list",
      "message": "Pick an ESLint preset",
      "choices": [
        {
          "name": "Standard (https://github.com/feross/standard)",
          "value": "standard",
          "short": "Standard"
        },
        {
          "name": "Airbnb (https://github.com/airbnb/javascript)",
          "value": "airbnb",
          "short": "Airbnb"
        },
        {
          "name": "none (configure it yourself)",
          "value": "none",
          "short": "none"
        }
      ]
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    ".flowconfig": "flow",
    ".eslintrc.js": "lint",
    ".eslintignore": "lint",
    "src/postcss.config.js": "postcss",
    "main.postcss": "postcss",
    "font-awesome.config*": "fontawesome",
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/router/**/*": "router",
    "src/store.js": "vuex",
    "src/locales.js": "i18n",
    "src/config.js": "config"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
