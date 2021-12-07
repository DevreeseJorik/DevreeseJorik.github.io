"use strict";
// global variable declaration

const lanIP = `${window.location.hostname}:5000`;
const baseUrl = "https://pokeapi.co/api/v2/location-area/";
let serverEndPoint = baseUrl;
const customHeaders = new Headers()
customHeaders.append('Accept', 'application/json');

let tileColors = {
  0:'#3E3E56',        
  1:'#3E3E56',        
  2:'green',
  3:'#2aa615',      
  4:'#3E3E56',        
  5:'#3E3E56',        
  6:'#bb7410',      
  7:'#3E3E56',        
  8:'#bb7410',      
  9:'#3E3E56',        
  10:'#3E3E56',       
  11:'#A292BC',     
  12:'#bb7410',     
  13:'#3E3E56',       
  14:'#3E3E56',       
  15:'#3E3E56',       
  16:'#4888f0',
  17:'#4888f0',
  18:'#4888f0',
  19:'#4888f0',
  20:'#4888f0',
  21:'#4888f0',
  22:'#4888f0',
  23:'#4888f0',
  24:'#3E3E56',
  25:'#4888f0',
  26:'#3E3E56',
  27:'#3E3E56',
  28:'#3E3E56',
  29:'#3E3E56',
  30:'#3E3E56',
  31:'#3E3E56',
  32:'#56b3e0',
  33:'#e3c000',
  34:'#4888f0',
  35:'#3E3E56',
  36:'#3E3E56',
  37:'#3E3E56',
  38:'#3E3E56',
  39:'#3E3E56',
  40:'#3E3E56',
  41:'#3E3E56',
  42:'#4888f0',
  43:'#3E3E56',
  44:'#3E3E56',
  45:'#3E3E56',
  46:'#3E3E56',
  47:'#3E3E56',
  48:'#a090f0',
  49:'#a090f0',
  50:'#a090f0',
  51:'#a090f0',
  52:'#a090f0',
  53:'#a090f0',
  54:'#a090f0',
  55:'#a090f0',
  56:'#D3A000',
  57:'#D3A000',
  58:'#D3A000',
  59:'#D3A000',
  60:'#D3A000',
  61:'#D3A000',
  62:'#D3A000',
  63:'#D3A000',
  64:'#ffd000',
  65:'#ffd000',
  66:'#ffd000',
  67:'#ffd000',
  68:'#3E3E56',
  69:'#3E3E56',
  70:'#3E3E56',
  71:'#3E3E56',
  72:'#3E3E56',
  73:'#ffd000',
  74:'#ffd000',
  75:'#C76000',
  76:'#C76000',
  77:'#3E3E56',
  78:'#3E3E56',
  79:'#3E3E56',
  80:'#3E3E56',
  81:'#3E3E56',
  82:'#3E3E56',
  83:'#3E3E56',
  84:'#3E3E56',
  85:'#3E3E56',
  86:'#afb000',
  87:'#afb000',
  88:'#afb000',
  89:'#a090f0',
  90:'#3E3E56',
  91:'#3E3E56',
  92:'#3E3E56',
  93:'#3E3E56',
  94:'#f03000',
  95:'#f03000',
  96:'#3E3E56',
  97:'#3E3E56',
  98:'#f03000',
  99:'#f03000',
  100:'#3E3E56',
  101:'#f03000',
  102:'#3E3E56',
  103:'#a0a000',
  104:'#3E3E56',
  105:'#f03000',
  106:'#f03000',
  107:'#3E3E56',
  108:'#f03000',
  109:'#f03000',
  110:'#f03000',
  111:'#f03000',
  112:'#C7B000',
  113:'#C79000',
  114:'#C79000',
  115:'#C79000',
  116:'#C79000',
  117:'#C79000',
  118:'#C7A550',
  119:'#C7A550',
  120:'#C7A550',
  121:'#C7A550',
  122:'#C7A550',
  123:'#40a000',
  124:'#4888f0',
  125:'#C7A550',
  126:'#3E3E56',
  127:'#3E3E56',
  128:'#f7a000',
  129:'#3E3E56',
  130:'#3E3E56',
  131:'#0690b0',
  132:'#3E3E56',
  133:'#00eee0',
  134:'#4290e0',
  135:'#3E3E56',
  136:'#0ddd70',
  137:'#3E3E56',
  138:'#3E3E56',
  139:'#3E3E56',
  140:'#3E3E56',
  141:'#3E3E56',
  142:'white',
  143:'white',
  144:'#3E3E56',
  145:'#3E3E56',
  146:'#3E3E56',
  147:'#3E3E56',
  148:'#3E3E56',
  149:'#3E3E56',
  150:'#3E3E56',
  151:'#3E3E56',
  152:'#3E3E56',
  153:'#3E3E56',
  154:'#3E3E56',
  155:'#3E3E56',
  156:'#3E3E56',
  157:'#3E3E56',
  158:'#3E3E56',
  159:'#3E3E56',
  160:'#b27030',
  161:'#8da9cb',
  162:'#6483a7',
  163:'#52749d',
  164:'#928970',
  165:'#927040',
  166:'#409000',
  167:'#559060',
  168:'#b9d0eb',
  169:'#3E3E56',
  170:'#3E3E56',
  171:'#3E3E56',
  172:'#3E3E56',
  173:'#3E3E56',
  174:'#3E3E56',
  175:'#3E3E56',
  176:'#3E3E56',
  177:'#3E3E56',
  178:'#3E3E56',
  179:'#3E3E56',
  180:'#3E3E56',
  181:'#3E3E56',
  182:'#3E3E56',
  183:'#3E3E56',
  184:'#3E3E56',
  185:'#3E3E56',
  186:'#3E3E56',
  187:'#3E3E56',
  188:'#3E3E56',
  189:'#3E3E56',
  190:'#3E3E56',
  191:'#3E3E56',
  192:'#3E3E56',
  193:'#3E3E56',
  194:'#3E3E56',
  195:'#3E3E56',
  196:'#3E3E56',
  197:'#3E3E56',
  198:'#3E3E56',
  199:'#3E3E56',
  200:'#3E3E56',
  201:'#3E3E56',
  202:'#3E3E56',
  203:'#3E3E56',
  204:'#3E3E56',
  205:'#3E3E56',
  206:'#3E3E56',
  207:'#3E3E56',
  208:'#3E3E56',
  209:'#3E3E56',
  210:'#3E3E56',
  211:'#3E3E56',
  212:'#3E3E56',
  213:'#3E3E56',
  214:'#3E3E56',
  215:'#B89000',
  216:'#B89000',
  217:'#A88000',
  218:'#A88000',
  219:'#0690a0',
  220:'#3E3E56',
  221:'#3E3E56',
  222:'#3E3E56',
  223:'#3E3E56',
  224:'#0ddd70',
  225:'#0ddd70',
  226:'#0ddd70',
  227:'#3E3E56',
  228:'#06b040',
  229:'white',
  230:'#3E3E56',
  231:'#3E3E56',
  232:'#3E3E56',
  233:'#3E3E56',
  234:'#3E3E56',
  235:'#3E3E56',
  236:'#3E3E56',
  237:'#3E3E56',
  238:'#3E3E56',
  239:'#3E3E56',
  240:'#3E3E56',
  241:'#3E3E56',
  242:'#3E3E56',
  243:'#3E3E56',
  244:'#3E3E56',
  245:'#3E3E56',
  246:'#3E3E56',
  247:'#3E3E56',
  248:'#3E3E56',
  249:'#3E3E56',
  250:'#3E3E56',
  251:'#3E3E56',
  252:'#3E3E56',
  253:'#3E3E56',
  254:'#3E3E56',
  255:'#3E3E56',
  }

