var url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
var btn = document.querySelector("#buttons")
var text = document.querySelector("#joke")

let getjoke = () =>
    { fetch(url)
    .then(data => data.json()) 
    .then (item =>{
        text.textContent= `${item.joke}`;
    });
    }
    btn.addEventListener("click" , getjoke)
    getjoke();