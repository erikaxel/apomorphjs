class Player extends GameObject {
    constructor(gameEngine) {
        super('Player');
        this.gameEngine = gameEngine;
        this.sprite = GameObject.setupMovie("player-lvl1", 6);

        this.vx = 0;
        this.vy = 0;

        this.SPEED = 0.5;
        this.SIZE_X = 100;
        this.SIZE_Y = 75;

        // MS between each shot
        this.SHOT_RATE = 100;
        this.timeSinceLastShot = 0;

        this.shipControl = ShipControl.instance;

        PIXI.loader.add('shot1_01.png', image_path('shot1_01.png'));
        PIXI.loader.add('shot2_01.png', image_path('shot2_01.png'));
    }

    update(timeElapsed) {
        this.vx = this.SPEED * this.shipControl.xDirection;
        this.vy = this.SPEED * this.shipControl.yDirection;

        if(this.shipControl.firePrimary) {
            this.fire(timeElapsed);
        }

        super.update(timeElapsed);

        // Set up, down or normal image
        if (this.vy > 0) {
            this.sprite.gotoAndStop(0);
        } else if (this.vy < 0) {
            this.sprite.gotoAndStop(4);
        } else {
            this.sprite.gotoAndStop(2);
        }
    //    Ensure we do not venture into the unknown
        if(this.sprite.x < 0) {
            this.sprite.x = 0;
        }
        if(this.sprite.y < 0) {
            this.sprite.y = 0;
        }
        if(this.sprite.x > window.innerWidth - this.SIZE_X) {
            this.sprite.x = window.innerWidth - this.SIZE_X;
        }
        if(this.sprite.y > window.innerHeight - this.SIZE_Y) {
            this.sprite.y = window.innerHeight - this.SIZE_Y;
        }
    }

    fire(timeElapsed) {
        this.timeSinceLastShot += timeElapsed;
        if(this.timeSinceLastShot > this.SHOT_RATE) {
            this.timeSinceLastShot = 0;
            // TODO: Level up weapons

            this.gameEngine.addGameObject(new Shot1(this.sprite.x + this.SIZE_X/2+12, this.sprite.y+this.SIZE_Y/2));
        }
    }
}