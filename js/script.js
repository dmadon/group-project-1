var trackEl = document.querySelector("#track");

var APIkey = "439128-bootcamp-AZT0NTTN";




var getArtistInfo = function(){

var artist = "weezer";

var queryURL = "https://tastedive.com/api/similar?q="+artist+"&"+APIkey;


fetch(queryURL)
    .then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log(data);
            })
        }

    })




}

getArtistInfo();