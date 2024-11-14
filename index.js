let boxes = document.querySelectorAll(".box");
let turno = true;
let turn = document.querySelector(".turn");
let win = document.querySelector(".winner");
let reset = document.querySelector(".reset");

let count = 0;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

reset.onclick = () =>{
    count = 0;
    turno = true;
    turn.innerHTML = 'Turn: X';
    reset.innerText = "Reset";
    win.innerHTML = 'Winner: None';
    boxes.forEach((box1) => {
        box1.innerText = "";
        box1.disabled = false;
    });
};

boxes.forEach((box) => {
    box.onclick = () =>{
        if(box.innerText === "" && (!win.innerHTML.includes('X') && !win.innerHTML.includes('Y'))){
            if(box.innerText ==="" && (turno === true)){
                box.innerText = 'X';
                turn.innerHTML = 'Turn: Y';
                turno = false;
                box.disabled = true;
                count++;
            }
            else if(box.innerText ==="" && (turno === false)){
                box.innerText = 'Y';
                turn.innerHTML = 'Turn: X';
                turno = true;
                box.disabled = true;
                count++;
            }
        }
        check_winner();
    };
});

const check_winner = () =>{
    for(let pattern of winPattern){
        if(boxes[pattern[0]].innerText !== "" && boxes[pattern[0]].innerText === boxes[pattern[1]].innerText &&
             boxes[pattern[1]].innerText === boxes[pattern[2]].innerText){
                turn.innerHTML = "End turn";
                win.innerHTML = 'Winner is: '+ boxes[pattern[1]].innerText;
                reset.innerText = "New Game";
             }
        else if(count === 9){
            win.innerHTML = "Draw";
            turn.innerHTML = 'End';
            reset.innerText = "New Game";
        }
    }
}


