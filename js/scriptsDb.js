//this script2 is for th deck customizer

var SDY_001 = {id:"SDY-001", name:"Mystical Elf",              type:"Normal Monster",      attribute:"LIGHT", 	subtype:"Spellcaster",  level:"4", atk:	"800" , def:"2000",  rarity:"Common",     description:"A delicate elf that lacks offense, but has a terrific defense backed by mystical power."};
var SDY_002 = {id:"SDY-002", name:"Feral Imp",                 type:"Normal Monster",      attribute:"DARK", 	  subtype:"Fiend",	      level:"4", atk:	"1300" ,def:"1400",  rarity:"Common",     description:"A playful little fiend that lurks in the dark, waiting to attack an unwary enemy."};
var SDY_003 = {id:"SDY-003", name:"Winged Dragon, Guardian",   type:"Normal Monster",      attribute:"WIND", 	  subtype:"Dragon",	      level:"4", atk:	"1400" ,def:"1200",  rarity:"Common",     description:"A dragon commonly found guarding mountain fortresses. Its signature attack is a sweeping dive from out of the blue."};
var SDY_004 = {id:"SDY-004", name:"Summoned Skull",            type:"Normal Monster",      attribute:"DARK", 	  subtype:"Fiend", 	      level:"6", atk:	"2500" ,def:"1200",  rarity:"Common",     description:"A fiend with dark powers for confusing the enemy. Among the Fiend-Type monsters, this monster boasts considerable force."};
var SDY_005 = {id:"SDY-005", name:"Beaver Warrior",            type:"Normal Monster",      attribute:"EARTH", 	subtype:"Beast-Warrior",level:"4", atk:	"1200" ,def:"150",   rarity:"Common",     description:"What this creature lacks in size it makes up for in defense when battling in the prairie."};
var SDY_006 = {id:"SDY-006", name:"Dark Magician",             type:"Normal Monster",      attribute:"DARK", 	  subtype:"Spellcaster",  level:"7", atk:	"2500" ,def:"2100",  rarity:"Ultra Rare", description:"The ultimate wizard in terms of attack and defense."};
var SDY_007 = {id:"SDY-007", name:"Gaia the Fierce Knight",    type:"Normal Monster",      attribute:"EARTH", 	subtype:"Warrior",      level:"7", atk:	"2300" ,def:"2100",  rarity:"Common",     description:"A knight whose horse travels faster than the wind. His battle-charge is a force to be reckoned with."};
var SDY_008 = {id:"SDY-008", name:"Curse of Dragon",           type:"Normal Monster",      attribute:"DARK", 	  subtype:"Dragon",       level:"5", atk:	"2000" ,def:"1500",  rarity:"Common",     description:"A wicked dragon that taps into dark forces to execute a powerful attack."};
var SDY_009 = {id:"SDY-009", name:"Celtic Guardian",           type:"Normal Monster",      attribute:"EARTH", 	subtype:"Warrior",      level:"4", atk:	"1400" ,def:"1200",  rarity:"Common",     description:"An elf who learned to wield a sword, he baffles enemies with lightning-swift attacks."};
var SDY_010 = {id:"SDY-010", name:"Mammoth Graveyard",         type:"Normal Monster",      attribute:"EARTH", 	subtype:"Dinosaur",     level:"3", atk:	"1200" ,def:"800",   rarity:"Common",     description:"A mammoth that protects the graves of its pack and is absolutely merciless when facing grave-robbers."};
var SDY_011 = {id:"SDY-011", name:"Great White",               type:"Normal Monster",      attribute:"WATER", 	subtype:"Fish",         level:"4", atk:	"1600" ,def:"800",   rarity:"Common",     description:"A giant white shark with razor-sharp teeth."};
var SDY_012 = {id:"SDY-012", name:"Silver Fang",               type:"Normal Monster",      attribute:"EARTH", 	subtype:"Beast",        level:"3", atk:	"1200" ,def:"800",   rarity:"Common",     description:"A snow wolf that's beautiful to the eye, but absolutely vicious in battle."};
var SDY_013 = {id:"SDY-013", name:"Giant Soldier of Stone",    type:"Normal Monster",      attribute:"EARTH", 	subtype:"Rock",         level:"3", atk:	"1300" ,def:"2000",  rarity:"Common",     description:"A giant warrior made of stone. A punch from this creature has earth-shaking results."};
var SDY_014 = {id:"SDY-014", name:"Dragon Zombie",             type:"Normal Monster",      attribute:"DARK", 	  subtype:"Zombie",       level:"3", atk:	"1600" ,def:"0",     rarity:"Common",     description:"A dragon revived by sorcery. Its breath is highly corrosive."};
var SDY_015 = {id:"SDY-015", name:"Doma the Angel of Silence", type:"Normal Monster",      attribute:"DARK", 	  subtype:"Fairy",        level:"5", atk:	"1600" ,def:"1400",  rarity:"Common",     description:"This fairy rules over the end of existence."};
var SDY_016 = {id:"SDY-016", name:"Ansatsu",                   type:"Normal Monster",      attribute:"EARTH", 	subtype:"Warrior",      level:"5", atk:	"1700" ,def:"1200",  rarity:"Common",     description:"A silent and deadly warrior specializing in assassinations."};
var SDY_017 = {id:"SDY-017", name:"Witty Phantom",             type:"Normal Monster",      attribute:"DARK", 	  subtype:"Fiend",        level:"4", atk:	"1400" ,def:"1300",  rarity:"Common",     description:"Dressed in a night-black tuxedo, this creature presides over death."};
var SDY_018 = {id:"SDY-018", name:"Claw Reacher",              type:"Normal Monster",      attribute:"DARK", 	  subtype:"Fiend",        level:"3", atk:	"1000" ,def:"800",   rarity:"Common",     description:"Stretching arms and razor-sharp claws make this monster a formidable opponent."};
var SDY_019 = {id:"SDY-019", name:"Mystic Clown",              type:"Normal Monster",      attribute:"DARK", 	  subtype:"Fiend",        level:"4", atk:	"1500" ,def:"1000",  rarity:"Common",     description:"Nothing can stop the mad attack of this powerful creature."};
var SDY_020 = {id:"SDY-020", name:"Sword of Dark Destruction", type:"Spell",               attribute:"Equip", 			                                                      	 rarity:"Common",     description:"A Dark monster equipped with this card increases its ATK by 400 points and decreases its DEF by 200 points."};
var SDY_021 = {id:"SDY-021", name:"Book of Secret Arts", 	     type:"Spell",               attribute:"Equip", 			                                                         rarity:"Common",     description:"A Spellcaster-Type monster equipped with this card increases its ATK and DEF by 300 points."};
var SDY_022 = {id:"SDY-022", name:"Dark Hole", 	               type:"Spell", 		           attribute:"Normal", 		                                                      	   rarity:"Common",     description:"Destroy all monsters on the field."};
var SDY_023 = {id:"SDY-023", name:"Dian Keto the Cure Master", type:"Spell",               attribute:"Normal", 			                                                         rarity:"Common",     description:"Increase your Life Points by 1000 points."};
var SDY_024 = {id:"SDY-024", name:"Ancient Elf", 	             type:"Normal Monster",      attribute:"LIGHT", 	subtype:"Spellcaster", level:"4", atk: "1450" ,def:"1200",   rarity:"Common",     description:"This elf is rumored to have lived for thousands of years. He leads an army of spirits against his enemies."};
var SDY_025 = {id:"SDY-025", name:"Magical Ghost", 	           type:"Normal Monster",      attribute:"DARK", 	  subtype:"Zombie",      level:"4", atk: "1300" ,def:"1400", 	 rarity:"Common",     description:"	This creature casts a spell of terror and confusion just before attacking its enemies."};
var SDY_026 = {id:"SDY-026", name:"Fissure", 	                 type:"Spell", 		           attribute:"Normal", 			         	                                               rarity:"Common",     description:"Destroy the 1 face-up monster your opponent controls that has the lowest ATK. (If it's a tie, you get to choose.)"};
var SDY_027 = {id:"SDY-027", name:"Trap Hole", 	               type:"Trap",                attribute:"Normal", 			                                                   	     rarity:"Common",     description:"When your opponent Normal or Flip Summons a monster with 1000 or more ATK: Target that monster; destroy that target."};
var SDY_028 = {id:"SDY-028", name:"Two-Pronged Attack", 	     type:"Trap", 		           attribute:"Normal",                                                               rarity:"Common",     description:"Select and destroy 2 of your monsters and 1 of your opponent's monsters."};
var SDY_029 = {id:"SDY-029", name:"De-Spell", 	               type:"Spell", 		           attribute:"Normal", 			                                                       	 rarity:"Common ",    description:"Select 1 Spell Card on the field and destroy it. If the selected card is Set, pick up and see the card. If it is a Spell Card, it is destroyed. If it is a Trap Card, return it to its original position."};
var SDY_030 = {id:"SDY-030", name:"Monster Reborn", 	         type:"Spell",               attribute:"Normal", 			                                                       	 rarity:"Common",     description:"Target 1 monster in either player's Graveyard; Special Summon it."};
var SDY_031 = {id:"SDY-031", name:"Reinforcements",            type:"Trap",                attribute:"Normal", 			                                                       	 rarity:"Common",     description:"Increase the ATK of 1 face-up monster on the field by 500 points until the end of this turn."};
var SDY_032 = {id:"SDY-032", name:"Change of Heart", 	         type:"Spell",               attribute:"Normal", 			                                                      	 rarity:"Common",     description:"Target 1 monster your opponent controls; take control of it until the End Phase."};
var SDY_033 = {id:"SDY-033", name:"The Stern Mystic", 	       type:"Flip/Effect Monster", attribute:"LIGHT",   subtype:"Spellcaster", level:"4", atk:"1500" ,def:"1200",    rarity:"Common",     description:"FLIP: All face-down cards on the field are turned face-up, and then returned to their original position. No card effects are activated when cards are turned face-up."};
var SDY_034 = {id:"SDY-034", name:"Wall of Illusion",          type:"Effect Monster",      attribute:"DARK", 	  subtype:"Fiend",       level:"4", atk:"1000" ,def:"1850",    rarity:"Common",     description:"A monster that attacks this monster is returned to its owner's hand after damage calculation. Damage calculation is applied normally."};
var SDY_035 = {id:"SDY-035", name:"Neo the Magic Swordsman",   type:"Normal Monster",      attribute:"LIGHT", 	subtype:"Spellcaster", level:"4", atk:"1700" ,def:"1000",    rarity:"Common",     description:"A dimensional drifter who not only practices sorcery, but is also a sword and martial arts master."};
var SDY_036 = {id:"SDY-036", name:"Baron of the Fiend Sword",  type:"Normal Monster",      attribute:"DARK", 	  subtype:"Fiend",       level:"4", atk:"1550" ,def:"800",     rarity:"Common",     description:"An aristocrat who wields a sword possessed by a malicious spirit that preys on the weak."};
var SDY_037 = {id:"SDY-037", name:"Man-Eating Treasure Chest", type:"Normal Monster",      attribute:"DARK", 	  subtype:"Fiend",       level:"4", atk:"1600" ,def:"1000",    rarity:"Common",     description:"A monster disguised as a treasure chest that is known to attack the unwary adventurer."};
var SDY_038 = {id:"SDY-038", name:"Sorcerer of the Doomed", 	 type:"Normal Monster",      attribute:"DARK", 	  subtype:"Spellcaster", level:"4", atk:"1450" ,def:"1200",    rarity:"Common",     description:"A slave of the dark arts, this sorcerer is a master of death-dealing spells."};
var SDY_039 = {id:"SDY-039", name:"Last Will", 	               type:"Spell",               attribute:"Normal", 				                                                       rarity:"Common",     description:"If a monster on your side of the field was sent to your Graveyard this turn, you can Special Summon 1 monster with an ATK of 1500 points or less from your Deck once during this turn. Then shuffle your Deck."};
var SDY_040 = {id:"SDY-040", name:"Waboku", 	                 type:"Trap",                attribute:"Normal", 			                                                         rarity:"Common",     description:"You take no Battle Damage this turn. Your monsters cannot be destroyed by battle this turn."};
var SDY_041 = {id:"SDY-041", name:"Soul Exchange", 	           type:"Spell",               attribute:"Normal", 			                                                         rarity:"Super Rare", description:"Target 1 monster your opponent controls; this turn, if you Tribute a monster, you must Tribute that monster, as if you controlled it. You cannot conduct your Battle Phase the turn you activate this card."};
var SDY_042 = {id:"SDY-042", name:"Card Destruction", 	       type:"Spell",               attribute:"Normal", 			                                                         rarity:"Super Rare", description:"Each player discards their entire hand, then draws the same number of cards they discarded."};
var SDY_043 = {id:"SDY-043", name:"Trap Master", 	             type:"Flip/Effect Monster", attribute:"EARTH", 	subtype:"Warrior",      level:"3", atk:"500" ,def:"1100", 	 rarity:"Common",     description:"FLIP: Select 1 Trap Card on the field and destroy it. If the selected card is Set, pick up and see the card. If it is a Trap Card, it is destroyed. If it is a Spell Card, return it to its original position."};
var SDY_044 = {id:"SDY-044", name:"Dragon Capture Jar", 	     type:"Trap",   	           attribute:"Continuous", 		                                                     	 rarity:"Common",     description:"Change all face-up Dragon-Type monsters on the field to Defense Position, also they cannot change their battle positions."};
var SDY_045 = {id:"SDY-045", name:"Yami", 	                   type:"Spell",  	     	     attribute:"Field", 			                                                       	 rarity:"Common",     description:"Increases the ATK and DEF of all Fiend and Spellcaster-Type monsters by 200 points. Also decreases the ATK and DEF of all Fairy-Type monsters by 200 points."};
var SDY_046 = {id:"SDY-046", name:"Man-Eater Bug", 	           type:"Flip/Effect Monster", attribute:"EARTH", 	subtype:"Insect",       level:"2", atk:"450" ,def:"600", 	   rarity:"Common",     description:"FLIP: Select and destroy 1 monster on the field."};
var SDY_047 = {id:"SDY-047", name:"Reverse Trap", 	           type:"Trap", 	           	 attribute:"Normal", 			                                                         rarity:"Common",     description:"All increases and decreases to ATK and DEF are reversed for the turn in which this card is activated."};
var SDY_048 = {id:"SDY-048", name:"Remove Trap", 	             type:"Spell", 	           	 attribute:"Normal", 			                                                         rarity:"Common",     description:"Destroys 1 face-up Trap Card on the field."};
var SDY_049 = {id:"SDY-049", name:"Castle Walls", 	           type:"Trap", 	           	 attribute:"Normal", 			                                                         rarity:"Common",     description:"Increase the DEF of 1 face-up monster on the field by 500 points until the end of this turn."};
var SDY_050 = {id:"SDY-050", name:"Ultimate Offering", 	       type:"Trap", 		           attribute:"Continuous",                                                        	 rarity:"Common",     description:"You can pay 500 Life Points to Normal Summon or Set 1 extra monster. You can only activate this effect during your Main Phase or your opponent's Battle Phase."};

