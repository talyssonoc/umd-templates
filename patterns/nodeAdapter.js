if (typeof module === 'object' && typeof define !== 'function') {
    var define = function (factory) {
        module.exports = factory(require, exports, module);
    };
}

define(function (require, exports, module) {
<% dependencies.forEach(function(d) { %>
var <%= d.param %> = require('<%= (d.cjs || d.name) %>');
<% }); %>

<%= contents %>

module.exports = <%= exports %>;
});
