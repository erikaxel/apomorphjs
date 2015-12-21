class Player extends GameObject {
    constructor() {
        super('Player');
        this.sprite = GameObject.setupMovie("player-lvl1", 6);

        this.vx = 0;
        this.vy = 0;

        window.addEventListener("keydown", evt => this.keyDown(evt), false);
        window.addEventListener("keyup", evt => this.keyUp(evt), false);
    }

    update() {
        super.update();
        //this.handleKeyboard();
        if (this.vy > 0) {
            this.sprite.gotoAndStop(0);
        } else if (this.vy < 0) {
            this.sprite.gotoAndStop(4);
        } else {
            this.sprite.gotoAndStop(2);
        }
        this.sprite.x += this.vx;
        this.sprite.y += this.vy;
    }

    // TODO Better keyhandling
    keyUp(event) {
        let keyPressed = String.fromCharCode(event.keyCode);

        if ((keyPressed == "W") || (keyPressed == "S")) {
            this.vy = 0;
        }
        if ((keyPressed == "A") || (keyPressed == "D")) {
            this.vx = 0;
        }
    }

    keyDown(event) {
        let keyPressed = String.fromCharCode(event.keyCode);
        if (keyPressed == "W") {
            console.log('W');
            this.vy = -5;
        }
        else if (keyPressed == "D") {
            this.vx = 5;
        }
        else if (keyPressed == "S") {
            this.vy = 5
        }
        else if (keyPressed == "A") {
            this.vx = -5;
        } else {
            this.vx = 0;
            this.vy = 0;
        }
    }

}