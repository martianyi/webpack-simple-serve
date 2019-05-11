#!/usr/bin/env node

const program = require('commander');

program.option('-c, --config', 'webpack config', 'webpack.config.js');

program.parse(process.argv);
