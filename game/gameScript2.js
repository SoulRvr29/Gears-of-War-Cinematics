$(document).ready(function(){   
	//$(".sizeSet").hide();
	var pairs=8;
/////////////////////////////////////////////////// GENERATE SQUARES //////////////////////////////////////////////////////////
	for (var x=0; x<(pairs*2); x++) $("#board").prepend('<div class="card" id="' + x + '"></div>');
	
	
 //////////////////////////////////////////////// RANDOM CARDS SETUP ////////////////////////////////////////////////////////
	var character = ["anya", "cole", "marcus", "baird", "carmain", "dom", "adam", "james", "kate", "kim"];
	var characterNr=0;
	
	var square=[];     
	var squareNr;

	var couple=1;

	randomSetup();

	function randomSetup()
	{
		while(characterNr<pairs )
		{	
			squareNr = Math.floor(Math.random()*(pairs*2)) ;   // random nr 0-19
			
			if (square[squareNr] == undefined)
			{
				square[squareNr] = character[characterNr];
				couple++;
			}	
		
			if(couple>2)
			{
				characterNr++;
				couple=1;
			}
		}
	}
	/////////////////////////////////////////////////////////  SOUNDS  ///////////////////////////////////////////////////////////////////////////

	var pairSound = new Audio('sounds/reload.mp3');
	var notPairSound = new Audio('sounds/tap2.mp3');
	var endSound = new Audio('sounds/endMusic.mp3');
	pairSound.volume = 0;
	notPairSound.volume = 0;
	endSound.volume = 0;
	
	var soundOnOff=true;
	var clickSoundVol=0;
	
	$('#sound').click(function(){
		if(soundOnOff == true){
			$('#sound').html('<i class="icon-volume-middle"></i>');
			
			soundOnOff=false;
			clickSoundVol=0.7;
			pairSound.volume = 1;
			notPairSound.volume = 1;
			endSound.volume = 1;
		}
		else {
			$('#sound').html('<i class="icon-volume-off-1"></i>');
			soundOnOff=true;
			clickSoundVol=0;
			pairSound.volume = 0;
			notPairSound.volume = 0;
			endSound.volume = 0;
		}
	});
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var card1=true;
	var card1nr;
	var turnCounter=0;
	var turnLock=false;
	
	var pairCounter=pairs;
	
	$(".card").click(function(){cardReveal($(this).attr("id"))});   // send card nr to card
		
	function cardReveal(nr)     //////////////// CARD REVEAL ////////////////
	{
		var opacityValue = $('#'+nr).css("opacity");

		if (turnLock==false && opacityValue != 0.9)
		{	
			var revealSound = new Audio('sounds/click.mp3')
			revealSound.volume=clickSoundVol;
			revealSound.play();
			
			$("#"+nr).css("backgroundImage", "url(img/"+square[nr]+".png)");
			$("#"+nr).addClass("cardActive");
			turnLock=true;
			
			if (card1==true)    ///////// REVEAL 1ST CARD ///////////
			{
				 card1=false;
				 card1nr=nr;
				 turnLock=false;
				 $('#'+card1nr).css("opacity","0.9");
			}
			else                  ////////// REVEAL 2ND CARD ///////////
			{
				$('#'+card1nr).css("opacity","1");
				 card1=true;
				 turnCounter++;
				 if(square[card1nr]==square[nr])
				 {
					 setTimeout(function(){pair2cards(card1nr, nr)},500);
				 }
				 else
				 {
					  setTimeout(function(){restore2cards(card1nr, nr)},500);
				}
			}	
			$("#score").html("Turn counter: "+turnCounter);
		}
	}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	
	
	function restore2cards(card1nr, nr)  ////////////////////// PAIR NOT FOUND /////////////////////
	{
		notPairSound.play();
		$('#'+card1nr).css("backgroundImage","url(img/omen.png)");
		$('#'+nr).css("backgroundImage","url(img/omen.png)");
		$('#'+card1nr).removeClass("cardActive");
		$('#'+nr).removeClass("cardActive");
		turnLock=false;
	}
	
	
	function pair2cards(card1nr, nr)   //////////////// PAIR FOUND //////////////////////
	{
		if (pairCounter>1) pairSound.play();
		$('#'+card1nr).css({"filter":"brightness(30%)", "opacity":"0.9"});
		$('#'+card1nr).addClass("cardOff");
		
		$('#'+nr).css({"filter":"brightness(30%)", "opacity":"0.9"});
		$('#'+nr).addClass("cardOff");
		
		pairCounter--;
		turnLock=false;
		
		if (pairCounter<=0)    /////////////////////// GAME OVER /////////////////////////
		{
			endSound.play();
			$('#board, #score').css('display', 'none');
			$("#endScreen").html("Congratulations! <br> You won in <span style='color:white'>"+ turnCounter+"</span> turns.");
			$('#endScreen').css('display', 'block');
			$('#restart a').css('display', 'block');
			$("#endScreen").animate({fontSize: '50px'},500);
		
			$("#restart a").delay(1000).animate({opacity: '1'},1000);
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	$(".sizeSet").click(function(){sizeChange($(this).attr("title"));
	});

});



 
 