let areaAPInames = {
  326:"eterna-forest-area",
  327:"sinnoh-route-205-east-towards-eterna-city",
  328:"eterna-city-area",
  329:"eterna-city-area",
  330:"sinnoh-route-211-west-towards-eterna-city",
  354:"eterna-forest-area",
  355:"eterna-forest-area",
  357:"eterna-city-area",
  382:"fuego-ironworks-area",
  383:"sinnoh-route-205-south-towards-floaroma-town",
  386:"sinnoh-route-206-area",
  411:"floaroma-town-area",
  412:"sinnoh-route-205-south-towards-floaroma-town",
  415:"sinnoh-route-206-area",
  440:"floaroma-town-area",
  441:"sinnoh-route-205-south-towards-floaroma-town",
  442:"valley-windworks-area",
  444:"sinnoh-route-206-area",
  469:"sinnoh-route-204-north-towards-floaroma-town",
  473:"sinnoh-route-206-area",
  498:"sinnoh-route-204-south-towards-jubilife-city",
  502:"sinnoh-route-207-area",
  523:"canalave-city-area",
  524:"sinnoh-route-218-area",
  525:"sinnoh-route-218-area",
  527:"jubilife-city-area",
  526:"jubilife-city-area",
  528:"sinnoh-route-203-area",
  529:"sinnoh-route-203-area",
  530:"oreburgh-city-area",
  531:"oreburgh-city-area",
  555:"jubilife-city-area",
  556:"jubilife-city-area",
  560:"oreburgh-city-area",
  585:"sinnoh-route-202-area",
  611:"verity-lakefront-area",
  612:"sinnoh-route-201-area",
  613:"sinnoh-route-201-area",
  614:"sandgem-town-area",
  641:"twinleaf-town-area",
  643:"sinnoh-route-219-area",
  672:"sinnoh-route-219-area", //actually 220, but same data, api doesn't provide route 220
  673:"sinnoh-route-219-area",
  674:"sinnoh-route-221-area",
  675:"sinnoh-route-221-area",
  676:"sinnoh-route-221-area",
}

