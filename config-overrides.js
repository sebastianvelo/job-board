const { override, addWebpackAlias } = require('customize-cra')
const path = require('path')
 
module.exports = override(
  // Configure path alias
  addWebpackAlias({
    "@draftsman": path.resolve(__dirname, 'src/draftsman'),
  })
);