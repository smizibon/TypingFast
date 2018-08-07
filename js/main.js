window.addEventListener('load', init);

//available levels
const levels = {
easy:5,
medium:3,
hard:2
};
//to change level 
const currentLevel= levels.medium;

//gloabals
let  time = currentLevel; 
let score = 0;
let isPlaying;

 // DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'zibon',
    'definition'
  ];

  //initialize game
  function init(){
    // show number of seconds in UI 
    seconds.innerHTML = currentLevel;
    //load word from array 
    showWord(words);
    //start matching on word input
    wordInput.addEventListener('input',startMatch); 

    //call countdown every second
    setInterval(countdown,1000);
    //check game status
    setInterval(checkStatus,50);

  }
  //start match 
  function startMatch() {
    if (matchWords()){
        console.log('match');//confirm on console
        isPlaying= true;
        time = currentLevel + 1 ;//one above time because page load takes time
        showWord(words);
        wordInput.value= '';
        score++;
    }
    //if score is -1 display 0 
    if (score === -1 ){
        scoreDisplay.innerHTML = 0;
    }
    else {
        scoreDisplay.innerHTML = score;
    }
  }
  //match current word with word Input 
  function matchWords() {
    
        if (wordInput.value===currentWord.innerHTML){
            message.innerHTML = 'Correct ! !!! ';
            return true;
        }else {
            message.innerHTML = '' ; 
            return false;
        }
  }

  //pick and show random word 
  function showWord(words){
    const randIndex= Math.floor(Math.random() * words.length);
    //output random word
    currentWord.innerHTML =words[randIndex];  
  }

  //countdown timer
  function countdown(){
    //makesure time is now run out  
    if (time >0)
      {
         time--;
      } else if (time===0 ){
        isPlaying=false;
      }
      //showTime
      timeDisplay.innerHTML = time;
  }

//check game status
function checkStatus(){
    if (!isPlaying && time === 0)
    {
        message.innerHTML = 'you lose !!!!';
        score= -1;//reset score when game loss
    }
}