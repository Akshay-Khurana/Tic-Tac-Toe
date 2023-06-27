console.log(1);
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;
// let reset = document.getElementById("reset");

// Function to change the turn
const changeTurn = () =>{
    return turn === "X" ? "0" : "X";
}

// Check Win

const checkWin = () => {
    let boxtext = document.getElementsByClassName("box-text");
    let wins = [
        [0, 1, 2, 5, 5, 0, 10 , 9], // last 2 index are for mobile view
        [3, 4, 5, 5, 15, 0, 10 , 29],
        [6, 7, 8, 5, 25, 0, 10 , 49],
        [0, 3, 6, -5, 15, 90, -10 , 30],
        [1, 4, 7, 5, 15, 90, 10, 30],
        [2, 5, 8, 15, 15, 90, 30, 30],
        [0, 4, 8, 5, 15, 45, 11, 30],
        [2, 4, 6, 5, 15, 135, 11 , 30],
    ]
    wins.forEach(e=>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && boxtext[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
            if (window.innerHeight < 950){
                document.querySelector(".line").style.transform = `translate(${e[6]}vw, ${e[7]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "40vw";
            }
            else{
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "20vw";
            }
            gameover.play();
        }
    })

}

// Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
   let boxtext = element.querySelector(".box-text");
   element.addEventListener('click', ()=>{
    if (isgameover) {
        console.log(11);
        alert("Game is over!! Click on the Reset Button to play again")
        return;
    }
    if (boxtext.innerText === ''){
        boxtext.innerText = turn;
        turn = changeTurn();
        audioTurn.play();
        checkWin();
        if (!isgameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    }
   }) 
});

// reset function

reset.addEventListener('click' , () => {
    let boxtext = document.querySelectorAll(".box-text");
    Array.from(boxtext).forEach(element =>{
        element.innerText =  "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px";
    document.querySelector(".line").style.width = "0";
})

