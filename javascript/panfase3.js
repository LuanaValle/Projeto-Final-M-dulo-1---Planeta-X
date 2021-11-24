var escolha
function selecionar (){

    escolha = prompt ('O que você fará? \n 1 - Entrar no portal \n 2 - Procurar a nave')
    if (escolha == 1){
        // add html game over
        window.location.href = '../html/gameover.html'
        }else if (escolha == 2){
        //add html próx fase
        window.location.href= '../html/panyouwin.html'
    }else{
        alert ('Digite uma opção válida')
    } 
    
}