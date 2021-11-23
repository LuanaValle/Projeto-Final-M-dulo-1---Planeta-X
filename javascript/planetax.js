function selecionar (){
    var personagem = ' '
    while (personagem != 'gamora' && personagem != 'groot' && personagem != 'pantera negra'){
            personagem = prompt('Escolha seu personagem\nGamora\nGroot\nPantera Negra')
    }
    var personagens = personagem.toUpperCase()
    if(personagens === 'GAMORA'){
        window.location.href="./gamora/gamora.html"
    }else if(personagens === 'GROOT'){
        //link pág Groot
        window.location.href=''
    }else{
        //link pág Pantera Negra
        window.location.href=''
    }

}