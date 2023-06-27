//Browser when it loads a webpage it creates a- 
// Document Object Model (DOM)
//from this JS can change all HTML elements , attributes 
// JS can change CSS styles 
// Can create new HTML events , react to them 

//addEventListener() attaches an even handler 
// to specified element and 
//doesnt overrise existing event handlers 

/* =>  function 
    hello = function(val){return 'Hello'+val}  
    hello = (val) => 'Hello' + val  
*/
document.addEventListener('DOMContentLoaded',() => {
    //The Document method querySelector() returns the first Element within the document 
    //that matches the specified selector, or group of selectors. 
    //If no matches are found, null is returned.
    const grid = document.querySelector('.gird');

    //The Document method querySelectorAll() returns a static (not live)
    // NodeList representing a list of the document's elements that match the specified group of selectors.
    //The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
    let squares = Array.from (document.querySelectorAll('.grid div'));
    const scoreDisplay = document.querySelector('#score')
    const StartBtn = document.querySelector('#start-button')
    const width = 10;
    
    const lTetromino =[
        [1,width+1,width*2+1,2],
        [width,width+1,width+2,width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2]
    ]
    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1, width+2,width*2,width*2+1]
    ]
    
    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]
    
    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]
    
    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]
    
    const theTetrominoes = [lTetromino,zTetromino,tTetromino,oTetromino,iTetromino]

    let currentPosition = 4
    let currentRotation = 0 
    // select a tetromino and its first rotation 
    let random = Math.floor(Math.random()*theTetrominoes.length)
    //current tetromino
    let current = theTetrominoes[random][currentRotation]


    //draw the first rotation in the first tetromino
    // => will add a function to each index of the current array 

    //draw the tetromino
    function draw(){
        current.forEach(index => {
            squares[currentPosition+index].classList.add('tetromino')
        })
    }
    //undraw the Tetromino /
    // this is to move the blocks
    function undraw(){
        current.forEach(index=>{
            squares[currentPosition+index].classList.remove('tetromino')
        })
    }

    // move tetromino down every second 
    timerId = setInterval(moveDown,100);
    function moveDown(){
        undraw()
        currentPosition += width 
        draw()
        freeze()
    }

    function freeze(){
        if(current.some(index => squares[currentPosition+index+width].classList.contains('taken'))){ 
            // if the current tetormino reaches the end  or meets another tetromino i.e. the 'taken' class , we turn each of the square into 
            // a class of 'taken'
            current.forEach(index =>squares[currentPosition+index+width].classList.add('taken') ) 
            //start a new tetromino
            random =  Math.floor(Math.random()*theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
        }
    }

    //move the tetromino left 
    // provided there is no blockage , not at edge 
    function moveleft(){
        undraw()
        const isAtleftEdge = current.some(index => (currentPosition+index) % width === 0)
        if(!isAtleftEdge){
            currentPosition -= 1;
        }
        if(current.some(index => squares[currentPosition+index+width].classList.contains('taken'))){
            currentPosition += 1;
        }
        draw()
    }
})