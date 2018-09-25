//this script pertains only to the actions done on the opponents side
var oppDeck = [];// created opponent empty deck []
var oppHand = [];// created opponent empty hand []
var oppMonsters = []; // created opponent monster zone []
var oppTraps= []; //created array for opponent trap zone[]
var oppGraveyard = []; //created opponent graveyard
var oppCurrentHandSize=0;
var oppLifePoints =8000;

//These are kaibas deck cards
var SDK_001 = {id:"SDK-001"};
var SDK_002 = {id:"SDK-002"};
var SDK_003 = {id:"SDK-003"};
var SDK_004 = {id:"SDK-004"};
var SDK_005 = {id:"SDK-005"};
var SDK_006 = {id:"SDK-006"};
var SDK_007 = {id:"SDK-007"};
var SDK_008 = {id:"SDK-008"};
var SDK_009 = {id:"SDK-009"};
var SDK_010 = {id:"SDK-010"};
var SDK_011 = {id:"SDK-011"};
var SDK_012 = {id:"SDK-012"};
var SDK_013 = {id:"SDK-013"};
var SDK_014 = {id:"SDK-014"};
var SDK_015 = {id:"SDK-015"};
var SDK_016 = {id:"SDK-016"};
var SDK_017 = {id:"SDK-017"};
var SDK_018 = {id:"SDK-018"};
var SDK_019 = {id:"SDK-019"};
var SDK_020 = {id:"SDK-020"};
var SDK_021 = {id:"SDK-021"};
var SDK_022 = {id:"SDK-022"};
var SDK_023 = {id:"SDK-023"};
var SDK_024 = {id:"SDK-024"};
var SDK_025 = {id:"SDK-025"};
var SDK_026 = {id:"SDK-026"};
var SDK_027 = {id:"SDK-027"};
var SDK_028 = {id:"SDK-028"};
var SDK_029 = {id:"SDK-029"};
var SDK_030 = {id:"SDK-030"};
var SDK_031 = {id:"SDK-031"};
var SDK_032 = {id:"SDK-032"};
var SDK_033 = {id:"SDK-033"};
var SDK_034 = {id:"SDK-034"};
var SDK_035 = {id:"SDK-035"};
var SDK_036 = {id:"SDK-036"};
var SDK_037 = {id:"SDK-037"};
var SDK_038 = {id:"SDK-038"};
var SDK_039 = {id:"SDK-039"};
var SDK_040 = {id:"SDK-040"};
var SDK_041 = {id:"SDK-041"};
var SDK_042 = {id:"SDK-042"};
var SDK_043 = {id:"SDK-043"};
var SDK_044 = {id:"SDK-044"};
var SDK_045 = {id:"SDK-045"};
var SDK_046 = {id:"SDK-046"};
var SDK_047 = {id:"SDK-047"};
var SDK_048 = {id:"SDK-048"};
var SDK_049 = {id:"SDK-049"};
var SDK_050 = {id:"SDK-050"};


//this is for kaibas deck, add all his cards to his deck
for (i=1;i<=50;i++){
  // console.log(i);
  if(i<10){
    myConcat2 = this["SDK_00"+i];
    // console.log(myConcat2);
    oppDeck.push(myConcat2);
  }
  else if(i>=10){
    myConcat2 = this["SDK_0"+i];
    oppDeck.push(myConcat2);
  }
};
console.log(oppDeck);


var opponentHandZone= document.querySelectorAll(".opponentHandZone"); //grab all opponent hand zones
console.log("opp hand zone are");
console.log(opponentHandZone);
var opponentMonsterZone = document.querySelectorAll(".opponentMonsterZone");//grab all opponents monsters zones
//this function adds cards to opphand

document.getElementById("opponentDeckZone").addEventListener("click", opponentDrawCard);
function opponentDrawCard(e){
  if(5<(oppHand.length)){
    alert("Oppenent hand is full");
  }else{
    e.preventDefault();
    oppHand.push(oppDeck.shift()); //remove from opp deck and add to oppHandarray
    console.log("oppHand is");
    console.log(oppHand);
    console.log("oppDeck is");
    console.log(oppDeck);
    opponentUpdateBoardHand();
  //  updateBoardMonsters();    //we need this function
  }
}




