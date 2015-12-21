class Apomorph {
    constructor() {
        this.setupCanvas2();
        this.gameObjects = [];
    }

    setupCanvas2() {
        this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.view);
        this.stage = new PIXI.Container();
    }

    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
        this.stage.addChild(gameObject.sprite);
    }

    update() {
        for(let gameObject of this.gameObjects) {
            gameObject.update();
        }
    }

    main() {
        this.renderer.render(this.stage);
        this.update();
        requestAnimationFrame(() => { this.main(); });
    }

    test() {
        let oneup = new OneUp();
        let player = new Player();

        oneup.sprite.position.x = 100;
        oneup.sprite.position.y = 100;

        this.addGameObject(oneup);
        this.addGameObject(player);
        this.main();
        // Use
        // http://www.conversion-tool.com/midi
        // To convert from midi to mp3
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
