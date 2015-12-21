class GameObject {
    constructor(name) {
        this.name = name;
        this.age = 0;
    }

    update() {
        this.age++;
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
}