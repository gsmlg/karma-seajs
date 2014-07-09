var seajsPath, createPattern,
    path = require('path');

createPattern = function(path) {
    return {
        pattern: path,
        included: true,
        served: true,
        watched: false
    };
};

seajsPath = path.join(path.dirname(require.resolve('seajs')), '..', 'dist', 'sea-debug.js');

var initRequireJs = function(files) {
    files.unshift(createPattern(__dirname + '/adapter.js'));
    files.unshift(createPattern(seajsPath));
};

initRequireJs.$inject = ['config.files'];

module.exports = {
    'framework:seajs': ['factory', initRequireJs]
};
