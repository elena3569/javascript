
let game = {
   /**
    * Запускает игру
    */
    run(){
        while(true){
            //получаем направление
            const direction = mover.getDirection();
            if (direction === null){
                console.log("игра окончена");
                return;
            }
            const nextPoint = mover.getNextPosition(direction);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    }, 

    //открывается при создании страницы
    init(){
        console.log("Ваше положение на поле в виде о.")
        renderer.render();
        console.log("Чтобы начать игру, наберите game.run() и нажмите Enter.");
    }
};

game.init();