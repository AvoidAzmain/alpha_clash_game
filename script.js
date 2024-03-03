function handlekeyboardbuttonpress(event){
    const playerpressed = event.key;
    
   

    const currentalphabetelement = document.getElementById('current-alphabet');
    const currentalphabet = currentalphabetelement.innerText.toLowerCase();

    if(playerpressed == 'Escaped'){
        gameover();
    }

    if(playerpressed === currentalphabet){
        const currentscoreelement = document.getElementById('current-score').innerText;
        console.log(currentscoreelement);
        const currentscore = parseInt(currentscoreelement);
        const newscore = currentscore + 1 ;
        document.getElementById('current-score').innerText=newscore;

         removebackgroundcolorbyid(currentalphabet);
         continuegame();
    }

    else{
        const currentlifeelement = document.getElementById( 'current-life' ).innerText;
        const currentlife = parseInt(currentlifeelement);
        const newlife = currentlife -1;
        document.getElementById('current-life').innerText = newlife;
        if(newlife === 0){
            
            gameover();
            const finalscoreelement = document.getElementById(final-score).innerText;
            const finalscorescore = parseInt(finalscoreelement);

            document.getElementById('final-score').innerText = newscore;
        }
     }
  
}

document.addEventListener('keyup',handlekeyboardbuttonpress);


function continuegame(){
    const alphabet = getarandomalphabet();
    const currentalphabetelement = document.getElementById('current-alphabet');
    currentalphabetelement.innerHTML = alphabet;

    // set background color
    addbackgroundcolorbyid(alphabet);
}



function play(){
hideElementById('home');
hideElementById('game-over')
showElementById('play-ground');
setelementvaluebyid( 'current-life',2) ;
continuegame();
}

function gameover(){
    hideElementById('play-ground');
    showElementById('game-over');

    const lastscore = document.getElementById('current-score');
    let score = lastscore.innerText;
    score=parseInt(score);
    setelementvaluebyid('final-score',score);

    const currentalphabet = getelementtextbyid('current-alphabet');
    removebackgroundcolorbyid(currentalphabet);
}