const blacklist = ["jubilife-city-area","sandgem-town-area","verity-lakefront-area","eterna-city-area","floaroma-town-area"]; // list of areas not implemented in API :(
const invalidMaps = ["void","wall chunk"];
let cachedAreaEncounters = {};
let encounterTypes = {
  "grass":[2,3],
  "water":[16,20,21,22,23,25]}
let opacityTable = {  
  "grass":0,
  "water":0}

let map_layout;
let game_id = 0; // 0 = Diamond, 1 = Pearl, 2 = Platinum
let selectedMap = 672;//641;
let area = areaAPInames[selectedMap];

const isMapValid = function(tempMap) {
  if (tempMap > 700) {return false};
  if (tempMap < 0) {return false};
  if (invalidMaps.indexOf(map_layout[`Index${tempMap}`])!=-1) {return false}; // if map is not pure walls/void
  return true;
}

const isDirectionValid = function(direction) {
  let tempMap = selectedMap;
  if (direction == "up") { tempMap -= 29; }
  if (direction == "down") { tempMap += 29; }
  if (direction == "left") {tempMap -= 1;}
  if (direction == "right") {tempMap += 1;}
  return [isMapValid(tempMap),tempMap];
}

const move = function(direction) {
  let data = isDirectionValid(direction);
  if (data[0]) {
    selectedMap = data[1];
    console.log(selectedMap);
    console.log(areaAPInames[selectedMap]);
    createMap();
    return
  }
}

const filename = function(url) { 
  return url?url.split('/').pop().split('#').shift().split('?').shift():null;
};

const getTileColor = function (tile_data){
  let tile_id = tile_data & 0xFF;
  let collision = tile_data>>8;

	if ((tile_id == 0x00) & (collision > 0x7F)) {return "#CCCCCC";}
	return tileColors[tile_id];
};

// add event listeners
const listenDirections = function() {
  let dirBtns = document.querySelectorAll(".direction");
  for (let dirBtn of dirBtns) {
    dirBtn.addEventListener('click',function(){
      // console.log(dirBtn.getAttribute("value"))
      move(dirBtn.getAttribute("value"));
    });
  }
}

const listenTiles = function() {
  let encTiles;
  for (let encounterType in encounterTypes) {
    // console.log(encounterType);
    for (let subTile of encounterTypes[encounterType]) {
        encTiles = document.querySelectorAll(`.tile_${subTile}`);
      for (let encTile of encTiles) {
        encTile.classList.add(`${encounterType}`)
        encTile.addEventListener('click',function(){
        opacityTable[encounterType] = !opacityTable[encounterType];
        //console.log(`showing ${encounterType}encounters: ${opacityTable[encounterType]}`); 
        updateTileOpacity();
        });
      }
    }
  }
  updateTileOpacity() // run once to update all opacities to correct value upon loading new map
}

