var escolha
function selecionar (){

    escolha = prompt ('O que você fará? \n 1 - Aceita \n 2 - Foge')
    if (escolha == 1){
        // add html próx fase
        window.location.href = '../html/grofase3.html'
        }else if (escolha == 2){
        //add html gameover
        window.location.href= '../html/gameover.html'
    }else{
        alert ('Digite uma opção válida')
    } 
    
}