var builderDeck =[];  //deck builder deck
var builderHand = []; //deckbuilder hand

//add all builders cards to an array
var i=1;
for (i=1; i<=50; i++){
  // console.log(i);
  if(i<10){     //"SDY_00" +"9"
    myConcat = this["SDY_00"+i];// this lets us work with the variable name
    // console.log(myConcat); this diplays the variable or card added to deck
    builderDeck.push(myConcat);}   //add to the end of the deck array
  else if(i>=10){   //"SDY_0"+"49"
    myConcat = this["SDY_0"+i];
    // console.log(myConcat);
    builderDeck.push(myConcat); //add to the end of the deck array}
  }
};
console.log(builderDeck);






console.log("builder and my deck are")
console.log(builderDeck)


//////////////////////////This is all for the deck builder//////////////////////////////////////
var deckBuilderZone = document.querySelectorAll(".deckBuilderZone"); //graball my hand zones
console.log("matches are");
console.log(deckBuilderZone);

document.getElementById("deckBuilderDeck").addEventListener("click", drawCardDeckBuilder); //we find the only instance of player1Deck, when clicked activate function

//this function removes a card from the deck and adds to hand array
function drawCardDeckBuilder(e){
  e.preventDefault(); //we need this so the page does not refresh
  if(false){
    alert("hand is full");
  }else{
    builderHand.push(builderDeck.shift());    //this removes the head and returns the head Array
    console.log("builderHand is");
    console.log(builderHand);
    console.log("builderDeck is");
    console.log(builderDeck);
    updateBoardBuilder();

  }
};

