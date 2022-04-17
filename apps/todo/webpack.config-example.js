// Default config (does not provide documentation for sharing packages)
const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./mfe.config');
module.exports = withModuleFederation(config);
