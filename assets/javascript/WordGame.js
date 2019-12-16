//GLOBAL VARIABLES
let playerName = "Mickey Mouse";
let totalWins = 0;
let totalLosses = 0;
let badGuessesRemaining = 14;
let gameWord = "";
let lettersGuessedArray = [
  " ",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "~",
  "`",
  "[",
  "]",
  "{",
  "}",
  "-",
  "_",
  "+",
  "=",
  "/",
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
  ";",
  ":",
  '"',
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0"
];
const roadList = [
  "Alafaya Trail",
  "Anderson Street",
  "Bumby Avenue",
  "Chickasaw Trail",
  "Church Street",
  "Colonial Drive",
  "Conroy Road",
  "Corrine Drive",
  "Curry Ford Road",
  "Econlockhatchee Trail",
  "Goldenrod Road",
  "Hiawassee Road",
  "International Drive",
  "John Young Parkway",
  "Kirkman Road",
  "Lake Underhill Road",
  "Michigan Street",
  "Mills Avenue",
  "Narcoossee Road",
  "Orange Avenue",
  "Orange Blossom Train",
  "Pine Hills Road",
  "Princeton Street",
  "Robinson Street",
  "Sand Lake Road",
  "Semoran Boulevard",
  "Silver Star Road",
  "Universal Boulevard",
  "University Boulevard"
];

//$("#playerName").text(playerName);

initialze();

//FUNCTIONS TO RUN THE GAME
//INITIALIZE GAME
function initialze() {
  resetScoreBoard(); //1. Reset scoreboard.
  getRandomWord(); //2. Choose random word/phrase.
  displayWord(); //3. Display random word/phrase on screen with blanks.
  beginGamePlay(); //4. Begin GAME PLAY
}

function resetScoreBoard() {
  badGuessesRemaining = 14;
  $("#playerName").text(playerName);
  $("#totalWins").text(totalWins);
  $("#totalLosses").text(totalLosses);
  $("#guessesRemaining").text(badGuessesRemaining);
}

function getRandomWord() {
  let randomWord = roadList[Math.floor(Math.random() * roadList.length)];
  gameWord = randomWord;
}

function displayWord() {
  console.log("displayWord function was called.");
  let splitWord=gameWord.split("");
  console.log(splitWord);
  $("#buildWordHere").text(splitWord);
  
}

function beginGamePlay() {
  console.log("beginGamePlay function was called.");
}
