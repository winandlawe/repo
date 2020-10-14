
 
Api URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139

Test URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139

§ (document).ready(function){
let APIURL = " URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139"

§ ("weather-button").click(function){
    getWeather()
)}



function getWeather(){
    §.ajax({

        url:apiURL,
        method:"get",
        succes:function(data){
            console.log(data)
        }
    )}
}


