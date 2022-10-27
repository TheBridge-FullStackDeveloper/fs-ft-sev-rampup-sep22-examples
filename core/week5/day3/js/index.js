window.onload = function () {
    Game.init() 

    const musica = new Audio("sounds/background-music.mp3")

    document.body.appendChild(musica);
   
        musica.play();

}



