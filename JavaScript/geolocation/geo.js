if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getparameters,error);
}
function getparameters(info){
    console.log(info);
    console.log(info.coords.longitude);
    console.log(info.coords.longitude);
}
function error(info){
    console.log(info);
    alert('you did not allow us to track ur location');
}