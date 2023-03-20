console.log("Welcome to Tic Tac Toe");
let bgMusic = new Audio("bg.mp3");
let turnAudio = new Audio("click.mp3");
let Win = new Audio("win.mp3");
let turn = "X";
let gameover = false;

// Function to change the turn 
const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,0,6,0],
        [3,4,5,0,18,0],
        [6,7,8,0,30,0],
        [0,3,6,-12,18,90],
        [1,4,7,0,18,90],
        [2,5,8,12,18,90],
        [0,4,8,0,18,45],
        [2,4,6,0,18,135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== ''){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            Win.play();
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px";
            document.querySelector(".line").style.width = "36vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}

// Game Logic
//bgMusic.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turnAudio.play();
            turn = changeTurn();
            checkWin();
            if(!gameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = 0;
    document.querySelector(".line").style.width = "0vw";
    //bgMusic.play();
})

