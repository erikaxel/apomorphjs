class BackgroundFactory {
    constructor() {
        this.TIME_BETWEEN_PLANETS = 6000;
        this.TIME_BETWEEN_STARS = 300;

        this.stage = new PIXI.Container();
        let loader = PIXI.loader;
        this.ready = false;
        this.timeSinceLastPlanet = 0;
        this.timeSinceLastStar = 0;
        for (let i = 0; i < 5; i++) {
            loader.add(`star${i}_01.png`, image_path(`star${i}_01.png`));
        }
        for (let i = 0; i < 4; i++) {
            loader.add(`planet${i}_01.png`, image_path(`planet${i}_01.png`));
        }
        loader.once('complete', () => this.ready = true);
        this.backgroundObjects = []
    }

    update(timeElapsed) {
        this.addNewItems(timeElapsed);
        this.removeOldItems(timeElapsed);
        this.moveItems(timeElapsed);
    }

    addNewItems(timeElapsed) {
        if (this.ready) {
            this.timeSinceLastPlanet += timeElapsed;
            this.timeSinceLastStar += timeElapsed;

            while (this.timeSinceLastPlanet > this.TIME_BETWEEN_PLANETS) {
                this.timeSinceLastPlanet -= this.TIME_BETWEEN_PLANETS;
                let planet = new Planet(Math.floor(Math.random() * 4));
                planet.sprite.y = Math.floor(Math.random() * window.innerHeight);
                planet.sprite.x = window.innerWidth + 20;
                this.stage.addChild(planet.sprite);
                this.backgroundObjects.push(planet);
            }
            while (this.timeSinceLastStar > this.TIME_BETWEEN_STARS) {
                this.timeSinceLastStar -= this.TIME_BETWEEN_STARS;
                let star = new Star(Math.floor(Math.random() * 5));
                star.sprite.y = Math.floor(Math.random() * window.innerHeight);
                star.sprite.x = window.innerWidth + 20;
                this.stage.addChild(star.sprite);
                this.backgroundObjects.push(star);
            }
        }
    }

    removeOldItems(timeElapsed) {
        // TODO
    }

    moveItems(timeElapsed) {
        for(let gameObject of this.backgroundObjects) {
            gameObject.update(timeElapsed)
        }
    }
}