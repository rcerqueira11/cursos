class Bar {
    constructor(position, height, rgbColor) {
        this.position = position; // 0 1 2 the tree bars
        this.height = height;
        this.color = rgbColor;
    }

    getHexColor() {
        return "#" + this.color[0].toString(16) +
            this.color[1].toString(16) +
            this.color[2].toString(16);
    }

    draw(ctx) {
        ctx.fillStyle = this.getHexColor();
        ctx.fillRect(this.position * 60,
            100 - this.height, 50, this.height);
    }
}

let excitementBar = new Bar(0,100,[200,45,250]);
let scarinessBar = new Bar(1,70,[23,205,18]);
let nauseousnessBar = new Bar (2,30, [255,18,18]);

let canvas = document.getElementById("chart");
let ctx = canvas.getContext("2d");

excitementBar.draw(ctx);
scarinessBar.draw(ctx);
nauseousnessBar.draw(ctx);

console.log(JSON.stringify(excitementBar).length);
// 48
// each character is two bytes long = 96 bytes
// json in memory will be 96bytes