


var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpUkZybmVCMm1rSk9PelZMUE1UUHBTaEtYazdlYXNLZnVtZjdJTTc1WG53YmE4dzh0cSIsImp0aSI6IjhhZmE4MjVlZDZiN2YzODJiZGMzYTViNjEwNTMyY2U2NmJhNDJjN2E5NWRlZjc2ZDdlYzk2MDNlNjUzOTc3MDE4ZTNjN2RjZDExZTAwODYxIiwiaWF0IjoxNjU3MTM5OTA0LCJuYmYiOjE2NTcxMzk5MDQsImV4cCI6MTY1NzE0MzUwNCwic3ViIjoiIiwic2NvcGVzIjpbXX0.Oa39GterB_lCZeck5yuMxVhsdIjOztXqCGoYHuc1U9mY2lWOXyEDUaxkmKa6cvFEkNF8qwKQWDBp5Fi_fuapCWaMCN9EW1vBRm35-MK9J6ifMoM8wcP4vsQENCmQGUBDC9W8p5vXk6Ldz9nowu_tQzdGwnlmD2jHwylgh9FlnlBfJ0K9hjUE2CJNIr6c92p6UtpLZ5SFoQ6sLeofcfx3n9LZfAfzIHZR8rr9ZNOPZtg2c3vo4tCnuUNfm9WAvJtOf1DO_0b_JERHLtlcK88xRaF7YP8Ot0oSmvQi0ERQnnJEXwmZOF-aepAEc0e62GrM72h4Ft31cHkRsWw__JofVw"


var getInfo = function(){

var animalbreed = "great dane"; 

var queryURL = "https://api.petfinder.com/v2/animals?breed="+animalbreed;


fetch(queryURL,{headers:{"Authorization":"Bearer "+token}})
    .then(function(response){
        if(response.ok){
            response.json().then(function(data){
                console.log(data);
            })
        }

    })




}

getInfo();