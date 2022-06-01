const  getElementsPokemons = (pokemon) =>{
    //console.log(pokemon)
      //creamos elemento
  const divCards=document.createElement("div");
  divCards.classList.add("poke-card")
  const divInner = document.createElement("div");
  divInner.classList.add("card-inner");
  const div = document.createElement("div");
  div.classList.add("collection");
  const aNumber = document.createElement("p");
  aNumber.innerHTML = pokemon.id;
  aNumber.classList.add("id"); 
  const divContainerImage = document.createElement("div");
  divContainerImage.classList.add("Img-pokemon");
  let img = document.createElement("IMG");
   img.src = pokemon.sprites.front_default;
  const aNameBack = document.createElement("div");
  aNameBack.innerHTML = pokemon.name;
  aNameBack.classList.add("name");
  const pType = document.createElement("p");
  pType.classList.add("type");   
  pType.innerHTML= "Type: " + pokemon.types[0].type.name;
  const pAbility = document.createElement("p");
  pAbility.classList.add("ability");   
  pAbility.innerHTML= "Ability: " + pokemon.abilities[0].ability.name;
    //añadiendo el nodo
    document.getElementById("myDIV").appendChild(divCards);
    div.appendChild(aNumber);
    divContainerImage.appendChild(img);
    div.appendChild(divContainerImage);
    div.appendChild(aNameBack);
    div.appendChild(pType);
    div.appendChild(pAbility);
    divInner.appendChild(div);
    divCards.appendChild(divInner);
    return divCards;
   }

   export default getElementsPokemons;