class Shot1 extends GameObject {
    constructor(x, y) {
        super('Shot1');
        this.sprite = GameObject.fromLoader('shot1_01.png');
        this.vx = 1;
        this.vy = 0;
        this.width = 6;
        this.height = 6;
        this.sprite.x = x;
        this.sprite.y = y;
        this.type = 'GAMEOBJECT_FRIENDLY_SHOT';
    }

    collide(otherObject) {
        //console.log(`${this.name} collided with ${otherObject.name}. This method should be overriden by subclass`);
        this.alive = false;
    }
}