


var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJpUkZybmVCMm1rSk9PelZMUE1UUHBTaEtYazdlYXNLZnVtZjdJTTc1WG53YmE4dzh0cSIsImp0aSI6IjRmMDZiMTAxZGZjYWNjNzljNzA4NDVkNDUxYWNjOGYwZTU4ZjA0NzkwMjBiNTQwMTczZGNhYzM2N2Y4ZmE0MGFjNWZiOGI0YTE5NWRmNjRjIiwiaWF0IjoxNjU3MTM0MDIyLCJuYmYiOjE2NTcxMzQwMjIsImV4cCI6MTY1NzEzNzYyMiwic3ViIjoiIiwic2NvcGVzIjpbXX0.Grx8jAqWVEVNIn5gXzKQ2t8VURKyF3xgu-aY12xg-Igp2NEbvCCmG555yvcFPp56V6b0wRv7YTTaTZ6Zdw1hzwk8nfnyV4CQeCTn8THKxZgn-hhmEJ1Iqb7SgfITJvneYT9vYfUGj522mQKK34Wfv1fYnrwuTYioGLl1pdJks3zLjcQVoh4uJmVc-JjXPKUqV1V3ls6_qKlxS2MpfD7FqUlKQh5eikZBfNlPbLYo9G771pmUCEHGp9V-Og6kdTKgyA2SAEgAS07My7PwnEbvei0pdiRHExB1VcFMczU9Z9noj-pKgj3jfrql1OKK_18PoVrFhwA1uuxEljMJfSz9nw"


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