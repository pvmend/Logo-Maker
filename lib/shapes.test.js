// code that will test to see if everything passes for circle
const {Circle} = require('./shapes');
describe('circle',()=>{
    test('creates cirlce logo based on user inputs', ()=>{
        let circle = new Circle('aaa','white','orange');
        expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="orange" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">aaa</text>
      </svg>`)
    })
})
// test for square
const {Square} = require('./shapes');
describe('square',()=>{
    test('creates square logo based on user inputs', ()=>{
        let square = new Square('aaa','white','orange');
        expect(square.renderSquare()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="300" height="300" fill="orange" /> 
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">aaa</text>
      </svg>`)
    })
})
// test for triangle
const {Triangle} = require('./shapes');
describe('triangle',()=>{
    test('creates triangle logo based on user inputs', ()=>{
        let triangle = new Triangle('aaa','white','orange');
        expect(triangle.renderTriangle()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="0,200 150,0 300,200" fill="orange" /> 
       <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">aaa</text>
      </svg>`)
    })
})