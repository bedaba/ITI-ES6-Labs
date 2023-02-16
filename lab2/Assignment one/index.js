import { Shape, Rectangle, Square, Circle } from './shapes.js';

const rectangle = new Rectangle(5, 10);
const rectangleArea = rectangle.calculateArea();
const rectangleParameter = rectangle.calculateParameter();

const square = new Square(5);
const squareArea = square.calculateArea();
const squareParameter = square.calculateParameter();

const circle = new Circle(5);
const circleArea = circle.calculateArea();
const circleParameter = circle.calculateParameter();
const displayResults = () => {
    document.getElementById('rectangle').innerHTML = `Rectangle area: ${rectangleArea}, parameter: ${rectangleParameter}`;
    document.getElementById('square').innerHTML = `Square area: ${squareArea}, parameter: ${squareParameter}`;
    document.getElementById('circle').innerHTML = `Circle area: ${circleArea}, parameter: ${circleParameter}`;
  };
  
window.onload = displayResults;