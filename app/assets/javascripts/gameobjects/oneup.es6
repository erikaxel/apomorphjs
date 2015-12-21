class OneUp extends GameObject {
    constructor() {
        super('Oneup');
        this.sprite = GameObject.setupMovie("1up", 10);
        this.sprite.play();
        this.sprite.animationSpeed = 0.25;
    }

    update() {
        super.update();
        let ySpeed = Math.sin((this.age / 100) * Math.PI) * 2;
        let x = Math.sin((this.age / 1500) * Math.PI) * 500 + 500;
        this.sprite.position.y += ySpeed;
        this.sprite.position.x = x;

        //this.sprite.position.y += this.age;
    }
}