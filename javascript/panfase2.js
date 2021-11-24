var escolha
function selecionar (){

    escolha = prompt ('O que você fará? \n 1 - Campo aberto \n 2 - Floresta')
    if (escolha == 1){
        // add html fase3
        window.location.href= '../html/panfase3.html'
        }else if (escolha == 2){
        //add html gameover
        window.location.href = '../html/gameover.html'
    
    }else{
        alert ('Digite uma opção válida')
    } 
    
}