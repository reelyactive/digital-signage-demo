digital-signage-demo
====================


Real-time presence-triggered content
------------------------------------

Change the content of a webpage based on the presence or absence of mobile devices running reelyApp.  There are four options:

1. No devices running reelyApp are present
2. One or more iOS devices running reelyApp are present
3. One or more Android devices running reelyApp are present
4. Both iOS and Android devices running reelyApp are present

![digital-signage-demo](http://reelyactive.com/images/digital-signage-demo.gif)


Installation
------------

Clone the repo, then install the necessary packages for Node.js by running:

    npm install

Install reelyApp for [Android](https://play.google.com/store/apps/details?id=com.reelyactive.reelyapp) and [iOS](https://itunes.apple.com/us/app/reelyapp-for-ios/id1121042765).


Running the demo
----------------

With a [minimal starter kit](http://shop.reelyactive.com/products/starterkit-min) connected to your computer (or to the digital signage computer), from the root of the repo, run the server as follows:

    node server

Then open index.html in your favourite web browser.  You should see a picture of a stuffed barnowl.

Enabled/disable anonymous detection within reelyApp for iOS and Android to test all four cases, and watch how the webpage responds.


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
