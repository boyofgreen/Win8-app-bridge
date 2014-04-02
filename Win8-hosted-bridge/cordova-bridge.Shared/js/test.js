


document.addEventListener("deviceready", function (e) {
    console.log('device ready %%%%%%%%%%%%')
    document.getElementById('deviceState').textContent = "DEVICE READY";

    //test the geolocation API
    
    navigator.geolocation.getCurrentPosition(function (e) {
        
        document.getElementById('geoState').textContent = 'GEO NOW READY= ' + e.coords.longitude;

    }, function (e) { console.log('error') });
     

    //test the notifications

    navigator.notification.confirm('winner',
        function () { document.getElementById('notiicationState').textContent = 'Notification READY' })







}, false);