function updateBoardBuilder(){
    var newCardIndex= (builderHand.length)-1 ; //myHand is empty array// length returns how many, not index
    console.log(newCardIndex);
    var i=0;
    for( i=0; i<=newCardIndex; i++){
      console.log("loop entered"+i);
      var node = document.createElement("IMG");// created <img></img>
      var daImage= "img/"+ builderHand[i].id + ".jpg"; //created string "img/SDY-001"
      console.log(builderHand[i].id);
      console.log(daImage);
      node.setAttribute("src",daImage); //<img src="daImage">
      node.setAttribute("width","60"); //<img src="daImage" width="80"></img>
      var textnode = document.createTextNode(builderHand[i].name);  //name of card
      console.log(textnode);
      node.appendChild(textnode);//<p>Dark Magician</p>
      console.log(node);
      //matches[handSize].appendChild(node);
      deckBuilderZone[i].replaceChild(node, deckBuilderZone[i].childNodes[1]); //this adds <img src="SDY-000"></img>
      console.log(deckBuilderZone);
    }
    console.log("forloopBoardMonsters counterfinsished at"+i);
      //this part clears the old images
    for (i; i<=45;i++){
      var node= document.createElement("IMG");

      deckBuilderZone[i].replaceChild(node, deckBuilderZone[i].childNodes[1]); //this adds <img src="SDY-000"></img>
    }
    console.log("updateBoardHand exit");
      // boardUpdate();
};


