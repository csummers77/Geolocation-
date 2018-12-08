if ("geolocation" in navigator) {
    /* geolocation is available */
} else {
    /* Geolocation is not available */
}

navigator.geolocation.getCurrentPosition(function(positon)  {
    do_something(positon.coords.latitude, positon.coords.longitude);
}); 

var watchID = navigator.geolocation.watchPosition(function(positon){
    do_something(positon.coords.latitude, positon.coords.longitude);
});

navigator.geolocation.clearWatch(watchID);

function geo_success(positon) {
    do_something(positon.coords.latitude, positon.coords.longitude);
}
function geo_error() {
    alert("sorry, no positon available ");
}
var geo_options = {
    enableHighAccuracy: true,
    maxiumAge: 30000,
    timeout: 27000
};
var wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);

function errorCallback(error) {
    alert('ERROR(' + error.code + '):' + error.message);
};

function geoFindMe() {
    var output = document.getElementById("out");
    if (!navigator.geolocation){
        output.innerHTML = "<p>Geoloction is not supported by your browser</p>";
        return;
    }
    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
    
        output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
        var img = new Image();
        img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

        output.appendChild(img);
    }
    function error() {
        output.innerHTML = "Unable to retrieve your location";
    }
    output.innerHTML = "<p> Locating.....</p>";
    navigator.geolocation.getCurrentPosition(success, error);
} 