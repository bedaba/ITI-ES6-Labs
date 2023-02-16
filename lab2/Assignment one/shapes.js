class Shape {
    calculateArea() {}
    calculateParameter() {}
    }
    
    class Rectangle extends Shape {
    constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
    }
    
    calculateArea() {
    return this.width * this.height;
    }
    
    calculateParameter() {
    return 2 * (this.width + this.height);
    }
    }
    
    class Square extends Shape {
    constructor(sideLength) {
    super();
    this.sideLength = sideLength;
    }
    
    calculateArea() {
    return this.sideLength * this.sideLength;
    }
    
    calculateParameter() {
    return 4 * this.sideLength;
    }
    }
    
    class Circle extends Shape {
    constructor(radius) {
    super();
    this.radius = radius;
    }
    
    calculateArea() {
    return Math.PI * this.radius ** 2;
    }
    
    calculateParameter() {
    return 2 * Math.PI * this.radius;
    }
    }
    
    export { Shape, Rectangle, Square, Circle };