document.getElementById("deckBuilderZone1").addEventListener("mouseover", showDetail1);
function showDetail1(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(0); //pass the index
}

document.getElementById("deckBuilderZone2").addEventListener("mouseover", showDetail2);
function showDetail2(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(1); //pass the index
}

document.getElementById("deckBuilderZone3").addEventListener("mouseover", showDetail3);
function showDetail3(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(2); //pass the index
}

document.getElementById("deckBuilderZone4").addEventListener("mouseover", showDetail4);
function showDetail4(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(3); //pass the index
}

document.getElementById("deckBuilderZone5").addEventListener("mouseover", showDetail5);
function showDetail5(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(4); //pass the index
}

document.getElementById("deckBuilderZone6").addEventListener("mouseover", showDetail6);
function showDetail6(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(5); //pass the index
}

document.getElementById("deckBuilderZone7").addEventListener("mouseover", showDetail7);
function showDetail7(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(6); //pass the index
}

document.getElementById("deckBuilderZone8").addEventListener("mouseover", showDetail8);
function showDetail8(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(7); //pass the index
}

document.getElementById("deckBuilderZone9").addEventListener("mouseover", showDetail9);
function showDetail9(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(8); //pass the index
}

document.getElementById("deckBuilderZone10").addEventListener("mouseover", showDetail10);
function showDetail10(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(9); //pass the index
}

