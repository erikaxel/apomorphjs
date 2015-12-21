class Apomorph {
    constructor() {
        this.gameEngine = new GameEngine();
    }
    test() {
        let enemy = new Ufo();
        let player = new Player(this.gameEngine);

        enemy.sprite.position.x = 1000;
        enemy.sprite.position.y = 100;

        this.gameEngine.addGameObject(enemy);
        this.gameEngine.addGameObject(player);
        this.gameEngine.main();
        // Use
        // http://www.conversion-tool.com/midi
        // To convert from midi to mp3
        // TODO: Add to game engine
        var sound = new Howl({
            urls: [audio_path('mission1.mp3')]
        }).play();
    }
}

$(function () {
    let apo = new Apomorph();
    apo.test();

    function fullscreen() {
        var el = document.getElementById('canvas');

        if (el.webkitRequestFullScreen) {
            el.webkitRequestFullScreen();
        }
        else {
            el.mozRequestFullScreen();
        }
    }
});
