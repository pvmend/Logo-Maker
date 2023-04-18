const fs = require('fs');
const inquirer = require('inquirer');
const {Circle} = require('./lib/shapes')
const {Square} = require('./lib/shapes')
const {Triangle} = require('./lib/shapes')

const questions = [{

    name: 'text',
    message: 'Enter 3 characters for your logo.',
    type: 'input',
    validate: text => text.length <= 3,
},
{
    name:'textColor',
    message: 'Enter the color or a hexadecimal number for the text.',
    type: 'input',
},
{
    name: 'shape',
    message: 'What shape would you like.',
    type: 'list',
    choices: ['circle', 'triangle', 'square']
},
{
    name: 'shapeColor',
    message: 'Enter the color or a hexadecimal number for the shape.',
    type: 'input',
},
]

function logoPrompt() {
    inquirer.prompt(questions)
        .then(function(data){
            var shape;
            
            if(data.shape === 'circle'){
                shape = new Circle(data.text,data.textColor,data.shapeColor)
                fs.writeFile("logo.svg",shape.render(),(err,data) =>{
                    console.log("Your logo has been generated")
                    })
            }
            
            if(data.shape === 'square'){
                shape = new Square(data.text,data.textColor,data.shapeColor)
                fs.writeFile("logo.svg",shape.renderSquare(),(err,data) =>{
                    console.log("Your logo has been generated")
                    })
            }
            
            if(data.shape === 'triangle'){
                shape = new Triangle(data.text,data.textColor,data.shapeColor)
                fs.writeFile("logo.svg",shape.renderTriangle(),(err,data) =>{
                    console.log("Your logo has been generated")
                    })
            }
           
            
        })
    }
logoPrompt()