// show data
const updateTileOpacity = function() {
  // console.log("changing tile opacities!")
  let Tiles = document.querySelectorAll(".tile")
  let opacityChanges = false;
  let encTiles;

  for (let encType in opacityTable) {
    if (opacityTable[encType]) {
      opacityChanges = true;
    }
  }

  // if opacity changes should occur
  if (opacityChanges) {
    for (let tile of Tiles) {
        tile.classList.add("opac50");
    };
    for (let encType in opacityTable) {
      if (opacityTable[encType]) {
        for (let subTile of encounterTypes[encType]) {
          encTiles = document.querySelectorAll(`.tile_${subTile}`);
          for (let encTile of encTiles) {
            encTile.classList.remove("opac50");
          }
        }
      }
    }
    return;
  };

  // else, remove all opacity changes
  for (let tile of Tiles) {
    tile.classList.remove("opac50");
  };
  updateEncounters()
}
const createMap = function () {
  let map = document.querySelector(".game_map");
  map.innerHTML = "";

  for (let row of map_layout[`Index${selectedMap}`])
    {
    let links ="";
    for (let value of row) {
      let link_data = `<div class="tile_${value} tile" style="background-color:${getTileColor(value)}"><wbr></div>`;
      links += link_data;
    };
    map.innerHTML += `<div class="map_row" id="${0}">${links}</div>`;
  };
  listenTiles()
};

const showEncounters = function (pokemon_encounters) {
  let EncounterList = document.querySelector(".encounter_list");

  EncounterList.innerHTML = ``;
  let EncounterCount = pokemon_encounters.length;
  // console.log(pokemon_encounters);
  let EncounterTable = `<table class="encounter_table">
                        <thead><tr>
                          <th><div>Pokemon</div></th>
                          <th><div>Levels</div></th>
                          <th><div>Method</div></th>
                          <th><div>Rate</div></th>
                        </tr></thead>`;
  for (let encounter of pokemon_encounters) {
    let pokemon = encounter["pokemon"];
    //console.log(pokemon)
    let versionDetails = encounter["version_details"];
    let encounterDetails = versionDetails[game_id]["encounter_details"];
    let detail = encounterDetails[0];
    EncounterTable += `<tbody><tr>
                        <td><div><img src="https://img.pokemondb.net/sprites/diamond-pearl/normal/${pokemon.name}.png" alt="picture of pokemon${pokemon.name}"><p>${pokemon.name}</p></div></td>
                        <td><div>${detail.min_level} - ${detail.max_level}</div></td>
                        <td><div>${detail.method.name}</div></td>
                        <td><div>${Math.min(versionDetails[game_id].max_chance,100)}%</div></td>
                      </tr></tbody>`;
    };
    EncounterList.innerHTML += EncounterTable;
};

// get API data
const updateEncounters = async function() {
  try {
    area = areaAPInames[selectedMap];
    if (blacklist.indexOf(area)==-1) { // if map isn't in the blacklist
      if (area in cachedAreaEncounters) { // if area has been cached
        console.log(`showing cached pokémon for area ${area}`);
        showEncounters(cachedAreaEncounters[area]);
        return;
      } // else get the data from the API
      const getData = () =>  fetch(serverEndPoint + area, { headers: customHeaders }).then((r) => r.json());
      const { pokemon_encounters } = await getData();
        if (pokemon_encounters) {
          //console.log(pokemon_encounters);
          showEncounters(pokemon_encounters);
          cachedAreaEncounters[area] = pokemon_encounters;
          return;
        };
    };
    console.log(`Missing encounter data from API for ${area}`);
  } catch (ex) {
    console.log(ex);
  };
  
};

document.addEventListener("DOMContentLoaded", function () {
  //console.info("DOM loaded");
  updateEncounters();
  fetch('./script/newmaps.json')
      .then(function(resp)
      {return resp.json();})
      .then(function(data){
        map_layout = data["map_layout"]
        createMap();
      }); 

  listenDirections();
});
