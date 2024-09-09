// workaround to next-plugin-preval not working with ES6 modules
// https://github.com/ricokahler/next-plugin-preval/issues/122
const createNextPluginPreval = require('next-plugin-preval/config');
const withNextPluginPreval = createNextPluginPreval();

module.exports = withNextPluginPreval;
