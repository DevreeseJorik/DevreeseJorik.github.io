"use strict";
// global variable declaration

const lanIP = `${window.location.hostname}:5000`;
const baseUrl = "https://pokeapi.co/api/v2/location-area/";
let serverEndPoint = baseUrl;
const customHeaders = new Headers()
customHeaders.append('Accept', 'application/json');

let tileColors = {
  0:'#414460',        
  1:'#414460',        
  2:'#5AB450',
  3:'#2aa615',      
  4:'#414460',        
  5:'#414460',        
  6:'#bb7410',      
  7:'#414460',        
  8:'#bb7410',      
  9:'#414460',        
  10:'#414460',       
  11:'#A292BC',     
  12:'#bb7410',     
  13:'#414460',       
  14:'#414460',       
  15:'#414460',       
  16:'#4582E1',
  17:'#4582E1',
  18:'#4582E1',
  19:'#4582E1',
  20:'#4582E1',
  21:'#4582E1',
  22:'#4582E1',
  23:'#4582E1',
  24:'#414460',
  25:'#4582E1',
  26:'#414460',
  27:'#414460',
  28:'#414460',
  29:'#414460',
  30:'#414460',
  31:'#414460',
  32:'#56b3e0',
  33:'#FFF195',
  34:'#4582E1',
  35:'#414460',
  36:'#414460',
  37:'#414460',
  38:'#414460',
  39:'#414460',
  40:'#414460',
  41:'#414460',
  42:'#4582E1',
  43:'#414460',
  44:'#414460',
  45:'#414460',
  46:'#414460',
  47:'#414460',
  48:'#a090f0',
  49:'#a090f0',
  50:'#a090f0',
  51:'#a090f0',
  52:'#a090f0',
  53:'#a090f0',
  54:'#a090f0',
  55:'#a090f0',
  56:'#AC5B2C',
  57:'#AC5B2C',
  58:'#AC5B2C',
  59:'#AC5B2C',
  60:'#AC5B2C',
  61:'#AC5B2C',
  62:'#AC5B2C',
  63:'#AC5B2C',
  64:'#ffd000',
  65:'#ffd000',
  66:'#ffd000',
  67:'#ffd000',
  68:'#414460',
  69:'#414460',
  70:'#414460',
  71:'#414460',
  72:'#414460',
  73:'#ffd000',
  74:'#ffd000',
  75:'#C76000',
  76:'#C76000',
  77:'#414460',
  78:'#414460',
  79:'#414460',
  80:'#414460',
  81:'#414460',
  82:'#414460',
  83:'#414460',
  84:'#414460',
  85:'#414460',
  86:'#afb000',
  87:'#afb000',
  88:'#afb000',
  89:'#a090f0',
  90:'#414460',
  91:'#414460',
  92:'#414460',
  93:'#414460',
  94:'#D83932',
  95:'#D83932',
  96:'#414460',
  97:'#414460',
  98:'#D83932',
  99:'#D83932',
  100:'#414460',
  101:'#D83932',
  102:'#414460',
  103:'#a0a000',
  104:'#414460',
  105:'#D83932',
  106:'#D83932',
  107:'#414460',
  108:'#D83932',
  109:'#D83932',
  110:'#D83932',
  111:'#D83932',
  112:'#C79000',
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
  124:'#4582E1',
  125:'#C7A550',
  126:'#414460',
  127:'#414460',
  128:'#f7a000',
  129:'#414460',
  130:'#414460',
  131:'#0690b0',
  132:'#414460',
  133:'#00eee0',
  134:'#4290e0',
  135:'#414460',
  136:'#0ddd70',
  137:'#414460',
  138:'#414460',
  139:'#414460',
  140:'#414460',
  141:'#414460',
  142:'white',
  143:'white',
  144:'#414460',
  145:'#414460',
  146:'#414460',
  147:'#414460',
  148:'#414460',
  149:'#414460',
  150:'#414460',
  151:'#414460',
  152:'#414460',
  153:'#414460',
  154:'#414460',
  155:'#414460',
  156:'#414460',
  157:'#414460',
  158:'#414460',
  159:'#414460',
  160:'#b27030',
  161:'#8da9cb',
  162:'#6483a7',
  163:'#52749d',
  164:'#928970',
  165:'#927040',
  166:'#409000',
  167:'#559060',
  168:'#b9d0eb',
  169:'#414460',
  170:'#414460',
  171:'#414460',
  172:'#414460',
  173:'#414460',
  174:'#414460',
  175:'#414460',
  176:'#414460',
  177:'#414460',
  178:'#414460',
  179:'#414460',
  180:'#414460',
  181:'#414460',
  182:'#414460',
  183:'#414460',
  184:'#414460',
  185:'#414460',
  186:'#414460',
  187:'#414460',
  188:'#414460',
  189:'#414460',
  190:'#414460',
  191:'#414460',
  192:'#414460',
  193:'#414460',
  194:'#414460',
  195:'#414460',
  196:'#414460',
  197:'#414460',
  198:'#414460',
  199:'#414460',
  200:'#414460',
  201:'#414460',
  202:'#414460',
  203:'#414460',
  204:'#414460',
  205:'#414460',
  206:'#414460',
  207:'#414460',
  208:'#414460',
  209:'#414460',
  210:'#414460',
  211:'#414460',
  212:'#414460',
  213:'#414460',
  214:'#414460',
  215:'#B89000',
  216:'#B89000',
  217:'#A88000',
  218:'#A88000',
  219:'#0690a0',
  220:'#414460',
  221:'#414460',
  222:'#414460',
  223:'#414460',
  224:'#0ddd70',
  225:'#0ddd70',
  226:'#0ddd70',
  227:'#414460',
  228:'#06b040',
  229:'white',
  230:'#414460',
  231:'#414460',
  232:'#414460',
  233:'#414460',
  234:'#414460',
  235:'#414460',
  236:'#414460',
  237:'#414460',
  238:'#414460',
  239:'#414460',
  240:'#414460',
  241:'#414460',
  242:'#414460',
  243:'#414460',
  244:'#414460',
  245:'#414460',
  246:'#414460',
  247:'#414460',
  248:'#414460',
  249:'#414460',
  250:'#414460',
  251:'#414460',
  252:'#414460',
  253:'#414460',
  254:'#414460',
  255:'#414460',
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
  494:"canalave-city-area",
  498:"sinnoh-route-204-south-towards-jubilife-city",
  502:"sinnoh-route-207-area",
  503:"sinnoh-route-207-area",
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
  610:"mystery-zone-area",
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

const pokemonNames =  ["0x0", "bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard",
			"squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree",
			"weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate",
			"spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash",
			"nidoran-f", "nidorina", "nidoqueen", "nidoran-m", "nidorino", "nidoking",
			"clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff",
			"zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth",
			"diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape",
			"growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam",
			"machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel",
			"geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro",
			"magnemite", "magneton", "farfetch'd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk",
			"shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno",
			"krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak",
			"hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey",
			"tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie",
			"mr-mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados",
			"lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar",
			"kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres",
			"dratini", "dragonair", "dragonite", "mewtwo", "mew",
			"chikorita", "bayleef", "meganium", "cyndaquil", "quilava", "typhlosion",
			"totodile", "croconaw", "feraligatr", "sentret", "furret", "hoothoot", "noctowl",
			"ledyba", "ledian", "spinarak", "ariados", "crobat", "chinchou", "lanturn", "pichu", "cleffa",
			"igglybuff", "togepi", "togetic", "natu", "xatu", "mareep", "flaaffy", "ampharos", "bellossom",
			"marill", "azumarill", "sudowoodo", "politoed", "hoppip", "skiploom", "jumpluff", "aipom",
			"sunkern", "sunflora", "yanma", "wooper", "quagsire", "espeon", "umbreon", "murkrow", "slowking",
			"misdreavus", "unown", "wobbuffet", "girafarig", "pineco", "forretress", "dunsparce", "gligar",
			"steelix", "snubbull", "granbull", "qwilfish", "scizor", "shuckle", "heracross", "sneasel",
			"teddiursa", "ursaring", "slugma", "magcargo", "swinub", "piloswine", "corsola", "remoraid", "octillery",
			"delibird", "mantine", "skarmory", "houndour", "houndoom", "kingdra", "phanpy", "donphan",
			"porygon2", "stantler", "smeargle", "tyrogue", "hitmontop", "smoochum", "elekid", "magby", "miltank",
			"blissey", "raikou", "entei", "suicune", "larvitar", "pupitar", "tyranitar", "lugia", "ho-oh", "celebi",
			"treecko", "grovyle", "sceptile", "torchic", "combusken", "blaziken", "mudkip", "marshtomp",
			"swampert", "poochyena", "mightyena", "zigzagoon", "linoone", "wurmple", "silcoon", "beautifly",
			"cascoon", "dustox", "lotad", "lombre", "ludicolo", "seedot", "nuzleaf", "shiftry",
			"taillow", "swellow", "wingull", "pelipper", "ralts", "kirlia", "gardevoir", "surskit",
			"masquerain", "shroomish", "breloom", "slakoth", "vigoroth", "slaking", "nincada", "ninjask",
			"shedinja", "whismur", "loudred", "exploud", "makuhita", "hariyama", "azurill", "nosepass",
			"skitty", "delcatty", "sableye", "mawile", "aron", "lairon", "aggron", "meditite", "medicham",
			"electrike", "manectric", "plusle", "minun", "volbeat", "illumise", "roselia", "gulpin",
			"swalot", "carvanha", "sharpedo", "wailmer", "wailord", "numel", "camerupt", "torkoal",
			"spoink", "grumpig", "spinda", "trapinch", "vibrava", "flygon", "cacnea", "cacturne", "swablu",
			"altaria", "zangoose", "seviper", "lunatone", "solrock", "barboach", "whiscash", "corphish",
			"crawdaunt", "baltoy", "claydol", "lileep", "cradily", "anorith", "armaldo", "feebas",
			"milotic", "castform", "kecleon", "shuppet", "banette", "duskull", "dusclops", "tropius",
			"chimecho", "absol", "wynaut", "snorunt", "glalie", "spheal", "sealeo", "walrein", "clamperl",
			"huntail", "gorebyss", "relicanth", "luvdisc", "bagon", "shelgon", "salamence", "beldum",
			"metang", "metagross", "regirock", "regice", "registeel", "latias", "latios", "kyogre",
			"groudon", "rayquaza", "jirachi", "deoxys",
			"turtwig", "grotle", "torterra", "chimchar", "monferno", "infernape", "piplup", "prinplup",
			"empoleon", "starly", "staravia", "staraptor", "bidoof", "bibarel", "kricketot", "kricketune",
			"shinx", "luxio", "luxray", "budew", "roserade", "cranidos", "rampardos", "shieldon", "bastiodon",
			"burmy", "wormadam", "mothim", "combee", "vespiquen", "pachirisu", "buizel", "floatzel", "cherubi",
			"cherrim", "shellos", "gastrodon", "ambipom", "drifloon", "drifblim", "buneary", "lopunny",
			"mismagius", "honchkrow", "glameow", "purugly", "chingling", "stunky", "skuntank", "bronzor",
			"bronzong", "bonsly", "mime jr.", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp",
			"munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk",
			"toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile",
			"magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss",
			"yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass",
			"dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran",
			"regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus",]



let convertMethod = {
  "surf":"surf",
  "good-rod":"good-rod",
  "old-rod": "old-rod",
  "super-rod":"super-rod",
  "walk":"grass",
  "gift":"gift"
}

const blacklist = ["mystery-zone-area","jubilife-city-area","sandgem-town-area","verity-lakefront-area",,"floaroma-town-area","oreburgh-city-area"]; // list of areas not implemented in API :(
const invalidMaps = ["void","wall chunk"];
let cachedAreaEncounters = {};
let EncounterList;
let encounterTypes = {
  "grass":[2,3],
  "water":[16,20,21,22,23,25]}
let tileSwitches = {  
  "grass":0,
  "water":0}

let validMethods = {
  "grass":["grass"],
  "water":["surf","old-rod","good-rod","super-rod"]
}

let map_layout;
let game_id = 0; // 0 = Diamond, 1 = Pearl, 2 = Platinum
let selectedMap = 641;
let area = areaAPInames[selectedMap];
let EncounterTableInit = `<table class="encounter_table">
                          <thead><tr>
                            <th><div>Pokemon</div></th>
                            <th><div>Levels</div></th>
                            <th><div>Method</div></th>
                            <th><div>Rate</div></th>
                          </tr></thead>`;

const isMapValid = function(tempMap) {
  if (tempMap > 700) {return false};
  if (tempMap < 0) {return false};
  if (invalidMaps.indexOf(map_layout[`Index${tempMap}`])!=-1) {return false}; // if map is not pure walls/void
  return true;
}

const disableInvalidDirections = function() {
  let dirBtns = document.querySelectorAll(".direction");
  for (let dirBtn of dirBtns) {
    dirBtn.classList.remove("arrow_disable"); // reset opacity
    if (!isDirectionValid(dirBtn.getAttribute("value"))[0]) {
      dirBtn.classList.add("arrow_disable");
    }
  }
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
    console.log(selectedMap); //debug print the maps 
    console.log(areaAPInames[selectedMap]);
    createMap();
    return;
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
        tileSwitches[encounterType] = !tileSwitches[encounterType];
        //console.log(`showing ${encounterType}encounters: ${tileSwitches[encounterType]}`); 
        updateTileOpacity();
        });

        // encTile.addEventListener('mouseenter',function(){
        //   console.log(`hovering ${encTile}`);
        //   });
        // encTile.addEventListener('mouseleave',function(){
        //     console.log(`stopped hovering ${encTile}`);
        // });

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

  for (let encType in tileSwitches) {
    if (tileSwitches[encType]) {
      opacityChanges = true;
    }
  }

  // if opacity changes should occur
  if (opacityChanges) {
    for (let tile of Tiles) {
        tile.classList.add("opac50");
    };
    for (let encType in tileSwitches) {
      if (tileSwitches[encType]) {
        for (let subTile of encounterTypes[encType]) {
          encTiles = document.querySelectorAll(`.tile_${subTile}`);
          for (let encTile of encTiles) {
            encTile.classList.remove("opac50");
          }
        }
      }
    }
    updateEncounters()
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
    let tiles ="";
    for (let value of row) {
      let tile_data = `<div class="tile_${value} tile" style="background-color:${getTileColor(value)}"><wbr></div>`;
      tiles += tile_data;
    };
    map.innerHTML += `<div class="map_row">${tiles}</div>`;
  };
  listenTiles();
  disableInvalidDirections();
};

