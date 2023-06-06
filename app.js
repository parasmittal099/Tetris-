document.addEventListener('DOMContentLoaded',()=>{
    const grid = document.querySelector('.grid');
    const fragment = document.createDocumentFragment();
    for(var i=0;i<200;i++){
        const div = document.createElement("div");
        fragment.appendChild(div);
    }
    grid.appendChild(fragment);
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const width = 10;

    const ScoreDisplay = document.querySelector('#score');
    const Start = document.querySelector('#start-button');
    const lTetromino = [
        [1,width+1,width*2+1,2],
        [width,width+1,width+2,width*2 + 2]
        [1,width+1,width*2+1,width*2]
        [width,width*2,width*2+1,width*2+2]
    ]
    const tTetromino = [

    ]
    
    console.log(squares);
})


