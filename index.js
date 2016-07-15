var loaderUtils = require('loader-utils');

module.exports = function(source) {
    this.cacheable && this.cacheable();
		var query = loaderUtils.parseQuery(this.query);
		var envs = ['development','integration','testing','production'];
		var ENV = envs.indexOf(query.env) !== -1 ? query.env : 'development'
    //开发环境:'development'
    //联调环境:'integration'
    //测试环境:'testing'
    //线上环境:'production'
    return source.replace(/ENVIRONMENT/g, ENV);
};
