var escolha
function selecionar (){

    escolha = prompt ('O que você fará? \n 1 - Entra na caverna \n 2 - Volta') 
        if (escolha == 1){
        // add html
        window.location.href = '../html/gamfase3.html'
        }else if (escolha == 2){
        //add game over
        window.location.href= '../html/gameover.html'
    }else{
        alert ('Digite uma opção válida')
    } 
    
}
