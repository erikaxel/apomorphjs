class OneUp extends GameObject {
    constructor() {
        super('Oneup');
        this.sprite = GameObject.setupMovie("1up", 10);
        this.sprite.play();
        this.sprite.animationSpeed = 0.25;
        this.age = 0;
    }

    update(timeElapsed) {
        this.age += timeElapsed;
        //let ySpeed = Math.sin((this.age / 100) * Math.PI) * 2;
        //let x = Math.sin((this.age / 1500) * Math.PI) * 500 + 500;
        //this.sprite.position.y += ySpeed;
        //this.sprite.position.x = x;
        this.vy = 0.07 * Math.sin((this.age / 5000) * Math.PI);
        this.vx = 0;
        super.update(timeElapsed);
    }
}