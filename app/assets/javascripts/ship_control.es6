
let singleton = Symbol();
let singletonEnforcer = Symbol();

// This is a singleton
class ShipControl {
    constructor(enforcer) {
        if (enforcer !== singletonEnforcer) {
            throw "Cannot construct singleton"
        }
        window.addEventListener("keydown", evt => this.keyDown(evt), false);
        window.addEventListener("keyup", evt => this.keyUp(evt), false);

        this.keyStatus = {};

        this.xDirection = 0;
        this.yDirection = 0;
        this.firePrimary = false;
        this.fireSecondary = false;
    }

    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new ShipControl(singletonEnforcer);
        }
        return this[singleton];
    }


    isDown(key) {
        return this.keyStatus[key]
    }

    // TODO Better keyhandling
    keyUp(event) {
        let keyReleased = String.fromCharCode(event.keyCode);
        this.keyStatus[keyReleased] = false;

        switch(keyReleased) {
            case 'W':
                this.yDirection = this.keyStatus['S'] ? 1 : 0;
                break;
            case 'S':
                this.yDirection = this.keyStatus['W'] ? -1 : 0;
                break;
            case 'A':
                this.xDirection = this.keyStatus['S'] ? 1 : 0;
                break;
            case 'D':
                this.xDirection = this.keyStatus['A'] ? -1 : 0;
                break;
            case ' ':
                this.firePrimary = false;
        }
    }

    keyDown(event) {
        let keyPressed = String.fromCharCode(event.keyCode);
        this.keyStatus[keyPressed] = true;

        switch(keyPressed) {
            case 'W': this.yDirection = -1; break;
            case 'S': this.yDirection = 1; break;
            case 'A': this.xDirection = -1; break;
            case 'D': this.xDirection = 1; break;
            case ' ': this.firePrimary = true; break;
        }
    }
}
