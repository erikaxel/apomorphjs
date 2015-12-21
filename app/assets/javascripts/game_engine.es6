class GameEngine {
    constructor() {
        this.setupCanvas();
        this.gameObjects = [];
        this.background = new BackgroundFactory();
        // Need to add background as very first child to ensure correct Z-ordering
        this.stage.addChild(this.background.stage);
        PIXI.loader.load();
        this.lastTimestamp = window.performance.now();
    }

    setupCanvas() {
        this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {autoResize:'true'});
        document.body.appendChild(this.renderer.view);
        this.stage = new PIXI.Container();
    }

    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
        this.stage.addChild(gameObject.sprite);
    }

    update(timeElapsed) {
        for(let gameObject of this.gameObjects) {
            gameObject.update(timeElapsed);
        }
        this.background.update(timeElapsed);
    }

    main() {
        let now = window.performance.now();
        let timeElapsed = now - this.lastTimestamp;
        this.lastTimestamp = now;
        this.update(timeElapsed);
        this.renderer.render(this.stage);
        requestAnimationFrame(() => { this.main(); });
    }
}