/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScores, activePlayer, gamePlaying,previousScore,maximumScore;
 init();
 



document.querySelector('.btn-roll').addEventListener('click' ,function(){
    if(gamePlaying){
        var dice= Math.floor(Math.random()*6)+1;
        var dice1=Math.floor(Math.random()*6)+1;
        
        
    //2. display the result
   document.getElementById('dice-1').style.display='block';
   document.getElementById('dice-2').style.display='block';
   document.getElementById('dice-1').src='dice-'+dice+'.png';
   document.getElementById('dice-2').src='dice-'+dice1+'.png';

    //3. update the round score if the rolled number was not 1 
    if(dice!==1&&dice1!==1){
       /* if(previousScore===dice&&dice===6){
            scores[activePlayer]===0;
            document.querySelector('#score-'+activePlayer).textContent='0';
            nextPlayer();
        }
        */
        roundScore =roundScore+(dice+dice1);
        
        
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
        

    }
    else{
        nextPlayer();




    }
    //previousScore=dice;

    }
    //1. we need a random number
    



});
document.querySelector('.btn-hold').addEventListener('click' ,function(){
if(gamePlaying){
    //1. add the current score to the global score
scores[activePlayer]+=roundScore;

//2. update the UI
document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
var input=document.querySelector('.final-score').value;
if(input){
    maximumScore=input;

}else{
    maximumScore=100;
}


//3. chack if the player wone the game
if(scores[activePlayer]>=maximumScore){
    document.querySelector('#name-'+activePlayer).textContent='Winner!';
    document.getElementById('dice-1').style.display='none';
   document.getElementById('dice-2').style.display='none';
    document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
    document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
    gamePlaying=false;
    

}else{
//4. next player
nextPlayer();
}


        
}


});
document.querySelector('.btn-new').addEventListener('click' ,init);




function nextPlayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
        roundScore=0;
        previousScore=0;
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.getElementById('dice-1').style.display='none';
   document.getElementById('dice-2').style.display='none';

}
function init(){
    scores=[0,0];
 roundScore=0;
activePlayer=0;
gamePlaying=true;
previousScore=0;



//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>'+dice+'</em>';
//var x=document.querySelector('#score-0').textContent;
//console.log(x);
document.getElementById('dice-1').style.display='none';
   document.getElementById('dice-2').style.display='none';
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}


