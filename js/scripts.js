//Challenges, dom manipulation, getting data in order of the cards,, concatenation to work with varables
//challenges Show Detail pain in the butt
//updating the board, many undefined references. it would break again and again

//things I want to continue, a buy feature, rarity animation, animations, messenger
//2 player mode over network
//face down, defense mode

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

var sound = new Audio("audio/mainTheme.mp3");
// sound.play();  //this will start the theme song

var levelUpSound = new Audio("audio/marioMushroom.mp3");
var alertSound = new Audio("audio/alertMGS.mp3");
var diceRoll= new Audio("audio/diceRoll.mp3");
var coinToss= new Audio("audio/coinToss.mp3");
var drawSound = new Audio("audio/cardDraw.mp3");
var summonSound = new Audio ("audio/summoningSound.mp3")

//these are all famous quotes of seto Kaiba
var kaiba1 = new Audio("audio/kAgain.mp3");
var kaiba2 = new Audio("audio/kAutograph.mp3");
var kaiba3 = new Audio("audio/kCongrats.mp3");
var kaiba4 = new Audio("audio/kDetermination.mp3");
var kaiba5 = new Audio("audio/kDisgrace.mp3");
var kaiba6 = new Audio("audio/kEliminate.mp3");
var kaiba7 = new Audio("audio/kEmbarrasment.mp3");
var kaiba8 = new Audio("audio/kEmptyThreats.mp3");
var kaiba9 = new Audio("audio/kFailures.mp3");
var kaiba10 = new Audio("audio/kFans.mp3");
var kaiba12 = new Audio("audio/kFinished.mp3");
var kaiba13 = new Audio("audio/kLaugh.mp3");
var kaiba14 = new Audio("audio/kLoser.mp3");
var kaiba15 = new Audio("audio/kMe.mp3");
var kaiba16 = new Audio("audio/kOne.mp3");
var kaiba17 = new Audio("audio/kPresident.mp3");
var kaiba18 = new Audio("audio/kSmacking.mp3");
var kaiba19 = new Audio("audio/kSuperior.mp3");
var kaiba20 = new Audio("audio/kUnstoppable.mp3");

var kaibaSoundsArray= [];



//We need to add image link
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





var myDeck = [];// created empty deck []
var myHand = [];// created empty hand []
var myMonsters = []; // created monster zone []
var myTraps=[]; //created trap card zone
var myGraveyard = []; //created graveyard
var currentHandSize= 0; //this counter holds the size of your hand
var myLifePoints= 8000; // this holds the life points





// myDeck[0]= myCard1; //this adds card to list
// myDeck[1]= myCard2;
// myDeck.push(myCard3);  //.push add card to end of list



//add all yugis cards to an array
var i=1;
for (i=1; i<=50; i++){
  // console.log(i);
  if(i<10){     //"SDY_00" +"9"
    myConcat = this["SDY_00"+i];// this lets us work with the variable name
    // console.log(myConcat); this diplays the variable or card added to deck
    myDeck.push(myConcat);}   //add to the end of the deck array
  else if(i>=10){   //"SDY_0"+"49"
    myConcat = this["SDY_0"+i];
    // console.log(myConcat);
    myDeck.push(myConcat); //add to the end of the deck array}
  }
};
console.log(myDeck);



var myHandZone = document.querySelectorAll(".myHandZone"); //graball my hand zones
console.log("matches are");
console.log(myHandZone);
var myMonsterZone = document.querySelectorAll(".myMonsterZone"); //grab all my mosterzone

document.getElementById("player1Deck").addEventListener("click", drawCard); //we find the only instance of player1Deck, when clicked activate function

//this function removes a card from the deck and adds to hand array
//neeed to fix, cards still get added
function drawCard(e){
  e.preventDefault(); //we need this so the page does not refresh
  if(5<(myHand.length)){
    alert("hand is full");
  }else{
    myHand.push(myDeck.shift());    //this removes the head and returns the head Array
    console.log("myHand is");
    console.log(myHand);
    console.log("myDeck is");
    console.log(myDeck);
    updateBoardHand();
    updateBoardMonsters();
    summonSound.play();

  }
};


