var config = require('../../config');

var paths = {
    bower: 'bower_components/',
    css: config.CSS_DEST_PATH + '**/*.css',
    styl_compiled: config.CSS_DEST_PATH + '**/*.styl.css',
    styl_lib: config.CSS_DEST_PATH + 'lib.styl',
    html: 'src/templates/**/*.html',
    include_css: 'include.css',
    include_js: 'include.js',
    js: config.JS_DEST_PATH + '**/*.js',
};
paths.require = paths.bower + 'requirejs/require.js';
paths.almond = paths.bower + 'almond/almond.js';
paths.init = paths.bower + 'commonplace/dist/core/init.js';
paths.styl = [config.CSS_DEST_PATH + '**/*.styl', '!' + paths.styl_lib];

module.exports = paths;
