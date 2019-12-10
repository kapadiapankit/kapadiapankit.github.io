'use strict';
console.log('Started', self);

self.addEventListener('install', function(event) {
    self.skipWaiting();
    console.log('Installed', event);

});
self.addEventListener('activate', function(event) {
  console.log('Activated', event);
});
self.addEventListener('push', function(event) {
    event.waitUntil(
      self.registration.pushManager.getSubscription()
        .then(function(subscription) {
        return fetch('https://www.scoopwhoop.com/gcmpush/').then(function(response) {
            if (response.status !== 200) {
                throw new Error();
            }
            // Examine the text in the response
            return response.json().then(function(data) {
                if (data.data.error || !data.data.notification) {
                    throw new Error();
                }
                var title = 'ScoopWhoop Notification';
                var body = data.data.notification[0].title;
                var icon = data.data.notification[0].icon;
                var url = data.data.notification[0].url;
                var tag = 'ScoopWhoop';
                var data = {
                    newurl: {
                        updatedurl: url
                    }
                };
                return self.registration.showNotification(title, {
                    body: body,
                    icon: icon,
                    data: data,
                    tag: tag
                })

            });
        })
        return Promise.all(response);
    })
    );
});

self.addEventListener('notificationclick', function(event) {
  	console.log('Notification click: tag ', event.notification.tag);
    event.notification.close();
    var newurl = event.notification.data.newurl;
    var url = newurl.updatedurl;
    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
        .then(function(windowClients) {
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );

});

// function notifyMe() {
  // if (!Notification) {
  //   alert('Desktop notifications not available in your browser. Try Chromium.'); 
  //   console.log("not allowed");
  //   return;
  // }
  // if (Notification.permission !== "granted")
  //   Notification.requestPermission();
  // else {
  // 	console.log("test");
  //   var notification = new Notification('Notification title', {
  //     icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
  //     body: "Hey there! You've been notified!",
  //   });

  //   notification.onclick = function () {
  //     window.open("http://stackoverflow.com/a/13328397/1269037");      
  //   };
    
  // }

// }

// setInterval(function(){
// 	  var title = 'Yay a message.';  
// 	  var body = 'We have received a push message.';  
// 	  var icon = 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png';  
// 	  var tag = 'simple-push-demo-notification-tag';

// 	  event.waitUntil(  
// 	    self.registration.showNotification(title, {  
// 	      body: body,  
// 	      icon: icon,  
// 	      tag: tag  
// 	    }) ;
// }, 10000);