//
//we can still edit the remaining cards
//we updateeach handzone with each respective mhHand[index]
  function updateBoardHand(){
      var newCardIndex= (myHand.length)-1 ; //myHand is empty array// length returns how many, not index
      console.log(newCardIndex);
      var i=0;
      for( i=0; i<=newCardIndex; i++){
        console.log("loop entered"+i);
        var node = document.createElement("IMG");// created <img></img>
        var daImage= "img/"+ myHand[i].id + ".jpg"; //created string "img/SDY-001"
        console.log(myHand[i].id);
        console.log(daImage);
        node.setAttribute("src",daImage); //<img src="daImage">
        node.setAttribute("width","60"); //<img src="daImage" width="80"></img>
        var textnode = document.createTextNode(myHand[i].name);  //name of card
        console.log(textnode);
        node.appendChild(textnode);//<p>Dark Magician</p>
        console.log(node);
        //matches[handSize].appendChild(node);
        myHandZone[i].replaceChild(node, myHandZone[i].childNodes[1]); //this adds <img src="SDY-000"></img>
        console.log(myHandZone);
      }
      console.log("forloopBoardMonsters counterfinsished at"+i);
        //this part clears the old images
      for (i; i<=5;i++){
        var node= document.createElement("IMG");

        myHandZone[i].replaceChild(node, myHandZone[i].childNodes[1]); //this adds <img src="SDY-000"></img>
      }
      console.log("updateBoardHand exit");
        // boardUpdate();
  };

//this updates the opponents hand





