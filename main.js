function locateMe() {
  //div id to populate values on html page
  var currlocationdiv = document.getElementById("loglocation");

  /*success callback method to execute location tracking on 
  successfully accepting the loaction tracking on your browser.*/
  const successCallback = (position) => {
    //varibles used for display and time conversion
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var unixtime = position.timestamp;
    var time = new Date(unixtime);

    //populate variable div on html page
    currlocationdiv.innerHTML += `Time: ${time.toLocaleTimeString("it-IT")}
      <p>Latitude: ${latitude}<br>
      Longitude: ${longitude}</p>`;

  };

  /*error result on declining tracking services, geolocator is diabled/declined. */
  const errorCallback = (error) => {
    console.log(error);
    currlocationdiv.innerHTML = "location tracking failed";
  };
  //currentloaction method for current location
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

}


function livetrack() {
  //div id to populate values on html page
  var currlocationdiv = document.getElementById("loglivelocation");

  /*success callback method to execute location tracking on 
  successfully accepting the loaction tracking on your browser.*/
  const successCallback = (position) => {
    //varibles used for display and time conversion
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var unixtime = position.timestamp;
    var time = new Date(unixtime);

    //populate variable div on html page
    currlocationdiv.innerHTML = `Time: ${time.toLocaleTimeString("it-IT")}
    <p>Latitude: ${latitude}<br>
    Longitude: ${longitude}</p>`;

  };

  /*error result on declining tracking services, geolocator is diabled/declined. */
  const errorCallback = (error) => {
    console.log(error);
    currlocationdiv.innerHTML = "location tracking failed";
  };
  //wathc method for live location
  navigator.geolocation.watchPosition(successCallback, errorCallback);
}