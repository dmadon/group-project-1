var trackEl = document.querySelector("#track");

var APIkey = "439128-bootcamp-AZT0NTTN";




var getArtistInfo = function(){

var artist = "weezer";

var queryURL = "https://tastedive.com/api/similar?q="+artist+"&k="+APIkey;


fetch(queryURL, {method: 'GET',headers:{referrer: "origin", accept:'application/json',},})
    .then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log(data);
            })
        }

    })




}

getArtistInfo();