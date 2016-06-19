/**
 * Copyright reelyActive 2016
 * We believe in an open Internet of Things
 */


// Constant definitions
DEFAULT_SOCKET_URL = 'http://localhost:3005/demo';
IMAGE_NEITHER = 'images/neither.jpg';
IMAGE_IOS = 'images/iOS.jpg';
IMAGE_ANDROID = 'images/android.jpg';
IMAGE_BOTH = 'images/both.jpg';
UUID_IOS = '7265656c7941707020666f7220694f53';
UUID_ANDROID = '7265656c7941707020416e64726f6964';


/**
 * digitalsignage Module
 * All of the JavaScript specific to the demo is contained inside this
 * angular module.  The only external dependencies are:
 * - beaver (reelyActive)
 * - socket.io (btford)
 */
angular.module('digitalsignage', ['btford.socket-io', 'reelyactive.beaver'])


/**
 * Socket Factory
 * Creates the websocket connection to the given URL using socket.io.
 */
.factory('Socket', function(socketFactory) {
  return socketFactory({
    ioSocket: io.connect(DEFAULT_SOCKET_URL)
  });
})


/**
 * SignCtrl Controller
 * Handles the manipulation of all variables accessed by the HTML view.
 */
.controller('SignCtrl', function($scope, Socket, beaver) {

  var iOSDevices = [];
  var androidDevices = [];
  $scope.content = IMAGE_NEITHER;

  // beaver.js listens on the websocket for events
  beaver.listen(Socket);

  // Handle events pre-processed by beaver.js
  beaver.on('appearance', function(data) {
    checkForApp(data);
  });
  beaver.on('keep-alive', function(data) {
    checkForApp(data);
  });
  beaver.on('disappearance', function(data) {
    scrubFromList(data);
  });


  // Update content based on the devices present, if any
  function updateContent() {
    if((iOSDevices.length > 0) && (androidDevices.length > 0)) {
      $scope.content = IMAGE_BOTH;
    }
    else if(iOSDevices.length > 0) {
      $scope.content = IMAGE_IOS;
    }
    else if(androidDevices.length > 0) {
      $scope.content = IMAGE_ANDROID;
    }
    else {
      $scope.content = IMAGE_NEITHER;
    }
  }


  // Check if we're sensitive to the given device
  function checkForApp(data) {
    if(data.tiraid.hasOwnProperty('identifier') &&
       data.tiraid.identifier.hasOwnProperty('advData')) {

      var deviceId = data.tiraid.identifier.value;
      var advData = data.tiraid.identifier.advData;
      var uuid = advData.complete128BitUUIDs ||
                 advData.noncomplete128BitUUIDs;

      switch(uuid) {
        // It's reelyApp for iOS
        case UUID_IOS:
          if(iOSDevices.indexOf(deviceId) === -1) {
            iOSDevices.push(deviceId);
          }
          break;
        // It's reelyApp for Android
        case UUID_ANDROID:
          if(androidDevices.indexOf(deviceId) === -1) {
            androidDevices.push(deviceId);
          }
          break;
        // It's neither
        default:
          return;
      }

      updateContent();
    }
  }


  // Remove disappeared devices from our lists
  function scrubFromList(data) {
    var deviceId = data.tiraid.identifier.value;
    var iOSIndex = iOSDevices.indexOf(deviceId);
    var androidIndex = androidDevices.indexOf(deviceId);
    if(iOSIndex !== -1) {
      iOSDevices.splice(iOSIndex, 1);
      updateContent();
    }
    if(androidIndex !== -1) {
      androidDevices.splice(androidIndex, 1);
      updateContent();
    }
  }

});
