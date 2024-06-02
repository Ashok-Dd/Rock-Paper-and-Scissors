let player='';
let comp='';
function choose(choice){
    if(player===''){
        player=choice;
        document.getElementById('player1').innerHTML=`<span class="emoji">${emojis(choice)}</span>`;
        comp=comp_choice();
        document.getElementById('player2').innerHTML=`<span class="emoji">${emojis(comp)}</span>`;
        setTimeout(winner,500);
    }
}
function emojis(choice){
    return choice==='rock'?'✊':choice==='paper'?'✋':'✌';
}
function comp_choice(){
    const choices=['rock','paper','scissors'];
    return choices[Math.floor(Math.random()*choices.length)];
}
function winner(){
    let result;
    if(player===comp)
    {
        result="It's tie";
    }
    else if(
        (player=='rock'&&comp=='scissors')||
        (player=='paper'&&comp=='rock')||
        (player=='scissors'&&comp=='paper')
    ){
        result="You Won";
    }
    else{
        result="computer won";
        }
        displayResult(result);
        resetGame();
}
function displayResult(result){
    document.getElementById('print').innerHTML=`${result}`;

}
function resetGame(){
    player='';
    comp='';
    setTimeout(() => {
        document.getElementById('player1').innerHTML = '<span class="emoji">🤔</span>';
        document.getElementById('player2').innerHTML = '<span class="emoji">🤖</span>';
    }, 1000);
}