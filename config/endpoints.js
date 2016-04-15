var host = {
    master: require('./master.js'),
    branch: require('./branch.js')
};

var ENV;

module.exports = function(env) {
    if (env) {
        ENV = host[env];
        return;
    }
    return ENV;
};
