let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2"); 

// Step 1: Start the game on keypress
document.addEventListener("keypress", function () {
    if (started==false) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

// Step 2: Level up and flash random button
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randIdx);
    // console.log(randbtn);

    gameSeq.push(randColor);

    gameFlash(randbtn);
    console.log(gameSeq);
    console.log(userSeq);
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

// Step 3: Add click event listeners and check answer
function btnPress() {
    let btn = this;
    let userColor = btn.getAttribute("id"); 
    userSeq.push(userColor);

    userFlash(btn);
    checkAnswer(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


// check gamesequence with the user sequence ...
function checkAnswer(idx) {
    if (userSeq[idx] === gameSeq[idx]) {  // middle check we not action perform wait for next press color 
        if (userSeq.length === gameSeq.length) {   // if last indx was match the action perform 
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = "Game Over! Your total score  was <b>${level}</b> <br> Press any key to start";
        document.body.style.backgroundColor = "red";
        setTimeout( function (){
            document.body.style.backgroundColor="white";
        },150);
        resetGame();
    }
}

//  resatart game
function resetGame() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// home work of this   highest score is print on the screen 