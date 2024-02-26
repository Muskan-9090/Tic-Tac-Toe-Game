let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector("#reset");
let message = document.querySelector("#msg");
let newbtn = document.querySelector("#new");
let winner = document.querySelector(".win");
let game = document.querySelector(".all");
let player = document.querySelector("#turn");
var count = 0;
game.classList.remove("hidden");
let turn_x = true;
let winPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click" , ()=>{
       if(!box.innerText){
        if(turn_x){
            box.innerText = "X";
            player.innerText = "Player : O's Turn";
            turn_x = false;
            }
           else{
            box.innerText = "O";
            player.innerText = "Player : X's Turn";
            turn_x = true;
           }
           box.disabled = true;
        }
        count++;
        if(count === 9){
            showDraw();
            count=0;
        }
        checkwin();
    });
});
function checkwin(){
    for(let pattern of winPatterns){
        var pos1 = boxes[pattern[0]].innerText;
        var pos2 = boxes[pattern[1]].innerText;
        var pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2  && pos2=== pos3){
                showWinner(pos1);
                pos1="";
                pos2="";
                pos3="";
                count=0;
            }
        }
    }
}
function showDraw(){
    message.innerText = "It's a Draw!";
    winner.classList.remove("hide");
    boxes.forEach(box=>{
        box.disabled=true;
    });
    game.classList.add("hidden");

}
function showWinner(value){
    message.innerText = `Congratulations! Winner is ${value}`;
    winner.classList.remove("hide");
    boxes.forEach(box=>{
        box.disabled=true;
    });
    game.classList.add("hidden");

};
    
newbtn.addEventListener("click" , ()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    winner.classList.add("hide");
    game.classList.remove("hidden");
    count = 0;
    pos1="";
    pos2="";
    pos3="";
});
reset.addEventListener("click", ()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
    });
    winner.classList.add("hide");
    count = 0;
    pos1="";
    pos2="";
    pos3="";
});