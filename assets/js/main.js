window.onload = function(){

    fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
      .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then(data => {
        

        let element = document.getElementById("pokemon");

        element.innerHTML = `<img src = '${data.sprites.front_default}'/>
        <li class= "order"><span>${data.order}</span></li>
        <li class= "name"><span>${data.name}</span></li>
        `;
     
    });  
  

}


