var escolha
function selecionar (){

    escolha = prompt ('O que você fará? \n 1 - Voltar \n 2 - Seguir')
    if (escolha == 1){
        // add html game over
        window.location.href = '../html/gameover.html'
        }else if (escolha == 2){
        //add html próx fase
        window.location.href= '../html/gamfase2.html'
    }else{
        alert ('Digite uma opção válida')
    } 
    
}
