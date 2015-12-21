class Shot1 extends GameObject {
    constructor(x, y) {
        super('Shot1');
        this.sprite = GameObject.fromLoader('shot1_01.png');
        this.vx = 1;
        this.vy = 0;
        this.sprite.x = x;
        this.sprite.y = y;
    }
}