function opponentUpdateBoardHand(){
    var oppNewCardIndex= (oppHand.length)-1 ; //myHand is empty array// length returns how many, not index
    console.log(oppNewCardIndex);
    var i=0;
    for( i=0; i<=oppNewCardIndex; i++){
      console.log("opp update handloop entered"+i);
      var node = document.createElement("IMG");// created <img></img>
      var daImage= "img/"+ oppHand[i].id + ".jpg"; //created string "img/SDY-001"
      console.log(oppHand[i].id);
      console.log(daImage);
      node.setAttribute("src",daImage); //<img src="daImage">
      node.setAttribute("width","60"); //<img src="daImage" width="80"></img>
      var textnode = document.createTextNode(oppHand[i].name);  //name of card
      console.log(textnode);
      node.appendChild(textnode);//<p>Dark Magician</p>
      console.log(node);
      //matches[handSize].appendChild(node);
      opponentHandZone[i].replaceChild(node, opponentHandZone[i].childNodes[1]); //this adds <img src="SDY-000"></img>
      console.log(myHandZone);
    }
    console.log("forloopOppBoardMonsters counterfinsished at"+i);
      //this part clears the old images
    for (i; i<=5;i++){
      var node= document.createElement("IMG");

      opponentHandZone[i].replaceChild(node, opponentHandZone[i].childNodes[1]); //this adds <img src="SDY-000"></img>
    }
    console.log("update oppBoardHand exit");
      // boardUpdate();
};






  /////
  //this function will remove card from hand and into monster card zone
  document.getElementById("opponentHandZone1").addEventListener("click", summonCard1opponent);
  function summonCard1opponent(e){
    console.log("summon card funct activated");
    console.log(oppMonsters.length);     //opponentMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=oppMonsters.length){
      alert("monsterZone card full")
    }else{
      //splice(index,howMany)
      var tempMoveFromHandToMonsterZone = oppHand.splice(0,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
      oppMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
      opponentUpdateBoardMonsters();   //this one doesnt exist yet, finish it line 470
    }
      opponentUpdateBoardHand();
    } //hand was changed

  document.getElementById("opponentHandZone2").addEventListener("click", summonCard2opponent);
  function summonCard2opponent(e){
    console.log("summon card funct activated");
    console.log(oppMonsters.length);     //opponentMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=oppMonsters.length){
      alert("monsterZone card full")
    }else{
      //splice(index,howMany)
      var tempMoveFromHandToMonsterZone = oppHand.splice(1,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
      oppMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
      opponentUpdateBoardMonsters();   //this one doesnt exist yet, finish it line 470
    }
      opponentUpdateBoardHand();
    } //hand was changed

  document.getElementById("opponentHandZone3").addEventListener("click", summonCard3opponent);
  function summonCard3opponent(e){
    console.log("summon card funct activated");
    console.log(oppMonsters.length);     //opponentMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=oppMonsters.length){
      alert("monsterZone card full")
    }else{
      //splice(index,howMany)
      var tempMoveFromHandToMonsterZone = oppHand.splice(2,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
      oppMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
      opponentUpdateBoardMonsters();   //this one doesnt exist yet, finish it line 470
    }
      opponentUpdateBoardHand();
    } //hand was changed

  document.getElementById("opponentHandZone4").addEventListener("click", summonCard4opponent);
  function summonCard4opponent(e){
    console.log("summon card funct activated");
    console.log(oppMonsters.length);     //opponentMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=oppMonsters.length){
      alert("monsterZone card full")
    }else{
      //splice(index,howMany)
      var tempMoveFromHandToMonsterZone = oppHand.splice(3,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
      oppMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
      opponentUpdateBoardMonsters();   //this one doesnt exist yet, finish it line 470
    }
      opponentUpdateBoardHand();
    } //hand was changed

  document.getElementById("opponentHandZone5").addEventListener("click", summonCard5opponent);
  function summonCard5opponent(e){
    console.log("summon card funct activated");
    console.log(oppMonsters.length);     //opponentMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=oppMonsters.length){
      alert("monsterZone card full")
    }else{
      //splice(index,howMany)
      var tempMoveFromHandToMonsterZone = oppHand.splice(4,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
      oppMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
      opponentUpdateBoardMonsters();   //this one doesnt exist yet, finish it line 470
    }
      opponentUpdateBoardHand();
    } //hand was changed

  document.getElementById("opponentHandZone6").addEventListener("click", summonCard6opponent);
  function summonCard6opponent(e){
    console.log("summon card funct activated");
    console.log(oppMonsters.length);     //opponentMonsters is an array
    e.preventDefault();//we need this so the page does not refresh
    if(5<=oppMonsters.length){
      alert("monsterZone card full")
    }else{
      //splice(index,howMany)
      var tempMoveFromHandToMonsterZone = oppHand.splice(5,1)[0]; //splice returns an array. we only want the first index[cardtosummon]
      oppMonsters.push(tempMoveFromHandToMonsterZone); //remove from hand and add to mosterzone, refer to myhandZone#
      opponentUpdateBoardMonsters();   //this one doesnt exist yet, finish it line 470
    }
      opponentUpdateBoardHand();
    } //hand was changed




    // is this needed? we have modal, just add items
    document.getElementById("opponentMonsterZone1").addEventListener("dblclick", oppSendToGrave1);
    function oppSendToGrave1(e){
     e.preventDefault();
     // console.log(myGraveyard);
     oppSendToGraveAll(0); //pass the moster zone index
    }

    document.getElementById("opponentMonsterZone2").addEventListener("dblclick", oppSendToGrave2);
    function oppSendToGrave2(e){
      e.preventDefault();
      oppSendToGraveAll(1); //pass the moster zone index
    }

    document.getElementById("opponentMonsterZone3").addEventListener("dblclick", oppSendToGrave3);
    function oppSendToGrave3(e){
      e.preventDefault();
      oppSendToGraveAll(2); //pass the moster zone index
    }

    document.getElementById("opponentMonsterZone4").addEventListener("dblclick", oppSendToGrave4);
    function oppSendToGrave4(e){
      e.preventDefault();
      oppSendToGraveAll(3); //pass the moster zone index
    }

    document.getElementById("opponentMonsterZone5").addEventListener("dblclick", oppSendToGrave5);
    function oppSendToGrave5(e){
      e.preventDefault();
      oppSendToGraveAll(4); //pass the moster zone index
    }

    //this function will be used to send monster to grave, passed the index
    function oppSendToGraveAll(monsterIndex){
        var tempMoveToGraveYard = oppMonsters.splice(monsterIndex,1); //this give us the card we want
        oppGraveyard.push((tempMoveToGraveYard[0])); //this actually puts the card in the grave array
        console.log("my Graveyard is after push");
        console.log(oppGraveyard);
        var node4 =  document.createElement("IMG");
        var indexLastGrave= oppGraveyard.length-1;
        var daImage4= "img/"+ oppGraveyard[indexLastGrave].id + ".jpg"; //created string "img/SDY-001.jpg"
        node4.setAttribute("src", daImage4); //<img src="img/SDY"></img>
        node4.setAttribute("width", "65");//<img src="img/SDY" wifth="100"></img>
        var theGraveYardSection = document.getElementById("opponentGraveyard");
        theGraveYardSection.replaceChild(node4, theGraveYardSection.childNodes[1]);
        // sendToGraveAll(0); //PASS THE index
        opponentUpdateBoardHand();
        opponentUpdateBoardMonsters();
    }



    //thsi function needs to be finsihed
  function opponentUpdateBoardMonsters(){
      // alert("entererd opp updateBoardMonsters");
      console.log("oppHand is");
      console.log(oppHand);
      console.log("oppMonsters are");
      console.log(oppMonsters);
      for(i=0; i<oppMonsters.length; i++){
        var node= document.createElement("IMG");
        var image= "img/"+ oppMonsters[i].id +".jpg"; //created string "img/SDK-001.jpg"
        node.setAttribute("src", image );
        node.setAttribute("width", "60");
        console.log(node);
        opponentMonsterZone[i].replaceChild(node, opponentMonsterZone[i].childNodes[1]);
      }
      for (i; i<=4;i++){
        var node= document.createElement("IMG");
        opponentMonsterZone[i].replaceChild(node,opponentMonsterZone[i].childNodes[1]);
      }

      console.log("forloopBoardMonsters counterfinsished at"+i);
      console.log("updateBoardMonsters exit");
    };








    //Ex. we click on zone 3 and give detail the card[2]
    //remember that arrays use index and handZones start at 1
    document.getElementById("opponentHandZone1").addEventListener("mouseover", oppShowDetail1);
    function oppShowDetail1(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("oppshowDetail funct entered");
      oppShowDetailAll(0);//the index of hand array
    }
    document.getElementById("opponentHandZone2").addEventListener("mouseover", oppShowDetail2);
    function oppShowDetail2(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("oppshowDetail funct entered");
      oppShowDetailAll(1);//the index of hand array
    }
    document.getElementById("opponentHandZone3").addEventListener("mouseover", oppShowDetail3);
    function oppShowDetail3(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("oppshowDetail funct entered");
      oppShowDetailAll(2);//the index of hand array
    }
    document.getElementById("opponentHandZone4").addEventListener("mouseover", oppShowDetail4);
    function oppShowDetail4(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("showDetail funct entered");
      oppShowDetailAll(3);//the index of hand array
    }
    document.getElementById("opponentHandZone5").addEventListener("mouseover", oppShowDetail5);
    function oppShowDetail5(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("showDetail funct entered");
      oppShowDetailAll(4); //the index of hand array
    }
    document.getElementById("myHandZone6").addEventListener("mouseover", oppShowDetail6);
    function oppShowDetail6(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("showDetail funct entered");
      oppShowDetailAll(5); //pass the index
    }

    //this is used by all showdetails of hand// for oppnenthand only!!
    function oppShowDetailAll(i){
      var node = document.createElement("IMG")  //  <img></img>
      var daImage3= "img/"+ oppHand[i].id + ".jpg"; //created string "img/SDY-001.jpg" Opponent hand array is accessed here
      node.setAttribute("src", daImage3); //<img src="img/SDY"></img>
      node.setAttribute("width", "250");//<img src="img/SDY" wifth="100"></img>
      var detailSection = document.getElementById("detail"); //we are selcting the detail section
      console.log(detailSection);
      detailSection.replaceChild(node, detailSection.childNodes[1]);
      console.log("showDetail funct exit");
    };




    //These hovers work for the opponent monsters zone
    //weclick on zone 3 and give detail the card[2]
    //remember that arrays use index and handZones start at 1
    document.getElementById("opponentMonsterZone1").addEventListener("mouseover", oppShowDetailMonsters1);
    function oppShowDetailMonsters1(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("showDetail funct entered");
      showDetailAllMonsters(0);//the index of hand array
    }

    document.getElementById("opponentMonsterZone2").addEventListener("mouseover", oppShowDetailMonsters2);
    function oppShowDetailMonsters2(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("showDetail funct entered");
      showDetailAllMonsters(1);//the index of hand array
    }

    document.getElementById("opponentMonsterZone3").addEventListener("mouseover", oppShowDetailMonsters3);
    function oppShowDetailMonsters3(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("showDetail funct entered");
      showDetailAllMonsters(2);//the index of hand array
    }

    document.getElementById("opponentMonsterZone4").addEventListener("mouseover", oppShowDetailMonsters4);
    function oppShowDetailMonsters4(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("showDetail funct entered");
      showDetailAllMonsters(3);//the index of hand array
    }

    document.getElementById("opponentMonsterZone5").addEventListener("mouseover", oppShowDetailMonsters5);
    function oppShowDetailMonsters5(e){
      e.preventDefault();//we nned this so the page doe not refresh
      console.log("showDetail funct entered");
      showDetailAllMonsters(4);//the index of hand array
    }

    //this gets called by all the mouseover monsterZones
    //this is used by all showdetails of hand// for monsterzone only!! monster array
    function showDetailAllMonsters(i){
      var node = document.createElement("IMG")  //  <img></img>
      var daImage5= "img/"+ oppMonsters[i].id + ".jpg"; //created string "img/SDY-001.jpg"
      node.setAttribute("src", daImage5); //<img src="img/SDY"></img>
      node.setAttribute("width", "250");//<img src="img/SDY" wifth="100"></img>
      var detailSection = document.getElementById("detail"); //we are selcting the detail section
      console.log(detailSection);
      detailSection.replaceChild(node, detailSection.childNodes[1]);
      console.log("showDetail funct exit");
    };






//we will add 100 point to opponent lifepoints
document.getElementById("opponnentPlusLifePoints").addEventListener("click", oppIncrease);
  function oppIncrease(e){
    console.log("oppIncrease");
    levelUpSound.play();
    oppLifePoints = oppLifePoints+100; //oppLifePoints is a global variable
    document.getElementById("opponentLifePoints").textContent =oppLifePoints;
    }

document.getElementById("opponnentSubtractLifePoints").addEventListener("click", oppDecrease);
  function oppDecrease(e){
    console.log("oppDecrease");
    alertSound.play();
    oppLifePoints = oppLifePoints-100; //oppLifePoints is a global variable
    document.getElementById("opponentLifePoints").textContent =oppLifePoints;
      }