document.getElementById("deckBuilderZone11").addEventListener("mouseover", showDetail11);
function showDetail11(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(10); //pass the index
}

document.getElementById("deckBuilderZone12").addEventListener("mouseover", showDetail12);
function showDetail12(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(11); //pass the index
}

document.getElementById("deckBuilderZone13").addEventListener("mouseover", showDetail13);
function showDetail13(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(12); //pass the index
}

document.getElementById("deckBuilderZone14").addEventListener("mouseover", showDetail14);
function showDetail14(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(13); //pass the index
}

document.getElementById("deckBuilderZone15").addEventListener("mouseover", showDetail15);
function showDetail15(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(4); //pass the index
}

document.getElementById("deckBuilderZone16").addEventListener("mouseover", showDetail16);
function showDetail16(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(15); //pass the index
}

document.getElementById("deckBuilderZone17").addEventListener("mouseover", showDetail17);
function showDetail17(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(16); //pass the index
}

document.getElementById("deckBuilderZone18").addEventListener("mouseover", showDetail18);
function showDetail18(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(17); //pass the index
}

document.getElementById("deckBuilderZone19").addEventListener("mouseover", showDetail19);
function showDetail19(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(18); //pass the index
}

document.getElementById("deckBuilderZone20").addEventListener("mouseover", showDetail20);
function showDetail20(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(19); //pass the index
}

