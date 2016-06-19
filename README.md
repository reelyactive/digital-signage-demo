digital-signage-demo
====================


Real-time presence-triggered content
------------------------------------

Change the content of a webpage based on the presence or absence of mobile devices running reelyApp.  There are four options:
1. No devices running reelyApp are present
2. One or more iOS devices running reelyApp are present
3. One or more Android devices running reelyApp are present
4. Both iOS and Android devices running reelyApp are present


Installation
------------

Clone the repo.


Running the demo
----------------

In the directory of the cloned repo install barnowl and barnacles as follows:

    npm install barnowl
    npm install barnacles

With a [minimal starter kit](http://shop.reelyactive.com/products/starterkit-min) connected to your computer (or to the digital signage computer), in the same directory, run the following code:

```javascript
var barnowl = require('barnowl');
var barnacles = require('barnacles');

var middleware = new barnowl( { enableMixing: true } );
var notifications = new barnacles( { disappearanceMilliseconds: 5000 } );

middleware.bind( { protocol: 'serial', path: 'auto' } );
notifications.bind( { barnowl: middleware } );

notifications.addService({
    service: "websocket",
    namespace: "/demo",
    ignoreInfrastructureTx: true
});
```

Then open index.html in your favourite browser.  Enabled/disable anonymous detection within reelyApp for iOS and Android to test all four cases, and watch how the webpage responds.


License
-------

MIT License

Copyright (c) 2016 reelyActive

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
