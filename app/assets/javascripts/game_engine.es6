class GameEngine {
    constructor() {
        this.setupCanvas();
        this.gameObjects = [];
        this.background = new BackgroundFactory();
        // Need to add background as very first child to ensure correct Z-ordering
        this.stage.addChild(this.background.stage);
        PIXI.loader.load();
        this.lastTimestamp = window.performance.now();

        this.friendly = [];
        this.friendlyShots = [];
        this.enemies = [];
        this.enemyShots = [];
    }

    setupCanvas() {
        this.renderer = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {autoResize: 'true'});
        document.body.appendChild(this.renderer.view);
        this.stage = new PIXI.Container();
    }

    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
        this.stage.addChild(gameObject.sprite);
        if (gameObject.type != 'GAMEOBJECT_NONE') {
            this.findArr(gameObject.type).push(gameObject);
        }
    }

    findArr(type) {
        if (type == 'GAMEOBJECT_FRIENDLY_SHOT') {
            return this.friendlyShots;
        } else if (type == 'GAMEOBJECT_ENEMY') {
            return this.enemies;
        } else if (type == 'GAMEOBJECT_ENEMY_SHOT') {
            return this.enemyShots;
        } else if (type == 'GAMEOBJECT_FRIENDLY') {
            return this.friendly;
        }
    }

    update(timeElapsed) {
        for (let gameObject of this.gameObjects) {
            gameObject.update(timeElapsed);
        }
        this.background.update(timeElapsed);

        //    Collision detection.
        for (let shot of this.friendlyShots) {
            for (let enemy of this.enemies) {
                if (shot.checkCollide(enemy)) {
                    shot.collide(enemy);
                    enemy.collide(shot);
                }
            }
        }
        //    Remove dead objects
        let deadObjects = this.gameObjects.filter(gameObject => !gameObject.alive);

        for (let gameObject of deadObjects) {
            this.gameObjects.splice(this.gameObjects.indexOf(gameObject), 1);
            this.stage.removeChild(gameObject.sprite);
            let arr = this.findArr(gameObject.type);
            arr.splice(arr.indexOf(gameObject), 1);
        }
    }

    main() {
        let now = window.performance.now();
        let timeElapsed = now - this.lastTimestamp;
        this.lastTimestamp = now;
        this.update(timeElapsed);
        this.renderer.render(this.stage);
        requestAnimationFrame(() => {
            this.main();
        });
    }
}