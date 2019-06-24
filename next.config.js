const withSass = require('@zeit/next-sass')
const path = require('path')
const withTypeScript = require('@zeit/next-typescript')
const withCustomBabelConfigFile = require('next-plugin-custom-babel-config')

module.exports = withSass(
  withCustomBabelConfigFile(
    withTypeScript({
      babelConfigFile: path.resolve("./babel.config.js"),
      webpack(config, options) {
        config.resolve.modules.push(path.resolve('./'))
        return config
  }
})))