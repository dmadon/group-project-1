var animalInfoEl = document.querySelector("#animalInfo");
var breedInputEl = document.querySelector("#breed");


var APIkey = "iRFrneB2mkJOOzVLPMTPpShKXk7easKfumf7IM75Xnwba8w8tq";
var secret = "sEVE2RVHpkQuVbJkDVdwWZQDMCoyNgYk5EGdVvqP";
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpUkZybmVCMm1rSk9PelZMUE1UUHBTaEtYazdlYXNLZnVtZjdJTTc1WG53YmE4dzh0cSIsImp0aSI6IjAzOGI5YTY1MWIzODhlZWYyZjVmYmM2ZTc2MDc2N2E3YjZiNmQzODg5YzZhYTk2NTczM2YyZGVlMGNjY2Y1ZDU3OTBiOGUyYzc4ZWI3NTJjIiwiaWF0IjoxNjU3MjI3MDQ2LCJuYmYiOjE2NTcyMjcwNDYsImV4cCI6MTY1NzIzMDY0Niwic3ViIjoiIiwic2NvcGVzIjpbXX0.o2e-Dd_D5ZOfXVOe3j8kWR-qs0bjGBaCnvtoXh5QOt5mPZIWXmQLZPnD24qh6zFCp4nZ2CbP3xxkykSE_xR-WNw4YXNgwKBesQxbltJOS6XFwSSH8p2y0Ev2u1GY0RNqbm8TsXzX1QmBNFueBFaHPjNU6eAJrzXWXl-aQTPR7bNkF8acib4eKV4bt0q6wbkUPmtzJxgbJVi4_Pe4DT9HbR3RDje6ujAvh0CuWc3NXOk8ZJYr12EVCX2_-XBWQKJng4OfcumQDHjFumRzTSihU72COKYRxxUjvtZzuQjIdqiMvKQvhTl5YZl2hUXHFmXTjsddRGVHXq80kHfHxTdogA";


var getInfo = function(){

    if(document.getElementsByClassName("animal-info-item")){
        document.querySelectorAll(".animal-info-item").forEach(function(a){
            a.remove()
          })
        }


var animalbreed = breedInputEl.value; 

var queryURL = "https://api.petfinder.com/v2/animals?breed="+animalbreed;


fetch(queryURL,{headers:{"Authorization":"Bearer "+token}})
    .then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log(data);
                for(i=0; i<data.animals.length; i++){

                    var animalCard = document.createElement("article");
                    animalCard.classList=("animal-card");


                    var primPhoto = document.createElement("img");
                    primPhoto.classList=("animal-info-item");
                    primPhoto.src=(data.animals[i].primary_photo_cropped.small);
                    primPhoto.height=(60);
                    animalCard.appendChild(primPhoto);

                    var petName = document.createElement("h1");
                    petName.classList=("animal-info-item");
                    petName.textContent=(data.animals[i].name);
                    animalCard.appendChild(petName);

                    var petType = document.createElement("p");
                    petType.classList=("animal-info-item");
                    petType.textContent=(data.animals[i].type);
                    animalCard.appendChild(petType);

                    if(data.animals[i].breeds.secondary){
                        var secondaryBreed = (", "+data.animals[i].breeds.secondary);
                    }
                    else {
                        var secondaryBreed = ("");
                    }

                    var petBreed = document.createElement("p");
                    petBreed.classList=("animal-info-item");
                    petBreed.textContent=(data.animals[i].breeds.primary+secondaryBreed);
                    animalCard.appendChild(petBreed);

                    animalInfoEl.appendChild(animalCard);
                }

            })
        }

    })

}

breedInputEl.addEventListener("change",getInfo);
// getInfo();