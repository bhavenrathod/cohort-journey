class Rectangle {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`The color is ${this.color}`);
  }
}

const rect = new Rectangle(3, 6, "red");
const area = rect.area();
console.log(`The area is ${area}`);
rect.paint();
