"use strict";
// global variable declaration

const lanIP = `${window.location.hostname}:5000`;
const baseUrl = "https://pokeapi.co/api/v2/location-area/";
let serverEndPoint = baseUrl;
const customHeaders = new Headers()
customHeaders.append('Accept', 'application/json');

// put these in a seperate Json file later
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
  554:"sinnoh-route-212-area",
  561:"valor-lakefront-area",
  562:"valor-lakefront-area",
  566:"sunyshore-city-area",
  567:"sunyshore-city-area",
  574:"jubilife-city-area",
  575:"jubilife-city-area",
  579:"oreburgh-city-area",
  584:"sinnoh-route-212-area",
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
  614:"sinnoh-route-212-area",
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
  644:"sinnoh-route-212-area",
  645:"sinnoh-route-212-area",
  646:"sinnoh-route-212-area",
  647:"sinnoh-route-212-area",
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
			"bronzong", "bonsly", "mime-jr.", "happiny", "chatot", "spiritomb", "gible", "gabite", "garchomp",
			"munchlax", "riolu", "lucario", "hippopotas", "hippowdon", "skorupi", "drapion", "croagunk",
			"toxicroak", "carnivine", "finneon", "lumineon", "mantyke", "snover", "abomasnow", "weavile",
			"magnezone", "lickilicky", "rhyperior", "tangrowth", "electivire", "magmortar", "togekiss",
			"yanmega", "leafeon", "glaceon", "gliscor", "mamoswine", "porygon-z", "gallade", "probopass",
			"dusknoir", "froslass", "rotom", "uxie", "mesprit", "azelf", "dialga", "palkia", "heatran",
			"regigigas", "giratina", "cresselia", "phione", "manaphy", "darkrai", "shaymin", "arceus",]
//

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
    showTeleportationMap();
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
  "mapchunk_900":663, // twinleaf
  "mapchunk_901":663,

  "mapchunk_870":635, // sandgem
  "mapchunk_871":635,
  "mapchunk_838":635,
  "mapchunk_839":635,

  "mapchunk_741":575, // jubilife
  "mapchunk_742":575,
  "mapchunk_773":575,
  "mapchunk_774":575,

  "mapchunk_674":511, //canalave
  "mapchunk_706":511,
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

  "mapchunk_687":494, //hearthome
  "mapchunk_688":494,
  "mapchunk_689":494,
  "mapchunk_720":494,
  "mapchunk_719":494,
  "mapchunk_721":494,

  "mapchunk_464":344, // celestic
  "mapchunk_465":344,
  "mapchunk_496":344,
  "mapchunk_497":344,
  
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

  "mapchunk_764":596, // sunyshore
  "mapchunk_765":596,
  "mapchunk_766":596,
  "mapchunk_796":596,
  "mapchunk_797":596,
  "mapchunk_798":596,
  "mapchunk_828":596,
  "mapchunk_829":596,
  "mapchunk_830":596,

  "mapchunk_508":386, // pokeleague
  "mapchunk_509":386,
  "mapchunk_540":386,
  "mapchunk_541":386,

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

  "mapchunk_246":170, // survival area
  "mapchunk_246":170,

  "mapchunk_130":91, // fullmoon island
  "mapchunk_131":91,
  "mapchunk_162":91, 
  "mapchunk_163":91,

  "mapchunk_133":94, // newmoon island
  "mapchunk_134":94,
  "mapchunk_165":94,
  "mapchunk_166":94,

  "mapchunk_420":303, // iron island 
  "mapchunk_421":303,
  "mapchunk_452":303,
  "mapchunk_453":303,

  "mapchunk_190":58, // flower paradise
  "mapchunk_191":58,
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
        createMap()
        }
      )
    }
  }
}

const showTeleportationMap = function() {
  let map = document.querySelector(".game_map");
  map.classList.add("tp_map");
  map.innerHTML = ""
  //map.innerHTML = `<img src="img/teleport_map.png" class="teleport_map"</img>`;
  for (let i=0;i<32;i++) {
    let mapChunks =""
    for (let j=0;j<32;j++) {
    let mapChunk= `<div class="tile mapchunk_${i*32+j} mapchunk"><wbr></div>`;
    mapChunks += mapChunk;
    }
    map.innerHTML += `<div class="map_row">${mapChunks}</div>`;
  }
  listenTeleportMap()
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
    EncounterList.innerHTML = "No encounters are present in this map."
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
    EncounterList.innerHTML = "No encounters are present in this map."
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
  listenTeleport();
});
