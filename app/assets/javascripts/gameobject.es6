class GameObject {
    constructor(name) {
        this.name = name;
        this.vx = 0;
        this.vy = 0;
        this.sprite = null;
        this.width = 1;
        this.height = 1;
        this.alive = true;
        this.type = 'GAMEOBJECT_NONE';
    }

    update(timeElapsed) {
        if (this.sprite != 0) {
            this.sprite.x += this.vx * timeElapsed;
            this.sprite.y += this.vy * timeElapsed;
        }
    //    Remove us if we are to far away from the screen
        if(this.sprite.x < -1000 || this.sprite.y < - 1000
            || this.sprite.x > 1000 + window.innerWidth || this.sprite.y > 1000 + window.innerHeight) {
            this.alive = false;
        }
    }

    collide(otherObject) {
        console.log(`${this.name} collided with ${otherObject.name}.`);
        this.health -= otherObject.damage;
        if(this.health < 0) {
            this.alive = false;
        }
    }

    checkCollide(otherObject) {
        // Basic rectangular collision detection
        return this.sprite.x < otherObject.sprite.x + otherObject.width &&
            this.sprite.x + this.width > otherObject.sprite.x &&
            this.sprite.y < otherObject.sprite.y + otherObject.height &&
            this.height + this.sprite.y > otherObject.sprite.y
    }

    static setupMovie(basename, frames) {
        let textures = [];
        for (var i = 0; i < frames; i++) {
            let name = `${basename}_${Movie.zeropad(i + 1, 2)}.png`;
            let texture = PIXI.Texture.fromImage(image_path(name));
            textures.push(texture);
        }
        return new PIXI.extras.MovieClip(textures);
    }

    static fromLoader(name) {
        return new PIXI.Sprite(PIXI.loader.resources[name].texture);
    }
}