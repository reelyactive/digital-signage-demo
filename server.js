var barnowl = require('barnowl');
var barnacles = require('barnacles');

var middleware = new barnowl( { enableMixing: true } );
var notifications = new barnacles();

middleware.bind( { protocol: 'serial', path: 'auto' } ); // See barnowl docs
notifications.bind( { barnowl: middleware } );

notifications.addService({
    service: "websocket",
    namespace: "/demo",
    ignoreInfrastructureTx: true
});
