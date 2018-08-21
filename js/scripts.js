//Challenges, dom manipulation, getting data in order of the cards,


//console.log("test")
//alert()
//prompt()
//confirm() //returns a boolean
// var x = [];  //creates empty array
// var y = [10] // creats an array of size 1 ie. [10]
//var z= [];
//var z[2] = [8] // array now size 3 ie. [undefined, undefined, 8]
//document.write("In my shopping basket I have " + myArr[0] + ", " + myArr[1] + ", and " + myArr[2]);

// var matches = document.querySelectorAll("p");




// reference
//https://www.w3schools.com/js/js_object_definition.asp
//https://www.yugiohcardguide.com/spoilers/starter-deck-yugi.html     this is a data list


//class structure{name:",null", atk:",null", def:", null", type:"monster, magic, trap"};
// atk def name Cardtype attribute class stars effect flip

var myCard1={Name:"Dark", atk: "2500", def:"2100", type: "monster", effect: false, image:"SDY-006.jpg"};
var myCard2={Name:"Blue", atk: "3000", def:"2500", type: "monster", effect: false, image:"SDY-001.jpg"};
var myCard3={name:"Sword", atk: false, def: false, type: "magic", effect: true};


var SDY_001 = {id:"SDY-001", name:"Mystical Elf",              type:"Normal Monster", attribute:"LIGHT", 	subtype:"Spellcaster",  level:"4", atk:	"800" , def:"2000", rarity: "Common", description:"A delicate elf that lacks offense, but has a terrific defense backed by mystical power."};
var SDY_002 = {id:"SDY-002", name:"Feral Imp" 	,              type:"Normal Monster", attribute:"DARK", 	subtype:"Fiend" ,	      level:"4", atk:	"1300" ,def:"1400 	"Common 	", description:"A playful little fiend that lurks in the dark, waiting to attack an unwary enemy."};
var SDY_003 = {id:"SDY-003", name:"Winged Dragon, Guardian",   type:"Normal Monster", attribute:"WIND", 	subtype:"Dragon" ,	    level:"4", atk:	"1400" ,def:"1200 	Common 	", description:"A dragon commonly found guarding mountain fortresses. Its signature attack is a sweeping dive from out of the blue."};
var SDY_004 = {id:"SDY-004", name:"Summoned Skull" 	,          type:"Normal Monster", attribute:"DARK", 	subtype:"Fiend, 	      level:"6", atk:	"2500" ,def:"1200 	Common 	", description:"A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force."};
var SDY_005 = {id:"SDY-005", name:"Beaver Warrior" 	,          type:"Normal Monster", attribute:"EARTH", 	subtype:"Beast-Warrior" level:"4", atk:	"1200" ,def:"1500 	Common 	", description:"What this creature lacks in size it makes up for in defense when battling in the prairie."};
var SDY_006 = {id:"SDY-006", name:"Dark Magician" 	,          type:"Normal Monster", attribute:"DARK", 	subtype:"Spellcaster"   level:"7", atk:	"2500" ,def:"2100 	Ultra Rare 	", description:"The ultimate wizard in terms of attack and defense."};
var SDY_007 = {id:"SDY-007", name:"Gaia the Fierce Knight" ,   type:"Normal Monster", attribute:"EARTH", 	subtype:"Warrior"       level:"7", atk:	"2300" ,def:"2100 	Common 	", description:"A knight whose horse travels faster than the wind. His battle-charge is a force to be reckoned with."};
var SDY_008 = {id:"SDY-008", name:"Curse of Dragon" 	,        type:"Normal Monster", attribute:"DARK", 	subtype:"Dragon 	"     level:"5", atk:	"2000" ,def:"1500 	Common 	", description:"A wicked dragon that taps into dark forces to execute a powerful attack."};
var SDY_009 = {id:"SDY-009", name:"Celtic Guardian" 	,        type:"Normal Monster", attribute:"EARTH", 	subtype:"Warrior 	"     level:"4", atk:	"1400" ,def:"1200 	Common 	", description:"An elf who learned to wield a sword, he baffles enemies with lightning-swift attacks."};
var SDY_010 = {id:"SDY-010", name:"Mammoth Graveyard" 	,      type:"Normal Monster", attribute:"EARTH", 	subtype:"Dinosaur "     level:"3", atk:	"1200" ,def:"800 	Common 	", description:"A mammoth that protects the graves of its pack and is absolutely merciless when facing grave-robbers."};
var SDY_011 = {id:"SDY-011", name:"Great White",               type:"Normal Monster", attribute:"WATER", 	subtype:"Fish "         level:"4", atk:	"1600" ,def:"800 	Common 	", description:"A giant white shark with razor-sharp teeth."};
var SDY_012 = {id:"SDY-012", name:"Silver Fang" 	,            type:"Normal Monster", attribute:"EARTH", 	subtype:"Beast 	"       level:"3", atk:	"1200" ,def:"800 	Common", description:"A snow wolf that's beautiful to the eye, but absolutely vicious in battle."};
var SDY_013 = {id:"SDY-013", name:"Giant Soldier of Stone" ,   type:"Normal Monster", attribute:"EARTH", 	subtype:"Rock 	"       level:"3", atk:	"1300" ,def:"2000 	Common 	", description:"A giant warrior made of stone. A punch from this creature has earth-shaking results."};
var SDY_014 = {id:"SDY-014", name:"Dragon Zombie" 	,          type:"Normal Monster", attribute:"DARK", 	subtype:"Zombie 	"     level:"3", atk:	"1600" ,def:"0 	Common 	", description:"A dragon revived by sorcery. Its breath is highly corrosive."};
var SDY_015 = {id:"SDY-015", name:"Doma the Angel of Silence", type:"Normal Monster", attribute:"DARK", 	subtype:"Fairy 	"       level:"5", atk:	"1600" ,def:"1400 	Common 	", description:"This fairy rules over the end of existence."};
var SDY_016 = {id:"SDY-016", name:"Ansatsu" 	,                type:"Normal Monster", attribute:"EARTH", 	subtype:"Warrior 	"     level:"5", atk:	"1700" ,def:"1200 	Common 	", description:"A silent and deadly warrior specializing in assassinations."};
var SDY_017 = {id:"SDY-017", name:"Witty Phantom" 	,          type:"Normal Monster", attribute:"DARK", 	subtype:"Fiend 	"       level:"4", atk:	"1400" ,def:"1         300 	Common 	", description:"Dressed in a night-black tuxedo, this creature presides over death."};
var SDY_018 = {id:"SDY-018", name:"Claw Reacher" 	,            type:"Normal Monster", attribute:"DARK", 	subtype:"Fiend 	"       level:"3", atk:	"1000" ,def:"800 	Common 	", description:"Stretching arms and razor-sharp claws make this monster a formidable opponent."};
var SDY_019 = {id:"SDY-019", name:"Mystic Clown" 	,            type:"Normal Monster", attribute:"DARK", 	subtype:"Fiend 	"       level:"4", atk:	"1500" ,def:"1000 	Common 	", description:"Nothing can stop the mad attack of this powerful creature."};
var SDY_020 = {id:"SDY-020", name:"Sword of Dark Destruction", type:"Spell",          attribute:"Normal", 				Common 	", description:"A Dark monster equipped with this card increases its ATK by 400 points and decreases its DEF by 200 points."};
var SDY_021 = {id:"SDY-021", name:"Book of Secret Arts", 	     type:"Spell" 		,     attribute:"Equip", 				Common 	", description:"A Spellcaster-Type monster equipped with this card increases its ATK and DEF by 300 points."};
var SDY_022 = {id:"SDY-022", name:"Dark Hole", 	               type:"Spell", 		 ,    attribute:"Normal", 				Common 	", description:"Destroy all monsters on the field."};
var SDY_023 = {id:"SDY-023", name:"Dian Keto the Cure Master", type:"Spell" 	,       attribute:"Normal", 				Common 	", description:"Increase your Life Points by 1000 points."};
var SDY_024 = {id:"SDY-024", name:"Ancient Elf", 	             type:"Normal Monster", attribute:"LIGHT", 	Spellcaster 	4 	1450 	1200 	Common 	", description:"This elf is rumored to have lived for thousands of years. He leads an army of spirits against his enemies."};
var SDY_025 = {id:"SDY-025", name:"Magical Ghost", 	           type:"Normal Monster", attribute:"DARK 	Zombie 	4 	1300 	1400 	Common ", description:"	This creature casts a spell of terror and confusion just before attacking its enemies."};
var SDY_026 = {id:"SDY-026", name:"Fissure", 	                 type:" type:Spell", 		attribute:"Normal 				Common 	", attribute:" description:""Destroy the 1 face-up monster your opponent controls that has the lowest ATK. (If it's a tie, you get to choose.)"};
var SDY_027 = {id:"SDY-027", name:"Trap Hole", 	               type:"Trap",           attribute:"Normal" 				Common 	", attribute:" description:"When your opponent Normal or Flip Summons a monster with 1000 or more ATK: Target that monster; destroy that target."};
var SDY_028 = {id:"SDY-028", name:"Two-Pronged Attack", 	     type:"Trap", 		      attribute:"Normal", rarity:"	Common 	", description:"Select and destroy 2 of your monsters and 1 of your opponent's monsters."};
var SDY_029 = {id:"SDY-029", name:"De-Spell", 	               type:"Spell", 		      attribute:"Normal" 				, attribute:"Common 	", description:"Select 1 Spell Card on the field and destroy it. If the selected card is Set, pick up and see the card. If it is a Spell Card, it is destroyed. If it is a Trap Card, return it to its original position."};
var SDY_030 = {id:"SDY-030", name:"Monster Reborn", 	         type:"Spell",          attribute:"Normal" 				"Common", description:"Target 1 monster in either player's Graveyard; Special Summon it."};
var SDY_031 = {id:"SDY-031", name:"Reinforcements",            type:"	Trap",          attribute:"Normal" 				"Common", description:"Increase the ATK of 1 face-up monster on the field by 500 points until the end of this turn."};
var SDY_032 = {id:"SDY-032", name:"Change of Heart", 	         type:"Spell",          attribute:"Normal" 				"Common" 	, description:"Target 1 monster your opponent controls; take control of it until the End Phase."};
var SDY_033 = {id:"SDY-033", name:"The Stern Mystic", 	       type:"Flip/Effect Monster", attribute:"LIGHT" 	"Spellcaster" 	4 	1500 	1200 	Common 	", description:"FLIP: All face-down cards on the field are turned face-up, and then returned to their original position. No card effects are activated when cards are turned face-up."};
var SDY_034 = {id:"SDY-034", name:"Wall of Illusion",          type:"	Effect Monster", attribute:"DARK" 	Fiend 	4 	1000 	1850 	Common 	", description:"A monster that attacks this monster is returned to its owner's hand after damage calculation. Damage calculation is applied normally."};
var SDY_035 = {id:"SDY-035", name:"Neo the Magic Swordsman",   type:"Normal Monster", attribute:"LIGHT 	Spellcaster 	4 	1700 	1000 	Common 	", description:"A dimensional drifter who not only practices sorcery, but is also a sword and martial arts master."};
var SDY_036 = {id:"SDY-036", name:"Baron of the Fiend Sword",  type:"Normal Monster", attribute:"DARK 	Fiend 	4 	1550 	800 	Common 	", description:"An aristocrat who wields a sword possessed by a malicious spirit that preys on the weak."};
var SDY_037 = {id:"SDY-037", name:"Man-Eating Treasure Chest", type:"Normal Monster", attribute:"DARK 	Fiend 	4 	1600 	1000 	Common 	", description:"A monster disguised as a treasure chest that is known to attack the unwary adventurer."};
var SDY_038 = {id:"SDY-038", name:"Sorcerer of the Doomed", 	 type:"Normal Monster", attribute:"DARK 	Spellcaster 	4 	1450 	1200 	Common 	", description:"A slave of the dark arts, this sorcerer is a master of death-dealing spells."};
var SDY_039 = {id:"SDY-039", name:"Last Will", 	               type:"Spell",          attribute:"Normal 				Common 	", description:"If a monster on your side of the field was sent to your Graveyard this turn, you can Special Summon 1 monster with an ATK of 1500 points or less from your Deck once during this turn. Then shuffle your Deck."};
var SDY_040 = {id:"SDY-040", name:"Waboku", 	                 type:"Trap",           attribute:"Normal 				Common 	", description:"You take no Battle Damage this turn. Your monsters cannot be destroyed by battle this turn."};
var SDY_041 = {id:"SDY-041", name:"Soul Exchange", 	           type:"Spell",          attribute:"Normal 				Super Rare 	", description:"Target 1 monster your opponent controls; this turn, if you Tribute a monster, you must Tribute that monster, as if you controlled it. You cannot conduct your Battle Phase the turn you activate this card."};
var SDY_042 = {id:"SDY-042", name:"Card Destruction", 	       type:"Spell",          attribute:"Normal 				Super Rare 	", description:"Each player discards their entire hand, then draws the same number of cards they discarded."};
var SDY_043 = {id:"SDY-043", name:"Trap Master", 	             type:"Flip/Effect Monster",attribute:"EARTH 	Warrior 	3 	500 	1100 	Common 	", description:"FLIP: Select 1 Trap Card on the field and destroy it. If the selected card is Set, pick up and see the card. If it is a Trap Card, it is destroyed. If it is a Spell Card, return it to its original position."};
var SDY_044 = {id:"SDY-044", name:"Dragon Capture Jar", 	     type:"Trap",", 	     	attribute:"Continuous 				Common 	", description:"Change all face-up Dragon-Type monsters on the field to Defense Position, also they cannot change their battle positions."};
var SDY_045 = {id:"SDY-045", name:"Yami", 	                   type:"Spell",", 	     	attribute:"Field 				Common 	", description:"Increases the ATK and DEF of all Fiend and Spellcaster-Type monsters by 200 points. Also decreases the ATK and DEF of all Fairy-Type monsters by 200 points."};
var SDY_046 = {id:"SDY-046", name:"Man-Eater Bug", 	           type:"Flip/Effect Monster",attribute:"EARTH 	Insect 	2 	450 	600 	Common 	", description:"FLIP: Select and destroy 1 monster on the field."};
var SDY_047 = {id:"SDY-047", name:"Reverse Trap", 	           type:"Trap",", 	     	attribute:"Normal 				Common 	", description:"All increases and decreases to ATK and DEF are reversed for the turn in which this card is activated."};
var SDY_048 = {id:"SDY-048", name:"Remove Trap", 	             type:"Spell",", 	     	attribute:"Normal 				Common 	", description:"Destroys 1 face-up Trap Card on the field."};
var SDY_049 = {id:"SDY-049", name:"Castle Walls", 	           type:"Trap",", 	     	attribute:"Normal 				Common 	", description:"Increase the DEF of 1 face-up monster on the field by 500 points until the end of this turn."};
var SDY_050 = {id:"SDY-050", 	name:"Ultimate Offering", 	     type:"Trap", 		      attribute:"Continuous 				Common 	", description:"You can pay 500 Life Points to Normal Summon or Set 1 extra monster. You can only activate this effect during your Main Phase or your opponent's Battle Phase."};



var myDeck = [];// created empty deck []
var myHand = [];// created empty hand []
var myMonsters = []; // created monster zone []
var myTraps=[]; //created trap card zone
var myGraveyard = []; //created graveyard

var oppDeck = [];// created opponent empty deck []
var oppHand = [];// created opponent empty hand []
var oppMonsters = []; // created opponent monster zone []
var oppTraps= [];
var oppGraveyard = []; //created opponent graveyard


myDeck[0]= myCard1; //this adds card to list
myDeck[1]= myCard2;
myDeck.push(myCard3);  //.push add card to end of list

//alert(myDeck[1].atk);
console.log(myDeck);

var matches = document.querySelectorAll(".cardZone");
console.log("matches are");
console.log(matches);

document.getElementById("player1Deck").addEventListener("click", drawCard); //we find the only instance of player1Deck, when clicked activate function

//this function removes a card from the deck and adds to hand
function drawCard(e){
  e.preventDefault(); //we need this so the page does not refresh
  myHand.push(myDeck.shift());    //this removes the head and returns the head
  console.log("myHand is");
  console.log(myHand);
  console.log("myDeck is");
  console.log(myDeck);
  var handSize= (myHand.length)-1 ;
  console.log()
  var node = document.createElement("IMG")// created <img></img>
  var daImage= "img/"+ myHand[handSize].image; //created string "img/SDY-001"
  console.log(myHand[handSize].image);
  console.log(daImage);
  node.setAttribute("src",daImage); //<img src="daImage">
  node.setAttribute("width","80"); //<img src="daImage" width="80"></img>
  var textnode = document.createTextNode(myHand[handSize].Name);
  console.log(textnode);
  node.appendChild(textnode);//<p>Dark</p>
  matches[handSize].appendChild(node);
  console.log(matches);
  console.log("drawCard funct called");
}


/* this function removes a card from deck and adds to hand, works kinda ptag
function drawCard(e){
  e.preventDefault(); //we need this so the page does not refresh
  myHand.push(myDeck.shift());    //this removes the head and returns the head
  console.log("myHand is");
  console.log(myHand);
  console.log("myDeck is");
  console.log(myDeck);
  var node = document.createElement("p")// created <p></p>
  var textnode = document.createTextNode(myHand[0].Name);
  console.log(textnode);
  node.appendChild(textnode);//<p>Dark</p>
  matches[0].appendChild(node);
  console.log(matches);
  console.log("drawCard funct called");
}
*/


//this function returns randome number
  function diceRoll(e){
    e.preventDefault(); //we need this so the page does not refresh
    var randomNum = Math.floor(Math.random() * 10); //returns a random number from 0-9
    console.log(randomNum);

}








/* CARD list from  https://www.yugiohcardguide.com/spoilers/starter-deck-yugi.html
Card # 	Card Name 	Type 	ATR    	Sub Type     	LVL     	ATK     	DEF     	Rarity 	Card Text 	Buy It
SDY-001 	Mystical Elf 	Normal Monster 	LIGHT 	Spellcaster 	4 	800 	2000 	Common 	A delicate elf that lacks offense, but has a terrific defense backed by mystical power.
SDY-002 	Feral Imp 	Normal Monster 	DARK 	Fiend 	4 	1300 	1400 	Common 	A playful little fiend that lurks in the dark, waiting to attack an unwary enemy.
SDY-003 	Winged Dragon, Guardian of the Fortress #1 	Normal Monster 	WIND 	Dragon 	4 	1400 	1200 	Common 	A dragon commonly found guarding mountain fortresses. Its signature attack is a sweeping dive from out of the blue.
SDY-004 	Summoned Skull 	Normal Monster 	DARK 	Fiend 	6 	2500 	1200 	Common 	A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force.
SDY-005 	Beaver Warrior 	Normal Monster 	EARTH 	Beast-Warrior 	4 	1200 	1500 	Common 	What this creature lacks in size it makes up for in defense when battling in the prairie.
SDY-006 	Dark Magician 	Normal Monster 	DARK 	Spellcaster 	7 	2500 	2100 	Ultra Rare 	The ultimate wizard in terms of attack and defense.
SDY-007 	Gaia the Fierce Knight 	Normal Monster 	EARTH 	Warrior 	7 	2300 	2100 	Common 	A knight whose horse travels faster than the wind. His battle-charge is a force to be reckoned with.
SDY-008 	Curse of Dragon 	Normal Monster 	DARK 	Dragon 	5 	2000 	1500 	Common 	A wicked dragon that taps into dark forces to execute a powerful attack.
SDY-009 	Celtic Guardian 	Normal Monster 	EARTH 	Warrior 	4 	1400 	1200 	Common 	An elf who learned to wield a sword, he baffles enemies with lightning-swift attacks.
SDY-010 	Mammoth Graveyard 	Normal Monster 	EARTH 	Dinosaur 	3 	1200 	800 	Common 	A mammoth that protects the graves of its pack and is absolutely merciless when facing grave-robbers.
SDY-011 	Great White 	Normal Monster 	WATER 	Fish 	4 	1600 	800 	Common 	A giant white shark with razor-sharp teeth.
SDY-012 	Silver Fang 	Normal Monster 	EARTH 	Beast 	3 	1200 	800 	Common 	A snow wolf that's beautiful to the eye, but absolutely vicious in battle.
SDY-013 	Giant Soldier of Stone 	Normal Monster 	EARTH 	Rock 	3 	1300 	2000 	Common 	A giant warrior made of stone. A punch from this creature has earth-shaking results.
SDY-014 	Dragon Zombie 	Normal Monster 	DARK 	Zombie 	3 	1600 	0 	Common 	A dragon revived by sorcery. Its breath is highly corrosive.
SDY-015 	Doma the Angel of Silence 	Normal Monster 	DARK 	Fairy 	5 	1600 	1400 	Common 	This fairy rules over the end of existence.
SDY-016 	Ansatsu 	Normal Monster 	EARTH 	Warrior 	5 	1700 	1200 	Common 	A silent and deadly warrior specializing in assassinations.
SDY-017 	Witty Phantom 	Normal Monster 	DARK 	Fiend 	4 	1400 	1300 	Common 	Dressed in a night-black tuxedo, this creature presides over death.
SDY-018 	Claw Reacher 	Normal Monster 	DARK 	Fiend 	3 	1000 	800 	Common 	Stretching arms and razor-sharp claws make this monster a formidable opponent.
SDY-019 	Mystic Clown 	Normal Monster 	DARK 	Fiend 	4 	1500 	1000 	Common 	Nothing can stop the mad attack of this powerful creature.
SDY-020 	Sword of Dark Destruction 	Spell 		Normal 				Common 	A Dark monster equipped with this card increases its ATK by 400 points and decreases its DEF by 200 points.
SDY-021 	Book of Secret Arts 	Spell 		Equip 				Common 	A Spellcaster-Type monster equipped with this card increases its ATK and DEF by 300 points.
SDY-022 	Dark Hole 	Spell 		Normal 				Common 	Destroy all monsters on the field.
SDY-023 	Dian Keto the Cure Master 	Spell 		Normal 				Common 	Increase your Life Points by 1000 points.
SDY-024 	Ancient Elf 	Normal Monster 	LIGHT 	Spellcaster 	4 	1450 	1200 	Common 	This elf is rumored to have lived for thousands of years. He leads an army of spirits against his enemies.
SDY-025 	Magical Ghost 	Normal Monster 	DARK 	Zombie 	4 	1300 	1400 	Common 	This creature casts a spell of terror and confusion just before attacking its enemies.
SDY-026 	Fissure 	Spell 		Normal 				Common 	Destroy the 1 face-up monster your opponent controls that has the lowest ATK. (If it's a tie, you get to choose.)
SDY-027 	Trap Hole 	Trap 		Normal 				Common 	When your opponent Normal or Flip Summons a monster with 1000 or more ATK: Target that monster; destroy that target.
SDY-028 	Two-Pronged Attack 	Trap 		Normal 				Common 	Select and destroy 2 of your monsters and 1 of your opponent's monsters.
SDY-029 	De-Spell 	Spell 		Normal 				Common 	Select 1 Spell Card on the field and destroy it. If the selected card is Set, pick up and see the card. If it is a Spell Card, it is destroyed. If it is a Trap Card, return it to its original position.
SDY-030 	Monster Reborn 	Spell 		Normal 				Common 	Target 1 monster in either player's Graveyard; Special Summon it.
SDY-031 	Reinforcements 	Trap 		Normal 				Common 	Increase the ATK of 1 face-up monster on the field by 500 points until the end of this turn.
SDY-032 	Change of Heart 	Spell 		Normal 				Common 	Target 1 monster your opponent controls; take control of it until the End Phase.
SDY-033 	The Stern Mystic 	Flip/Effect Monster 	LIGHT 	Spellcaster 	4 	1500 	1200 	Common 	FLIP: All face-down cards on the field are turned face-up, and then returned to their original position. No card effects are activated when cards are turned face-up.
SDY-034 	Wall of Illusion 	Effect Monster 	DARK 	Fiend 	4 	1000 	1850 	Common 	A monster that attacks this monster is returned to its owner's hand after damage calculation. Damage calculation is applied normally.
SDY-035 	Neo the Magic Swordsman 	Normal Monster 	LIGHT 	Spellcaster 	4 	1700 	1000 	Common 	A dimensional drifter who not only practices sorcery, but is also a sword and martial arts master.
SDY-036 	Baron of the Fiend Sword 	Normal Monster 	DARK 	Fiend 	4 	1550 	800 	Common 	An aristocrat who wields a sword possessed by a malicious spirit that preys on the weak.
SDY-037 	Man-Eating Treasure Chest 	Normal Monster 	DARK 	Fiend 	4 	1600 	1000 	Common 	A monster disguised as a treasure chest that is known to attack the unwary adventurer.
SDY-038 	Sorcerer of the Doomed 	Normal Monster 	DARK 	Spellcaster 	4 	1450 	1200 	Common 	A slave of the dark arts, this sorcerer is a master of death-dealing spells.
SDY-039 	Last Will 	Spell 		Normal 				Common 	If a monster on your side of the field was sent to your Graveyard this turn, you can Special Summon 1 monster with an ATK of 1500 points or less from your Deck once during this turn. Then shuffle your Deck.
SDY-040 	Waboku 	Trap 		Normal 				Common 	You take no Battle Damage this turn. Your monsters cannot be destroyed by battle this turn.
SDY-041 	Soul Exchange 	Spell 		Normal 				Super Rare 	Target 1 monster your opponent controls; this turn, if you Tribute a monster, you must Tribute that monster, as if you controlled it. You cannot conduct your Battle Phase the turn you activate this card.
SDY-042 	Card Destruction 	Spell 		Normal 				Super Rare 	Each player discards their entire hand, then draws the same number of cards they discarded.
SDY-043 	Trap Master 	Flip/Effect Monster 	EARTH 	Warrior 	3 	500 	1100 	Common 	FLIP: Select 1 Trap Card on the field and destroy it. If the selected card is Set, pick up and see the card. If it is a Trap Card, it is destroyed. If it is a Spell Card, return it to its original position.
SDY-044 	Dragon Capture Jar 	Trap 		Continuous 				Common 	Change all face-up Dragon-Type monsters on the field to Defense Position, also they cannot change their battle positions.
SDY-045 	Yami 	Spell 		Field 				Common 	Increases the ATK and DEF of all Fiend and Spellcaster-Type monsters by 200 points. Also decreases the ATK and DEF of all Fairy-Type monsters by 200 points.
SDY-046 	Man-Eater Bug 	Flip/Effect Monster 	EARTH 	Insect 	2 	450 	600 	Common 	FLIP: Select and destroy 1 monster on the field.
SDY-047 	Reverse Trap 	Trap 		Normal 				Common 	All increases and decreases to ATK and DEF are reversed for the turn in which this card is activated.
SDY-048 	Remove Trap 	Spell 		Normal 				Common 	Destroys 1 face-up Trap Card on the field.
SDY-049 	Castle Walls 	Trap 		Normal 				Common 	Increase the DEF of 1 face-up monster on the field by 500 points until the end of this turn.
SDY-050 	Ultimate Offering 	Trap 		Continuous 				Common 	You can pay 500 Life Points to Normal Summon or Set 1 extra monster. You can only activate this effect during your Main Phase or your opponent's Battle Phase.

Read more: https://www.yugiohcardguide.com/spoilers/starter-deck-yugi.html#ixzz5OUchb6jm
Follow us: @yugiohcardguide on Twitter | YuGiOhCardGuide on Facebook
*/

/* Kaiba deck list  https://www.yugiohcardguide.com/spoilers/starter-deck-kaiba.html

Card # 	Card Name 	Type 	ATR    	Sub Type     	LVL     	ATK     	DEF     	Rarity 	Card Text 	Buy It
SDK-001 	Blue-Eyes White Dragon 	Normal Monster 	LIGHT 	Dragon 	8 	3000 	2500 	Ultra Rare 	This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale.
SDK-002 	Hitotsu-Me Giant 	Normal Monster 	EARTH 	Beast-Warrior 	4 	1200 	1000 	Common 	A one-eyed behemoth with thick, powerful arms made for delivering punishing blows.
SDK-003 	Ryu-Kishin 	Normal Monster 	DARK 	Fiend 	3 	1000 	500 	Common 	A very elusive creature that looks like a harmless statue until it attacks.
SDK-004 	The Wicked Worm Beast 	Effect Monster 	EARTH 	Beast 	3 	1400 	700 	Common 	This face-up card on the field is returned to the owner's hand during the End Phase of your turn.
SDK-005 	Battle Ox 	Normal Monster 	EARTH 	Beast-Warrior 	4 	1700 	1000 	Common 	A monster with tremendous power, it destroys enemies with a swing of its axe.
SDK-006 	Koumori Dragon 	Normal Monster 	DARK 	Dragon 	4 	1500 	1200 	Common 	A vicious, fire-breathing dragon whose wicked flame corrupts the souls of its victims.
SDK-007 	Judge Man 	Normal Monster 	EARTH 	Warrior 	6 	2200 	1500 	Common 	This club-wielding warrior battles to the end and will never surrender.
SDK-008 	Rogue Doll 	Normal Monster 	LIGHT 	Spellcaster 	4 	1600 	1000 	Common 	A deadly doll gifted with mystical power, it is particularly powerful when attacking against dark forces.
SDK-009 	Kojikocy 	Normal Monster 	EARTH 	Warrior 	4 	1500 	1200 	Common 	A man-hunter with powerful arms that can crush boulders
SDK-010 	Uraby 	Normal Monster 	EARTH 	Dinosaur 	4 	1500 	800 	Common 	Fast on its feet, this dinosaur rips enemies to shreds with its sharp claws.
SDK-011 	Gyakutenno Megami 	Normal Monster 	LIGHT 	Fairy 	6 	1800 	2000 	Common 	This fairy uses her mystical power to protect the weak and provide spiritual support.
SDK-012 	Mystic Horseman 	Normal Monster 	EARTH 	Beast 	4 	1300 	1550 	Common 	Half man and half horse, this monster is known for its extreme speed.
SDK-013 	Terra the Terrible 	Normal Monster 	DARK 	Fiend 	4 	1200 	1300 	Common 	Known as a swamp dweller, this creature is a minion of the dark forces.
SDK-014 	Dark Titan of Terror 	Normal Monster 	DARK 	Fiend 	4 	1300 	1100 	Common 	A fiend said to dwell in the world of dreams, it attacks enemies in their sleep.
SDK-015 	Dark Assailant 	Normal Monster 	DARK 	Zombie 	4 	1200 	1200 	Common 	Armed with the Psycho Sword, this sinister assassin rules the bad land.
SDK-016 	Master & Expert 	Normal Monster 	EARTH 	Beast 	4 	1200 	1000 	Common 	A deadly duo consisting of a beast master and its loyal servant.
SDK-017 	Unknown Warrior of Fiend 	Normal Monster 	DARK 	Warrior 	3 	1000 	500 	Common 	A deadly duo consisting of a beast master and its loyal servant.
SDK-018 	Mystic Clown 	Normal Monster 	DARK 	Fiend 	4 	1500 	1000 	Common 	Nothing can stop the mad attack of this powerful creature.
SDK-019 	Ogre of the Black Shadow 	Normal Monster 	EARTH 	Beast-Warrior 	4 	1200 	1400 	Common 	An ogre possessed by the powers of the dark. Few can withstand its rapid charge.
SDK-020 	Dark Energy 	Spell 		Equip 				Common 	A Fiend-Type monster equipped with this card increases its ATK and DEF by 300 points.
SDK-021 	Invigoration 	Spell 		Equip 				Common 	An Earth monster equipped with this card increases its ATK by 400 and decreases its DEF by 200.
SDK-022 	Dark Hole 	Spell 		Normal 				Common 	Destroy all monsters on the field.
SDK-023 	Ookazi 	Spell 		Normal 				Common 	Inflict 800 damage to your opponent.
SDK-024 	Ryu-Kishin Powered 	Normal Monster 	LIGHT 	Fiend 	4 	1600 	1200 	Common 	A gargoyle enhanced by the powers of darkness. Very sharp talons make it a worthy opponent.
SDK-025 	Swordstalker 	Normal Monster 	DARK 	Warrior 	6 	2000 	1600 	Common 	A monster formed by the vengeful souls of those who passed away in battle.
SDK-026 	La Jinn the Mystical Genie of the Lamp 	Normal Monster 	DARK 	Fiend 	4 	1800 	1000 	Common 	A genie of the lamp that is at the beck and call of its master.
SDK-027 	Rude Kaiser 	Normal Monster 	EARTH 	Beast-Warrior 	5 	1800 	1600 	Common 	With an axe in each hand, this monster delivers heavy damage.
SDK-028 	Destroyer Golem 	Normal Monster 	EARTH 	Rock 	4 	1500 	1000 	Common 	A golem with a massive right hand for crushing its victims.
SDK-029 	Skull Red Bird 	Normal Monster 	WIND 	Winged Beast 	4 	1550 	1200 	Common 	This monster swoops down and attacks with a rain of knives stored in its wings.
SDK-030 	D. Human 	Normal Monster 	EARTH 	Warrior 	4 	1300 	1100 	Common 	Gifted with the power of dragons, this warrior wields a sword created from a dragon's fang.
SDK-031 	Pale Beast 	Normal Monster 	EARTH 	Beast 	4 	1500 	1200 	Common 	With skin tinged bluish-white, this strange creature is a fearsome sight to behold.
SDK-032 	Fissure 	Spell 		Normal 				Common 	Destroy the 1 face-up monster your opponent controls that has the lowest ATK. (If it's a tie, you get to choose.)
SDK-033 	Trap Hole 	Trap 		Normal 				Common 	When your opponent Normal or Flip Summons a monster with 1000 or more ATK: Target that monster; destroy that target.
SDK-034 	Two-Pronged Attack 	Trap 		Normal 				Common 	Select and destroy 2 of your monsters and 1 of your opponent's monsters.
SDK-035 	De-Spell 	Spell 		Normal 				Common 	Select 1 Spell Card on the field and destroy it. If the selected card is Set, pick up and see the card. If it is a Spell Card, it is destroyed. If it is a Trap Card, return it to its original position.
SDK-036 	Monster Reborn 	Spell 		Normal 				Common 	Target 1 monster in either player's Graveyard; Special Summon it.
SDK-037 	The Inexperienced Spy 	Spell 		Normal 				Common 	Select and see 1 card in your opponent's hand.
SDK-038 	Reinforcements 	Trap 		Normal 				Common 	Increase the ATK of 1 face-up monster on the field by 500 points until the end of this turn.
SDK-039 	Ancient Telescope 	Spell 		Normal 				Common 	See the top 5 cards of your opponent's Deck. Return the cards to the Deck in the same order.
SDK-040 	Just Desserts 	Trap 		Normal 				Common 	Inflict 500 points of damage to your opponent's Life Points for each monster on your opponent's side of the field.
SDK-041 	Lord of D. 	Effect Monster 	DARK 	Spellcaster 	4 	1200 	1100 	Super Rare 	Face-up Dragon-Type monsters cannot be targeted by Spells, Traps, or card effects.
SDK-042 	The Flute of Summoning Dragon 	Spell 		Normal 				Super Rare 	Special Summon up to 2 Dragon-Type monsters from your hand. There must be a face-up "Lord of D." on the field to activate and to resolve this effect.
SDK-043 	Mysterious Puppeteer 	Effect Monster 	EARTH 	Warrior 	4 	1000 	1500 	Common 	Each time you or your opponent Normal Summons or Flip Summons a monster, increase your Life Points by 500 points.
SDK-044 	Trap Master 	Flip/Effect Monster 	EARTH 	Warrior 	3 	500 	1100 	Common 	FLIP: Select 1 Trap Card on the field and destroy it. If the selected card is Set, pick up and see the card. If it is a Trap Card, it is destroyed. If it is a Spell Card, return it to its original position.
SDK-045 	Sogen 	Spell 		Field 				Common 	Increases the ATK and DEF of all Beast-Warrior and Warrior-Type monsters by 200 points.
SDK-046 	Hane-Hane 	Flip/Effect Monster 	EARTH 	Beast 	2 	450 	500 	Common 	FLIP: Select 1 Monster Card on the field (regardless of position) and return it to its owner's hand.
SDK-047 	Reverse Trap 	Trap 		Normal 				Common 	All increases and decreases to ATK and DEF are reversed for the turn in which this card is activated.
SDK-048 	Remove Trap 	Spell 		Normal 				Common 	Destroys 1 face-up Trap Card on the field.
SDK-049 	Castle Walls 	Trap 		Normal 				Common 	Increase the DEF of 1 face-up monster on the field by 500 points until the end of this turn.
SDK-050 	Ultimate Offering 	Trap 		Continuous 				Common 	You can pay 500 Life Points to Normal Summon or Set 1 extra monster. You can only activate this effect during your Main Phase or your opponent's Battle Phase.

Read more: https://www.yugiohcardguide.com/spoilers/starter-deck-kaiba.html#ixzz5OUd3uUch
Follow us: @yugiohcardguide on Twitter | YuGiOhCardGuide on Facebook
*/
