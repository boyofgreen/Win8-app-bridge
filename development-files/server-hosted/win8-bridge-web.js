

var eventBecon = document.createElement('iframe');
document.getElementsByTagName('body')[0].appendChild(eventBecon);
eventBecon.id = 'eventBecon';
eventBecon.style.cssText = 'width:1px; height:1px'


 var EB = document.getElementById('eventBecon');
        //ready event bridge
        var ReadyEvent = document.createEvent('Event');
        ReadyEvent.initEvent("deviceready", true, false);
        // Dispatch the event.
        var deviceReady = function () {
            console.log('fire device ready ++++++++++');
            document.dispatchEvent(ReadyEvent);
        };
EB.style.width = "10px";
EB.style.height = "10px";
EB.style.border = "5px solid green";
   


        //geolocation bridge 
        if(!navigator.geolocation){
        navigator.geolocation = {};
        //set up event from result of real geo
        var geoEvent = document.createEvent('Event');
        geoEvent.initEvent("geoEvent", true, false);
        var geoReady = function (evtObj) { document.dispatchEvent(geoEvent, evtObj) };
        //set up false geoobject
        navigator.geolocation.getCurrentPosition = function (success, error, options) {
            console.log('calling the fake geo location');
            EB.src = 'becon.html?EVENT=geoEvent';
            document.addEventListener('geoEvent', function (e) {
                setTimeout(success, 0, geoobj);
            });

        };

    };
