var escolha
function selecionar (){

    escolha = prompt ('O que você fará? \n 1 - Enfrenta seu medo \n 2 - Ataca o troll') 
        if (escolha == 1){
        // add game over
        window.location.href = '../html/gameover.html'
        }else if (escolha == 2){
        //add you win!
        window.location.href= '../html/gamyouwin.html'
    }else{
        alert ('Digite uma opção válida')
    } 
    
}
