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
    console.log(squares);
})