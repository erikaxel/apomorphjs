class Ufo extends GameObject {
    constructor(number=0) {
        super('Ufo');
        this.sprite = GameObject.setupMovie(`ufo${0}`, 6);
        this.sprite.play();
        this.sprite.animationSpeed = 0.25;
        this.age = 0;
        this.width = 70;
        this.height = 70;
        this.type = 'GAMEOBJECT_ENEMY';
        this.health = 50;
        this.damage = 50;
    }

    update(timeElapsed) {
        this.age += timeElapsed;
        this.vy = 0.15 * Math.sin((this.age / 3000) * Math.PI);
        this.vx = -0.15;
        super.update(timeElapsed);
    }
}