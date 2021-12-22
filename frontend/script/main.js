"use strict";
// global variable declaration

const lanIP = `${window.location.hostname}:5000`;
const baseUrl = "https://pokeapi.co/api/v2/location-area/";
let serverEndPoint = baseUrl;
const customHeaders = new Headers()
customHeaders.append('Accept', 'application/json');

let tileColors = [
  "#414460",        
  "#414460",        
  "#5AB450",
  "#2aa615",      
  "#414460",        
  "#414460",        
  "#bb7410",      
  "#414460",        
  "#bb7410",      
  "#414460",        
  "#414460",       
  "#A292BC",     
  "#bb7410",     
  "#414460",       
  "#414460",       
  "#414460",       
  "#4864F0",
  "#4864F0",
  "#4864F0",
  "#4864F0",
  "#4864F0",
  "#4864F0",
  "#4864F0",
  "#4864F0",
  "#414460",
  "#4864F0",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#56b3e0",
  "#FFF195",
  "#4864F0",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#4864F0",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#a090f0",
  "#a090f0",
  "#a090f0",
  "#a090f0",
  "#a090f0",
  "#a090f0",
  "#a090f0",
  "#a090f0",
  "#AC5B2C",
  "#AC5B2C",
  "#AC5B2C",
  "#AC5B2C",
  "#AC5B2C",
  "#AC5B2C",
  "#AC5B2C",
  "#AC5B2C",
  "#ffd000",
  "#ffd000",
  "#ffd000",
  "#ffd000",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#ffd000",
  "#ffd000",
  "#C76000",
  "#C76000",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#afb000",
  "#afb000",
  "#afb000",
  "#a090f0",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#D83932",
  "#D83932",
  "#414460",
  "#414460",
  "#D83932",
  "#D83932",
  "#414460",
  "#D83932",
  "#414460",
  "#a0a000",
  "#414460",
  "#D83932",
  "#D83932",
  "#414460",
  "#D83932",
  "#D83932",
  "#D83932",
  "#D83932",
  "#C79000",
  "#C79000",
  "#C79000",
  "#C79000",
  "#C79000",
  "#C79000",
  "#C7A550",
  "#C7A550",
  "#C7A550",
  "#C7A550",
  "#C7A550",
  "#40a000",
  "#4864F0",
  "#C7A550",
  "#414460",
  "#414460",
  "#f7a000",
  "#414460",
  "#414460",
  "#0690b0",
  "#414460",
  "#00eee0",
  "#4290e0",
  "#414460",
  "#0ddd70",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "white",
  "white",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#b27030",
  "#8da9cb",
  "#6483a7",
  "#52749d",
  "#928970",
  "#927040",
  "#409000",
  "#559060",
  "#b9d0eb",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#B89000",
  "#B89000",
  "#A88000",
  "#A88000",
  "#0690a0",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#0ddd70",
  "#0ddd70",
  "#0ddd70",
  "#414460",
  "#06b040",
  "white",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460",
  "#414460"
  ]