document.getElementById("deckBuilderZone21").addEventListener("mouseover", showDetail21);
function showDetail21(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(20); //pass the index
}

document.getElementById("deckBuilderZone22").addEventListener("mouseover", showDetail22);
function showDetail22(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(21); //pass the index
}
document.getElementById("deckBuilderZone23").addEventListener("mouseover", showDetail23);
function showDetail23(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(22); //pass the index
}
document.getElementById("deckBuilderZone24").addEventListener("mouseover", showDetail24);
function showDetail24(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(23); //pass the index
}
document.getElementById("deckBuilderZone25").addEventListener("mouseover", showDetail25);
function showDetail25(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(24); //pass the index
}
document.getElementById("deckBuilderZone26").addEventListener("mouseover", showDetail26);
function showDetail26(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(25); //pass the index
}
document.getElementById("deckBuilderZone27").addEventListener("mouseover", showDetail27);
function showDetail27(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(26); //pass the index
}
document.getElementById("deckBuilderZone28").addEventListener("mouseover", showDetail28);
function showDetail28(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(27); //pass the index
}
document.getElementById("deckBuilderZone29").addEventListener("mouseover", showDetail29);
function showDetail29(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(28); //pass the index
}
document.getElementById("deckBuilderZone30").addEventListener("mouseover", showDetail30);
function showDetail30(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(29); //pass the index
}
document.getElementById("deckBuilderZone31").addEventListener("mouseover", showDetail31);
function showDetail31(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(30); //pass the index
}
document.getElementById("deckBuilderZone32").addEventListener("mouseover", showDetail32);
function showDetail32(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(31); //pass the index
}
document.getElementById("deckBuilderZone33").addEventListener("mouseover", showDetail33);
function showDetail33(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(32); //pass the index
}








//this is used by all showdetails of hand// for hand only!! everything in deckbuilder is the hand
function showDetailAll(i){
  var node = document.createElement("IMG")  //  <img></img>
  var daImage3= "img/"+ builderHand[i].id + ".jpg"; //created string "img/SDY-001.jpg"
  node.setAttribute("src", daImage3); //<img src="img/SDY"></img>
  node.setAttribute("width", "300");//<img src="img/SDY" wifth="100"></img>
  var detailSection = document.getElementById("detail"); //we are selcting the detail section
  console.log(detailSection);
  detailSection.replaceChild(node, detailSection.childNodes[1]);
  console.log("showDetail funct exit");
  ATKDetail(i);
};

function ATKDetail(i){
  var node = document.createElement("h4")  //  <h4></h4>
  node.setAttribute("class", "rareness") //<h4 class="rareness"></h4>
  var rarity=  builderHand[i].rarity ; //created string "common"
  var createTextNode = document.createTextNode(rarity)
  node.appendChild(createTextNode); //<h4 class="rareness"> common </h4>
  var detailSection = document.getElementById("detailATK"); //we are selecting the detail section
  console.log(detailSection);
  detailSection.replaceChild(node, detailSection.childNodes[1]);
  console.log("showDetail funct exit");
};
