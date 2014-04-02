var WV = document.getElementById('webView');


//setting the device ready state in the webveiw
document.addEventListener("deviceready", function (e) {
    var eval = WV.invokeScriptAsync('eval', 'deviceReady()');

    setTimeout(function () { eval.start() }, 1500);
}, false);




//setting up the receiver for GEo events
WV.addEventListener('MSWebViewFrameNavigationStarting', function (e) {
    var eventName = e.uri.split('EVENT=');
    if (eventName = 'geoEvent') {

        //make call to real geo
        navigator.geolocation.getCurrentPosition(function (g) {
            returnEvent(g);
        }, function (g) { console.log('error') });
        //inject results into webview
        var returnEvent = function (g) {
            var evalString = 'var geoobj = {}; geoobj.coords = {} ;geoobj.coords.longitude = ' + g.coords.longitude + '; geoobj.coords.latitude = ' + g.coords.latitude + '; geoReady(geoobj)';
            var eval = WV.invokeScriptAsync('eval', evalString);
            eval.start();

        };
    }



});

