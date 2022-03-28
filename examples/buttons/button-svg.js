import  "https://cdnjs.cloudflare.com/ajax/libs/svg.js/2.7.1/svg.min.js"

var draw = SVG('button').size(162, 32).style('cursor:pointer;')
var лист = draw.rect(162, 32).fill('#16d').radius(4)
var межа = draw.rect(1, 32).fill('#16d').style('pointer-events: none;').move(32)
var text = draw.text("Открыть в StackBlitz").fill('#fff').font({ size: 12, leading:  '1.6em' }).style('pointer-events: none;').move(38)
draw.path('M10 17.6 H15 L12 25 L22 14.4 H16.9 L19.9 7 L10 17.6z').fill('#ff0').style('pointer-events: none;')
лист.on('mouseover', 
function(){this.animate(200, '<>', 20).fill('#28a') }) 
лист.on('mouseout', 
function(){this.animate(200, '<>', 20).fill('#16d') })
