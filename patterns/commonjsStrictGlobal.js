<%
    var amdImports = ['\'exports\''];
    var cjsImports = (cjs.length ? ('exports, ' + cjs) : 'exports');
    var globalsImports = (global.length ? (', ' + global) : '');
    var newParam = (param.length ? ('exports, ' + param) : 'exports');
    var defineParam = (param.length ? (', ' + param) : '');

    dependencies.forEach(function(d) {
        amdImports.push('\'' + (d.amd || d.name) + '\'');
    });

    amdImports = '[' + amdImports.join(', ') + ']';

%>(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(<%= amdImports %>, function (<%= newParam %>) {
            factory((root.<%= namespace %> = exports)<%= defineParam %>);
        });
    } else if (typeof exports === 'object') {
        factory(<%= cjsImports %>);
    } else {
        factory((root.<%= namespace %> = {})<%= globalsImports %>);
    }
}(this, function (<%= newParam %>) {
<%= contents %>

exports.<%= namespace %> = <%= exports %>;
}));