let areaAPInames = {
  39:"acuity-lakefront-area",
  40:"acuity-lakefront-area",
  41:"snowpoint-city-area",
  58:"flower-paradise-area",
  69:"acuity-lakefront-area",
  70:"acuity-lakefront-area",
  71:"snowpoint-city-area",
  83:"stark-mountain-area",
  88:"seabreak-path-area",
  91:"fullmoon-island-area",
  94:"newmoon-island-area",
  99:"sinnoh-route-217-area",
  113:"sinnoh-route-227-area",
  118:"seabreak-path-area",
  129:"sinnoh-route-217-area",
  143:"sinnoh-route-228-area",
  148:"seabreak-path-area",
  159:"sinnoh-route-217-area",
  169:"sinnoh-route-225-area",
  170:"survival-area-area",
  171:"sinnoh-sea-route-226-area",
  172:"sinnoh-sea-route-226-area",
  173:"sinnoh-sea-route-226-area",
  174:"sinnoh-route-228-area",
  178:"seabreak-path-area",
  189:"sinnoh-route-217-area",
  199:"sinnoh-route-225-area",
  204:"sinnoh-route-228-area",
  208:"seabreak-path-area",
  219:"sinnoh-route-216-area",
  220:"sinnoh-route-216-area",
  221:"sinnoh-route-216-area",
  229:"sinnoh-route-225-area",
  234:"sinnoh-route-228-area",
  238:"seabreak-path-area",
  259:"fight-area-area",
  260:"fight-area-area",
  261:"sinnoh-sea-route-230-area",
  262:"sinnoh-sea-route-230-area",
  263:"sinnoh-sea-route-230-area",
  264:"sinnoh-route-229-area",
  265:"sinnoh-route-229-area",
  268:"seabreak-path-area",
  295:"resort-area-area",
  298:"seabreak-path-area",
  303:"iron-island-area",
  328:"sinnoh-route-224-area",
  337:"eterna-forest-area",
  338:"sinnoh-route-205-east-towards-eterna-city",
  339:"eterna-city-area",
  340:"eterna-city-area",
  341:"sinnoh-route-211-west-towards-eterna-city",
  343:"sinnoh-route-211-east-towards-celestic-town",
  344:"celestic-town-area",
  345:"sinnoh-route-210-west-towards-celestic-town",
  346:"sinnoh-route-210-west-towards-celestic-town",
  347:"sinnoh-route-210-west-towards-celestic-town",
  357:"sinnoh-route-224-area",
  358:"sinnoh-route-224-area",
  366:"eterna-forest-area",
  367:"eterna-forest-area",
  369:"eterna-city-area",
  377:"sinnoh-route-210-south-towards-solaceon-town",
  386:"sinnoh-pokemon-league-area",
  387:"sinnoh-route-224-area",
  395:"fuego-ironworks-area",
  396:"sinnoh-route-205-south-towards-floaroma-town",
  399:"sinnoh-route-206-area",
  407:"sinnoh-route-210-south-towards-solaceon-town",
  408:"sinnoh-route-215-area",
  409:"sinnoh-route-215-area",
  410:"sinnoh-route-215-area",
  411:"veilstone-city-area",
  412:"veilstone-city-area",
  416:"sinnoh-pokemon-league-area",
  425:"floaroma-town-area",
  426:"sinnoh-route-205-south-towards-floaroma-town",
  429:"sinnoh-route-206-area",
  437:"sinnoh-route-210-south-towards-solaceon-town",
  441:"veilstone-city-area",
  442:"veilstone-city-area",
  446:"sinnoh-sea-route-223-area",
  455:"floaroma-town-area",
  456:"sinnoh-route-205-south-towards-floaroma-town",
  457:"valley-windworks-area",
  459:"sinnoh-route-206-area",
  467:"solaceon-town-area",
  472:"sinnoh-route-214-area",
  476:"sinnoh-sea-route-223-area",
  485:"sinnoh-route-204-north-towards-floaroma-town",
  489:"sinnoh-route-206-area",
  494:"hearthome-city-area",
  495:"hearthome-city-area",
  497:"sinnoh-route-209-area",
  502:"sinnoh-route-214-area",
  506:"sinnoh-sea-route-223-area",
  511:"canalave-city-area",
  515:"sinnoh-route-204-south-towards-jubilife-city",
  519:"sinnoh-route-207-area",
  520:"sinnoh-route-207-area",
  524:"hearthome-city-area",
  525:"hearthome-city-area",
  523:"sinnoh-route-208-area",
  524:"sinnoh-route-208-area",
  526:"sinnoh-route-209-area",
  527:"sinnoh-route-209-area",
  532:"sinnoh-route-214-area",
  536:"sinnoh-sea-route-223-area",
  541:"canalave-city-area",
  542:"sinnoh-route-218-area",
  543:"sinnoh-route-218-area",
  544:"jubilife-city-area",
  545:"jubilife-city-area",
  546:"sinnoh-route-203-area",
  547:"sinnoh-route-203-area",
  548:"oreburgh-city-area",
  549:"oreburgh-city-area",
  554:"sinnoh-route-212-north-towards-hearthome-city",
  561:"valor-lakefront-area",
  562:"valor-lakefront-area",
  566:"sunyshore-city-area",
  567:"sunyshore-city-area",
  574:"jubilife-city-area",
  575:"jubilife-city-area",
  579:"oreburgh-city-area",
  584:"sinnoh-route-212-north-towards-hearthome-city",
  591:"valor-lakefront-area",
  592:"valor-lakefront-area",
  593:"sinnoh-route-222-area",
  594:"sinnoh-route-222-area",
  595:"sinnoh-route-222-area",
  596:"sunyshore-city-area",
  597:"sunyshore-city-area",
  601:"mystery-zone-area",
  602:"mystery-zone-area",
  605:"sinnoh-route-202-area",
  614:"sinnoh-route-212-north-towards-hearthome-city",
  618:"pastoria-city-area",
  619:"pastoria-city-area",
  620:"sinnoh-route-213-area",
  621:"sinnoh-route-213-area",
  622:"sinnoh-route-213-area",
  631:"mystery-zone-area",
  632:"verity-lakefront-area",
  633:"sinnoh-route-201-area",
  634:"sinnoh-route-201-area",
  635:"sandgem-town-area",
  644:"sinnoh-route-212-east-towards-pastoria-city",
  645:"sinnoh-route-212-east-towards-pastoria-city",
  646:"sinnoh-route-212-east-towards-pastoria-city",
  647:"sinnoh-route-212-east-towards-pastoria-city",
  648:"pastoria-city-area",
  649:"pastoria-city-area",
  650:"sinnoh-route-213-area",
  651:"sinnoh-route-213-area",
  652:"sinnoh-route-213-area",
  663:"twinleaf-town-area",
  665:"sinnoh-route-219-area",
  695:"sinnoh-sea-route-220-area",
  696:"sinnoh-sea-route-220-area",
  697:"sinnoh-route-221-area",
  698:"sinnoh-route-221-area",
  699:"sinnoh-route-221-area",
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
			"magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk",
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
			"bronzong", "bonsly", "mime-jr", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp",
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

const blacklist = ["mystery-zone-area","jubilife-city-area","sandgem-town-area","verity-lakefront-area","floaroma-town-area","oreburgh-city-area","solaceon-town-area","hearthome-city-area","veilstone-city-area","seabreak-path-area","flower-paradise-area","survival-area-area","fight-area-area","newmoon-island-area","fullmoon-island-area","snowpoint-city-area"]; // list of areas not implemented in API :(
const invalidMaps = ["void","wall chunk","empty chunk"];
let cachedAreaEncounters = {};
let EncounterList;
let EncounterSection;
let encounterTypes = {
  "grass":[2,3],
  "water":[16,19,20,21,23,25]}

let tileSwitches = {  
  "grass":0,
  "water":0}

let validMethods = {
  "grass":["grass"],
  "water":["surf","old-rod","good-rod","super-rod"]
}

let map_layout;
let game_id = 0; // 0 = Diamond, 1 = Pearl, 2 = Platinum
let selectedMap = 663;
let teleport;
let showTeleportMap = false;
let area = areaAPInames[selectedMap];
let EncounterTableInit = `<table class="encounter_table">
                          <thead><tr>
                            <th><div>Pokemon</div></th>
                            <th><div>Levels</div></th>
                            <th><div>Method</div></th>
                            <th><div>Rate</div></th>
                          </tr></thead>`;

const isMapValid = function(tempMap) {
  if (tempMap > 716) {return false};
  if (tempMap < 0) {return false};
  if (invalidMaps.indexOf(map_layout[`${tempMap}`])!=-1) {return false}; // if map is not pure walls/void
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

const disableDirections = function() {
  let dirBtns = document.querySelectorAll(".direction");
  for (let dirBtn of dirBtns) {
    dirBtn.classList.add("arrow_disable"); // reset opacity
  }
}

const isDirectionValid = function(direction) {
  let tempMap = selectedMap;
  if (direction == "up") { tempMap -= 30; }
  if (direction == "down") { tempMap += 30; }
  if (direction == "left") {tempMap -= 1;}
  if (direction == "right") {tempMap += 1;}
  return [isMapValid(tempMap),tempMap];
}

const move = function(direction) {
  let data = isDirectionValid(direction);
  if (data[0] && !showTeleportMap) {
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
        encTiles = document.querySelectorAll(`.tile_${(subTile & 0xFF)}`);
      for (let encTile of encTiles) {
        encTile.classList.add(`${encounterType}`)
        encTile.addEventListener('click',function(){
        tileSwitches[encounterType] = !tileSwitches[encounterType];
        //console.log(`showing ${encounterType}encounters: ${tileSwitches[encounterType]}`); 
        updateTileOpacity();
        });

      }
    }
  }
  updateTileOpacity() // run once to update all opacities to correct value upon loading new map
}

const listenTeleport = function() {
  teleport = document.querySelector(".teleport_function");
  teleport.addEventListener('click',function(){
    toggleTeleportationMap();
  });
}

const ifEncounterTilePresent = function(encounterType) {
  let tileGrid = document.querySelectorAll(".tile")
  for (let tile of tileGrid) {
    for (let className of tile.classList) {
        if (className == encounterType) {
          return true;
      }
    }
  }
  return false;
}

const ifAnyEncounterTilePresent = function() {
  let tileGrid = document.querySelectorAll(".tile")
  for (let tile of tileGrid) {
    for (let className of tile.classList) {
      for (let encounterType in encounterTypes)
        if (className == encounterType) {
        return true;
      }
    }
  }
  return false;
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
          encTiles = document.querySelectorAll(`.tile_${(subTile & 0xFF)}`);
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
  map.classList.remove("tp_map");

  for (let row of map_layout[`${selectedMap}`])
    {
    let tiles ="";
    for (let value of row) {
      let tile_data = `<div class="tile_${value & 0xFF} tile" style="background-color:${getTileColor(value)}"><wbr></div>`;
      tiles += tile_data;
    };
    map.innerHTML += `<div class="map_row">${tiles}</div>`;
  };
  listenTiles();
  disableInvalidDirections();
};

const tpAreas = {
  "mapchunk_899":663, // twinleaf
  "mapchunk_900":663,

  "mapchunk_870":635, // sandgem
  "mapchunk_871":635,
  "mapchunk_838":635,
  "mapchunk_839":635,

  "mapchunk_741":575, // jubilife
  "mapchunk_742":575,
  "mapchunk_773":575,
  "mapchunk_774":575,

  
  "mapchunk_673":511, //canalave
  "mapchunk_674":511, //canalave
  "mapchunk_705":511,
  "mapchunk_706":511,
  "mapchunk_737":511,
  "mapchunk_738":511,

  "mapchunk_582":455, // floaroma
  "mapchunk_614":455,

  "mapchunk_457":339, // eterna
  "mapchunk_458":339,
  "mapchunk_459":339,
  "mapchunk_489":339, 
  "mapchunk_490":339,
  "mapchunk_491":339,
  "mapchunk_521":339,
  "mapchunk_522":339,
  "mapchunk_523":339,

  "mapchunk_745":549, // oreburgh
  "mapchunk_746":549,
  "mapchunk_778":549,

  "mapchunk_655":494, //hearthome
  "mapchunk_656":494,
  "mapchunk_657":494,
  "mapchunk_687":494,
  "mapchunk_688":494,
  "mapchunk_689":494,
  "mapchunk_720":494,
  "mapchunk_719":494,
  "mapchunk_721":494,

  "mapchunk_463":344,// celestic
  "mapchunk_495":344,
  
  "mapchunk_567":442, // veilstone
  "mapchunk_568":442,
  "mapchunk_599":442,
  "mapchunk_600":442,

  "mapchunk_626":467, // solaceon
  "mapchunk_627":467,
  "mapchunk_628":467,

  "mapchunk_819":618, // pastoria
  "mapchunk_820":618, 
  "mapchunk_821":618, 
  "mapchunk_851":618, 
  "mapchunk_852":618, 
  "mapchunk_853":618, 
  "mapchunk_883":618,
  "mapchunk_884":618,
  "mapchunk_885":618,

  "mapchunk_763":596, // sunyshore
  "mapchunk_764":596,
  "mapchunk_765":596,
  "mapchunk_795":596,
  "mapchunk_796":596,
  "mapchunk_797":596,
  "mapchunk_827":596,
  "mapchunk_828":596,
  "mapchunk_829":596,

  "mapchunk_507":386, // pokeleague
  "mapchunk_508":386,
  "mapchunk_539":386,
  "mapchunk_540":386,

  "mapchunk_76":41, // snowpoint 
  "mapchunk_77":41,
  "mapchunk_108":41,
  "mapchunk_109":41,
  "mapchunk_140":41,
  "mapchunk_141":41,

  "mapchunk_411":295, // resort area
  "mapchunk_412":295,

  "mapchunk_372":260, // fight area
  "mapchunk_373":260,
  "mapchunk_374":260,

  "mapchunk_245":170, // survival area
  "mapchunk_246":170,

  "mapchunk_129":91, // fullmoon island
  "mapchunk_130":91,
  "mapchunk_161":91, 
  "mapchunk_162":91,

  "mapchunk_132":94, // newmoon island
  "mapchunk_133":94,
  "mapchunk_164":94,
  "mapchunk_165":94,

  "mapchunk_419":303, // iron island 
  "mapchunk_420":303,
  "mapchunk_451":303,
  "mapchunk_452":303,

  "mapchunk_157":58, // flower paradise
  "mapchunk_158":58,
  "mapchunk_189":58,
  "mapchunk_190":58,
}

const listenTeleportMap = function() {
  let mapchunks = document.querySelectorAll(".mapchunk");
  console.log("teleport map listening")
  for (let mapchunk of mapchunks) {
    if (tpAreas[mapchunk.classList[1]]) {
      mapchunk.classList.add("tp_area");
      mapchunk.addEventListener('click',function() {
        console.log(tpAreas[mapchunk.classList[1]])
        selectedMap = tpAreas[mapchunk.classList[1]];
        EncounterSection.innerHTML = "Encounter Data";
        EncounterSection.classList.remove("center_margin");
        createMap();
        showTeleportMap = false;
        }
      )
    }
  }
}

const toggleTeleportationMap = function() {
  if (!showTeleportMap) {
    showTeleportMap = true; // so next time will disable
    let map = document.querySelector(".game_map");
    map.classList.add("tp_map");
    map.innerHTML = "";
    for (let i=0;i<32;i++) {
      let mapChunks =""
      for (let j=0;j<32;j++) {
      let mapChunk= `<div class="tile mapchunk_${i*32+j} mapchunk"><wbr></div>`;
      mapChunks += mapChunk;
      }
      map.innerHTML += `<div class="map_row">${mapChunks}</div>`;
    }
    listenTeleportMap();
    disableDirections();
    
    EncounterSection.innerHTML = "Teleporting";
    EncounterSection.classList.add("center_margin");
    EncounterList.innerHTML = "Select a map to teleport to.";
    return 
  }
  showTeleportMap = false; // so next time will enable
  createMap();
  EncounterSection.innerHTML = "Encounter Data";
}


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
  if (!ifAnyEncounterTilePresent()) {
    EncounterSection.classList.add("center_margin");
    EncounterList.innerHTML = "No encounters are present in this map.";
    return;
  }
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
  EncounterSection.classList.remove("center_margin");
  if (EncounterTable == EncounterTableInit) {
    EncounterSection.classList.add("center_margin");
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
    //console.log(`Missing Encounter Data from API for ${area}`);
    EncounterSection.classList.add("center_margin");
    EncounterList.innerHTML = "No encounters are present in this map.";
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
  EncounterSection = document.querySelector(".encounter_header")
  updateEncounters();
  listenDirections();
  listenTeleport();
});
