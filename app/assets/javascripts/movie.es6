class Movie {
    constructor(name, frames) {
        this.frames = frames;
        this.images = [];
        this.current = 0;
        for (var i = 0; i < frames; i++) {
            //var image = new Image();
            //image.src = image_path(`${name}_${Movie.zeropad(i+1,2)}.png`);
            //this.images.push(image);
            //console.log(`loaded ${image.src}`);
            //console.log(zeropad(9,2));
            let imgname = `${name}_${Movie.zeropad(i+1,2)}.png`;
            //PIXI.loader.add(imgname, image_path(imgname));
            let texture = PIXI.Texture.fromImage(image_path(imgname));
            images.push(texture);
        }
        this.mc = new PIXI.MovieClip(images);
    }

    render(ctx) {
        this.current++;
        if(this.current >= this.frames) {
            this.current = 0
        }
        //ctx.drawImage(this.images[this.current], 0, 0);
    }

    static zeropad(n, w) {
        var n_ = Math.abs(n);
        var zeros = Math.max(0, w - Math.floor(n_).toString().length);
        var zeroString = Math.pow(10, zeros).toString().substr(1);
        if (n < 0) {
            zeroString = '-' + zeroString;
        }
        return zeroString + n;
    }
}