//this function will remove card from hand and into monster card zone
document.getElementById("myHandZone1").addEventListener("click", summonCard1);
function summonCard1(e){
  console.log("summon card funct activated");
  console.log(myMonsters.length);     //myMonsters is an array
  e.preventDefault();//we need this so the page does not refresh
  if(5<=myMonsters.length){
    alert("monsterZone card full")
  }else{
    //splice(index,howMany)
    var tempMoveFromHandToMonsterZone = myHand.splice(0,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
    myMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
    updateBoardMonsters();  }
  updateBoardHand();
  summonSound.play();

  } //hand was changed

document.getElementById("myHandZone2").addEventListener("click", summonCard2);
function summonCard2(e){
    console.log("summon card funct activated");
    console.log(myMonsters.length);     //myMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=myMonsters.length){
      alert("monsterZone card full")
    }else{
      var tempMoveFromHandToMonsterZone = myHand.splice(1,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
      myMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
      updateBoardMonsters();  }
    updateBoardHand();
    summonSound.play();

    } //hand was changed
document.getElementById("myHandZone3").addEventListener("click", summonCard3);
function summonCard3(e){
    console.log("summon card funct activated");
    console.log(myMonsters.length);     //myMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=myMonsters.length){
        alert("monsterZone card full")
    }else{
        var tempMoveFromHandToMonsterZone = myHand.splice(2,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
        myMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
        updateBoardMonsters();  }
      updateBoardHand();
      summonSound.play();

      } //hand was changed

document.getElementById("myHandZone4").addEventListener("click", summonCard4);
function summonCard4(e){
    console.log("summon card funct activated");
    console.log(myMonsters.length);     //myMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=myMonsters.length){
      alert("monsterZone card full")
    }else{
      var tempMoveFromHandToMonsterZone = myHand.splice(3,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
      myMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
      updateBoardMonsters();  }
    updateBoardHand();
    summonSound.play();

    } //hand was changed

document.getElementById("myHandZone5").addEventListener("click", summonCard5);
function summonCard5(e){
      console.log("summon card funct activated");
      console.log(myMonsters.length);     //myMonsters is an array
      e.preventDefault();//we need this so the page does not refresh
      if(5<=myMonsters.length){
        alert("monsterZone card full")
      }else{
        var tempMoveFromHandToMonsterZone = myHand.splice(4,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
          myMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
          updateBoardMonsters();  }
      updateBoardHand();
      summonSound.play();

      } //hand was changed

document.getElementById("myHandZone6").addEventListener("click", summonCard6);
function summonCard6(e){
        console.log("summon card funct activated");
        console.log(myMonsters.length);     //myMonsters is an array
        e.preventDefault();//we need this so the page does not refresh
        if(5<=myMonsters.length){
          alert("monsterZone card full")
        }else{
        var tempMoveFromHandToMonsterZone = myHand.splice(5,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
        myMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
        updateBoardMonsters();  }
      updateBoardHand();
      summonSound.play();

} //hand was changed





function updateBoardMonsters(){
    console.log("updateBoardMonsters entered")
    console.log("myHand is");
    console.log(myHand);
    console.log("myMonsters are");
    console.log(myMonsters);
    for(i=0; i<myMonsters.length; i++){
      var node = document.createElement("IMG");  //<p></p>
      var daImage2= "img/"+ myMonsters[i].id + ".jpg"; //created string "img/SDY-001.jpg"
      node.setAttribute("src",daImage2); //daImage holds "img/SDY-000.jpg"
      node.setAttribute("width", "60")
      console.log(node);
      myMonsterZone[i].replaceChild(node, myMonsterZone[i].childNodes[1] );//this gets the <img></img> from hand and adds it here to monsterZone
  //
      // myHandZone[0].replaceChild(node, myHandZone[0].childNodes[1] ); //replaces the hand card //childNode[1] is the tae we are replacing
    }
    for (i; i<=4;i++){
      var node= document.createElement("IMG");
      myMonsterZone[i].replaceChild(node, myMonsterZone[i].childNodes[1]); //this adds <img src="SDY-000"></img>
    }
    console.log("forloopBoardMonsters counterfinsished at"+i);
    console.log("updateBoardMonsters exit");
};









//weclick on zone 3 and give detail the card[2]
//remember that arrays use index and handZones start at 1
document.getElementById("myHandZone1").addEventListener("mouseover", showDetail1);
function showDetail1(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(0);//the index of hand array
}
document.getElementById("myHandZone2").addEventListener("mouseover", showDetail2);
function showDetail2(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(1);//the index of hand array
}
document.getElementById("myHandZone3").addEventListener("mouseover", showDetail3);
function showDetail3(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(2);//the index of hand array
}
document.getElementById("myHandZone4").addEventListener("mouseover", showDetail4);
function showDetail4(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(3);//the index of hand array
}
document.getElementById("myHandZone5").addEventListener("mouseover", showDetail5);
function showDetail5(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(4); //the index of hand array
}
document.getElementById("myHandZone6").addEventListener("mouseover", showDetail6);
function showDetail6(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAll(5); //pass the index
}

//this is used by all showdetails of hand// for hand only!!
function showDetailAll(i){
  var node = document.createElement("IMG")  //  <img></img>
  var daImage3= "img/"+ myHand[i].id + ".jpg"; //created string "img/SDY-001.jpg"
  node.setAttribute("src", daImage3); //<img src="img/SDY"></img>
  node.setAttribute("width", "250");//<img src="img/SDY" wifth="100"></img>
  var detailSection = document.getElementById("detail"); //we are selcting the detail section
  console.log(detailSection);
  detailSection.replaceChild(node, detailSection.childNodes[1]);
  console.log("showDetail funct exit");
};





//These hovers work for the monsters
//weclick on zone 3 and give detail the card[2]
//remember that arrays use index and handZones start at 1
document.getElementById("myMonsterZone1").addEventListener("mouseover", showDetailMonsters1);
function showDetailMonsters1(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllMonsters(0);//the index of hand array
}

document.getElementById("myMonsterZone2").addEventListener("mouseover", showDetailMonsters2);
function showDetailMonsters2(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllMonsters(1);//the index of hand array
}

document.getElementById("myMonsterZone3").addEventListener("mouseover", showDetailMonsters3);
function showDetailMonsters3(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllMonsters(2);//the index of hand array
}

document.getElementById("myMonsterZone4").addEventListener("mouseover", showDetailMonsters4);
function showDetailMonsters4(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllMonsters(3);//the index of hand array
}

document.getElementById("myMonsterZone5").addEventListener("mouseover", showDetailMonsters5);
function showDetailMonsters5(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllMonsters(4);//the index of hand array
}

//this gets called by all the mouseover monsterZones
//this is used by all showdetails of hand// for monsterzone only!! monster array
function showDetailAllMonsters(i){
  var node = document.createElement("IMG")  //  <img></img>
  var daImage5= "img/"+ myMonsters[i].id + ".jpg"; //created string "img/SDY-001.jpg"
  node.setAttribute("src", daImage5); //<img src="img/SDY"></img>
  node.setAttribute("width", "250");//<img src="img/SDY" wifth="100"></img>
  var detailSection = document.getElementById("detail"); //we are selcting the detail section
  console.log(detailSection);
  detailSection.replaceChild(node, detailSection.childNodes[1]);
  console.log("showDetail funct exit");
};



///the following work to show detail of trap and magic card zones
document.getElementById("myTrapZone1").addEventListener("mouseover", showDetailTrap1);
function showDetailTrap1(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllTrap(0);//the index of hand array
}
document.getElementById("myTrapZone2").addEventListener("mouseover", showDetailTrap2);
function showDetailTrap2(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllTrap(1);//the index of hand array
}
document.getElementById("myTrapZone3").addEventListener("mouseover", showDetailTrap3);
function showDetailTrap3(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllTrap(2);//the index of hand array
}
document.getElementById("myTrapZone4").addEventListener("mouseover", showDetailTrap4);
function showDetailTrap4(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllTrap(3);//the index of hand array
}
document.getElementById("myTrapZone5").addEventListener("mouseover", showDetailTrap5);
function showDetailTrap5(e){
  e.preventDefault();//we nned this so the page doe not refresh
  console.log("showDetail funct entered");
  showDetailAllTrap(4);//the index of hand array
}


//this displays traps on detail section, we pass the index of trap card to be displayed
function showDetailAllTrap(i){
  console.log("trapdetail called");
    var node = document.createElement("IMG")  //  <img></img>
    var daImage5= "img/"+ myTraps[i].id + ".jpg"; //created string "img/SDY-001.jpg"
    node.setAttribute("src", daImage5); //<img src="img/SDY"></img>
    node.setAttribute("width", "250");//<img src="img/SDY" wifth="100"></img>
    var detailSection = document.getElementById("detail"); //we are selcting the detail section
    console.log(detailSection);
    detailSection.replaceChild(node, detailSection.childNodes[1]);//this replaces current image
    console.log("showDetail funct exit");
  };







// is this needed? we have modal, just add items
document.getElementById("myMonsterZone1").addEventListener("dblclick", sendToGrave1);
function sendToGrave1(e){
 e.preventDefault();
 // console.log(myGraveyard);
 sendToGraveAll(0); //pass the moster zone index
}

document.getElementById("myMonsterZone2").addEventListener("dblclick", sendToGrave2);
function sendToGrave2(e){
  e.preventDefault();
  sendToGraveAll(1); //pass the moster zone index
}

document.getElementById("myMonsterZone3").addEventListener("dblclick", sendToGrave3);
function sendToGrave3(e){
  e.preventDefault();
  sendToGraveAll(2); //pass the moster zone index
}

document.getElementById("myMonsterZone4").addEventListener("dblclick", sendToGrave4);
function sendToGrave4(e){
  e.preventDefault();
  sendToGraveAll(3); //pass the moster zone index
}

document.getElementById("myMonsterZone5").addEventListener("dblclick", sendToGrave5);
function sendToGrave5(e){
  e.preventDefault();
  sendToGraveAll(4); //pass the moster zone index
}

//this function will be used to send monster to grave, passed the index
function sendToGraveAll(monsterIndex){
    var tempMoveToGraveYard = myMonsters.splice(monsterIndex,1); //this give us the card we want
    myGraveyard.push((tempMoveToGraveYard[0])); //this actually puts the card in the grave array
    console.log("my Graveyard is after push");
    console.log(myGraveyard);
    var node4 =  document.createElement("IMG");
    var indexLastGrave= myGraveyard.length-1;
    var daImage4= "img/"+ myGraveyard[indexLastGrave].id + ".jpg"; //created string "img/SDY-001.jpg"
    node4.setAttribute("src", daImage4); //<img src="img/SDY"></img>
    node4.setAttribute("width", "65");//<img src="img/SDY" wifth="100"></img>
    var theGraveYardSection = document.getElementById("myGraveyard");
    theGraveYardSection.replaceChild(node4, theGraveYardSection.childNodes[1]);
    // sendToGraveAll(0); //PASS THE index
    updateBoardHand();
    updateBoardMonsters();
}



//we will add 100 point to my lifepoints
document.getElementById("myPlusLifePoints").addEventListener("click", myIncrease);
  function myIncrease(e){
    console.log("myIncrease");
    levelUpSound.play();
    myLifePoints = myLifePoints+100; //oppLifePoints is a global variable
    document.getElementById("myLifePoints").textContent =myLifePoints;
    }
//we will substract 100 point to my lifepoints
document.getElementById("mySubtractLifePoints").addEventListener("click", myDecrease);
  function myDecrease(e){
    console.log("myDecrease");
    alertSound.play();
    myLifePoints = myLifePoints-100; //oppLifePoints is a global variable
    document.getElementById("myLifePoints").textContent =myLifePoints;
      }


//this function essentially works a a sleep(3) or system.pause(3)
function wait(ms){
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while(d2-d < ms);
}


document.getElementById("diceroll").addEventListener("click", dice);

//this function returns randome number
function dice(e){
    e.preventDefault(); //we need this so the page does not refresh
    diceRoll.play(); //audio effect
    var randomNum=0;
    while(randomNum==0){//this line prevents a 0 being displayed
      randomNum = Math.floor(Math.random() * 7); //returns a random number from 0-6
    }   //math.random() returns floating numn 0-.999999999, including 0 but not 1 or [0-1)
    // wait(6000); //pause and wait for sound to finish i.e. system.pause(3)
    alert("The Dice landed on "+ randomNum);
}


document.getElementById("coinflip").addEventListener("click", coinFlip);

//this function returns randome number
function coinFlip(e){
    e.preventDefault(); //we need this so the page does not refresh
    coinToss.play();  //audio effect
    var randomNum = Math.random() ; //returns a random number from 0-9
    if (randomNum<.5) {
      alert("TAILS");
    }else {
      alert("HEADS")
    }
    console.log(randomNum);
}






//testing Modal
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//testing modal^^^^















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
