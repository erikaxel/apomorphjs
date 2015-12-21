class Planet extends GameObject {
    constructor(number) {
        super('Planet');
        //console.log(`Creating planet planet${number}_01.png`);
        this.sprite = GameObject.fromLoader(`planet${number}_01.png`);
        this.vx = -0.04 * (Math.random()+1);
        this.type = 'GAMEOBJECT_BACKGROUND';
    }
}