const showEncounter = function(method) {
  for (let t in tileSwitches) {
    if (tileSwitches[t]) { // if pokémon for this tile type should be shown
      if (validMethods[t].indexOf(method)!=-1) { // and the method of this pokémon matches said type
        return true;
      }
    }
  }
}

const showEncounters = function(pokemon_encounters) {
  EncounterList.innerHTML = ``;
  let EncounterCount = pokemon_encounters.length;
  // console.log(pokemon_encounters);
  let EncounterTable = EncounterTableInit;
  for (let encounter of pokemon_encounters) {
    let pokemon = encounter["pokemon"];
    let versionDetails = encounter["version_details"];
    let encounterDetails = versionDetails[game_id]["encounter_details"];
    let detail = encounterDetails[0];
    let method = convertMethod[detail.method.name]
    if (showEncounter(method)) {
      // console.log(pokemonNames.indexOf(pokemon.name)) # in case a picture is missing due to bad conversion
      // console.log(pokemon.name)
      EncounterTable += `<tbody><tr>
                          <td><div><img src="img/pokemon/${pokemonNames.indexOf(pokemon.name)}.png" alt="picture of pokemon${pokemon.name}"><p>${pokemon.name}</p></div></td>
                          <td><div>${detail.min_level} - ${detail.max_level}</div></td>
                          <td><div>${method}</div></td>
                          <td><div>${Math.min(versionDetails[game_id].max_chance,100)}%</div></td>
                         </tr></tbody>`;
    };
  };
  EncounterList.innerHTML += EncounterTable;
  if (EncounterTable == EncounterTableInit) {
    EncounterList.innerHTML = `<div style="text-align:center">There are encounters here! <br>
                               Click on a grass or water tile to show them.</div>`
  }
};

// get API data
const updateEncounters = async function() {
  try {
    area = areaAPInames[selectedMap];
    if (blacklist.indexOf(area)==-1) { // if map isn't in the blacklist
      if (area in cachedAreaEncounters) { // if area has been cached
        //console.log(`showing cached pokémon for area ${area}`);
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
    //console.log(`Missing encounter data from API for ${area}`);
    EncounterList.innerHTML ="No encounters are present in this map."
  } catch (ex) {
    console.log(ex);
  };
  
};

document.addEventListener("DOMContentLoaded", function () {
  //console.info("DOM loaded");

  fetch('./script/maps.json')
      .then(function(resp)
      {return resp.json();})
      .then(function(data){
        map_layout = data["map_layout"]
        createMap();
      }); 
  EncounterList = document.querySelector(".encounter_list");
  updateEncounters();
  listenDirections();
});
