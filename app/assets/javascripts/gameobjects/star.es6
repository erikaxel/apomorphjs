class Star extends GameObject {
    constructor(number) {
        super('Star');
        //this.sprite = new PIXI.Sprite(`planet${number}_01.png`);
        this.sprite = GameObject.fromLoader(`star${number}_01.png`);
        this.vx = -0.5 * Math.random();
        this.type = 'GAMEOBJECT_BACKGROUND';
    }
}
