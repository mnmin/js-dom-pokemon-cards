//console.log(data);

const cardsUl = document.querySelector(".cards");

for (let i = 0; i < data.length; i++) {
  const currentPokemon = data[i];

  console.log(i, currentPokemon)

  const card = document.createElement("li");
  card.className = "card";
  cardsUl.append(card);

  const h2 = document.createElement("h2");
  h2.calssName = "card--title";
  h2.innerText = currentPokemon.name.toUpperCase();
  card.append(h2);

  const cardImg = document.createElement("img");
  cardImg.className = "card--img";
  cardImg.style.width = "256";
  cardImg.src =
    currentPokemon.sprites.other["official-artwork"].front_default;
    card.append(cardImg);

  const cardStatsUl = document.createElement("ul");
  cardStatsUl.className = "card--text";
  card.append(cardStatsUl);

  for(let e = 0; e < currentPokemon.stats.length; e++) {
    const liHp = document.createElement("li");
    console.log(currentPokemon.stats[e])
    liHp.innerText = currentPokemon.stats[e].stat.name.toUpperCase() + ": " + String(currentPokemon.stats[e].base_stat);
    cardStatsUl.append(liHp);
  }

  const pokemonGames = document.createElement("li")
  //pokemonGames.innerText = "Games"
  cardStatsUl.append(pokemonGames)

  let gameList = currentPokemon.game_indices
  let gameListText = ''
  gameList.forEach(gameInfo => {
    console.log(gameInfo)
    //gameListText.length 
    gameListText += gameInfo.version.name + ', '
  })

  pokemonGames.innerText = 'APPEARS IN: ' + gameListText

  // const gameList = document.createElement('li')
  // gameList.innerText = 

  // let gameList = data.game_indices[i];
  
  // gameList.forEach()


  // const gameList = docuemt.createElement('li')
  // gameList.innerText = currentPokemon.game_indices[x].game_index.name.toUpperCase() + ": " + String(currentPokemon.game_indices[x].game_index);
  // cardStatsUl.append(gameList)

  // let pokemonGames = data.game_indices[i]

  // pokemonGames.forEach(game_index => {
  //     pokemonGames.push(game_index)
  //   });


  // for(let x = 0; x < currentPokemon.game_indices.length; x++) {
  //   const pokemonGames = document.createElement("li");
  //   console.log(currentPokemon.game_indices[x])
  //   pokemonGames.innerText = currentPokemon.game_indices[x].game_index.name.toUpperCase() + ": " + String(currentPokemon.game_indices[x].game_index);
  //   cardStatsUl.append(pokemonGames);
  // }

  // const pokemonGames = document.createElement('li');
  // pokemonGames.className = "card--text";
  

}

console.log(data[0]);

// Old Code
 /*
  const liHp = document.createElement("li");
  liHp.innerText = currentPokemon.stats[0].stat.name.toUpperCase() + ": " + String(currentPokemon.stats[0].base_stat);
  cardStatsUl.append(p);

  const liAtt = document.createElement("li");
  liAtt.innerText = currentPokemon.stats[2].base_stat;
  cardStatsUl.append(liAtt);

  const liDef = document.createElement("li");
  liDef.innerText = currentPokemon.stats[3].base_stat;
  cardStatsUl.append(liDef);

  const liSpAtt = document.createElement("li");
  liSpAtt.innerText = currentPokemon.stats[4].base_stat;
  cardStatsUl.append(liSpAtt);

  const liSpDef = document.createElement("li");
  liSpDef.innerText = currentPokemon.stats[5].base_stat;
  cardStatsUl.append(liSpDef);

  const liSpeed = document.createElement("li");
  liSpeed.innerText = currentPokemon.stats[6].base_stat;
  cardStatsUl.append(liSpeed);
  */