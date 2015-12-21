class Player extends GameObject {
    constructor() {
        super('Player');
        this.sprite = GameObject.setupMovie("player-lvl1", 6);

        this.vx = 0;
        this.vy = 0;

        this.SPEED = 0.5;

        window.addEventListener("keydown", evt => this.keyDown(evt), false);
        window.addEventListener("keyup", evt => this.keyUp(evt), false);
    }

    update(timeElapsed) {
        super.update(timeElapsed);
        //this.handleKeyboard();
        if (this.vy > 0) {
            this.sprite.gotoAndStop(0);
        } else if (this.vy < 0) {
            this.sprite.gotoAndStop(4);
        } else {
            this.sprite.gotoAndStop(2);
        }
    }

    // TODO Better keyhandling
    keyUp(event) {
        let keyReleased = String.fromCharCode(event.keyCode);

        if ((keyReleased == "W") || (keyReleased == "S")) {
            this.vy = 0;
        }
        if ((keyReleased == "A") || (keyReleased == "D")) {
            this.vx = 0;
        }
    }

    keyDown(event) {
        let keyPressed = String.fromCharCode(event.keyCode);
        if (keyPressed == "W") {
            this.vy = - this.SPEED;
        }
        else if (keyPressed == "D") {
            this.vx = this.SPEED;
        }
        else if (keyPressed == "S") {
            this.vy = this.SPEED
        }
        else if (keyPressed == "A") {
            this.vx = -this.SPEED;
        } else {
            this.vx = 0;
            this.vy = 0;
        }
    }
}