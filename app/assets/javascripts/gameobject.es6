class GameObject {
    constructor(name) {
        this.name = name;
        this.vx = 0;
        this.vy = 0;
        this.sprite = null;
    }

    update(timeElapsed) {
        if(this.sprite != 0) {
            this.sprite.x += this.vx * timeElapsed;
            this.sprite.y += this.vy * timeElapsed;
        }
    }

    static setupMovie(basename, frames) {
        let textures = [];
        for (var i = 0; i < frames; i++) {
            let name = `${basename}_${Movie.zeropad(i+1,2)}.png`;
            let texture = PIXI.Texture.fromImage(image_path(name));
            textures.push(texture);
        }
        return new PIXI.extras.MovieClip(textures);
    }

    static fromLoader(name) {
        return new PIXI.Sprite(PIXI.loader.resources[name].texture);
    }
}