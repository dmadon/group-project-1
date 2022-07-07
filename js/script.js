var breedEl = document.querySelector("#breed");
var animalInfoEl = document.querySelector("#animalInfo");
var breedInputEl = document.querySelector("#breed");


var APIkey = "iRFrneB2mkJOOzVLPMTPpShKXk7easKfumf7IM75Xnwba8w8tq";
var secret = "sEVE2RVHpkQuVbJkDVdwWZQDMCoyNgYk5EGdVvqP";
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpUkZybmVCMm1rSk9PelZMUE1UUHBTaEtYazdlYXNLZnVtZjdJTTc1WG53YmE4dzh0cSIsImp0aSI6IjY4MjZmOTYyZDlkMWI3NDNjOTc1MDFhMzc4Yzk4NTI0NWI4OTE2MWEyZWIwYjk2MDRjMGU4MGM3M2U1OTZjNmM0NDEzMzQyMGFiMzYyOGRjIiwiaWF0IjoxNjU3MTQzNTQ1LCJuYmYiOjE2NTcxNDM1NDUsImV4cCI6MTY1NzE0NzE0NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.Kf9ZAmp8yHLuYtYjTr5crV70PZ-nv0beDlsXglutZtWId57DscbD49fj__LJNW9SvWlCft0TOtCL7BiX1fZs8lqA83-Qgp3ph9mdYUeck7mEAerArHUV2IYU2Nop2eEa11ikhX_ThGCDQMP1XxlZB3j7oupHfTyYy_TccMUKqQGQkvcFI6nmvk_zLuylCkQG6CY1p6tEnqbBShCHO1SKgvcrikk0aXJHg2nD_ceEfvnd6PTLninewfolj7OiKULXS9_aSPJ9vNK1pPs5gW2R7WFFWEswsE2saJg119rLyc_nZE4Y8UluR9M9r8k4Kv721kXERqIIJyzg1CwC4URsmQ";


var getInfo = function(){

var animalbreed = breedInputEl.value; 

var queryURL = "https://api.petfinder.com/v2/animals?breed="+animalbreed;


fetch(queryURL,{headers:{"Authorization":"Bearer "+token}})
    .then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log(data);
                for(i=0; i<data.animals.length; i++){
                    var petName = document.createElement("h1");
                    petName.textContent=(data.animals[i].name);
                    animalInfoEl.appendChild(petName);

                    var petType = document.createElement("h2");
                    petType.textContent=(data.animals[i].type);
                    animalInfoEl.appendChild(petType);

                    if(data.animals[i].breeds.secondary){
                        var secondaryBreed = (", "+data.animals[i].breeds.secondary);
                    }
                    else {
                        var secondaryBreed = ("");
                    }

                    var petBreed = document.createElement("h2");
                    petBreed.textContent=(data.animals[i].breeds.primary+secondaryBreed);
                    animalInfoEl.appendChild(petBreed);
                }

            })
        }

    })

}

getInfo();