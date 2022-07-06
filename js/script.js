var trackEl = document.querySelector("#track");

var APIkey = "3f23fb6428b4807660fd52a96c74a89d";




var getArtistInfo = function(){

var artist = "Prodigy";

var queryURL = "https://api.musixmatch.com/ws/1.1/artist.search?q_artist="+artist+"&page_size=5&apikey="+APIkey;


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