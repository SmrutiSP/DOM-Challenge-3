const grid = document.querySelector('.grid');
let colorClass = 'white';

for(let i=1;i<=64;i++) {
    const div = document.createElement('div');
    div.setAttribute('id',i+'');
    div.classList.add(colorClass);
    div.addEventListener('click',startColoring);
    grid.appendChild(div);
    if(i%8!==0) {
        if(colorClass==='white') colorClass='black';
        else colorClass='white';
    }
}

function findRightDiagonal(currIndex,indicesToColor) {
    indicesToColor.push(currIndex);
    let temp1 = currIndex;
    let currRow = Math.ceil(currIndex/8);
    let temp2 = currRow;
    let nextIndex = null, nextRow = null;
    while(true) {
        nextIndex = currIndex + 7;
        nextRow = Math.ceil(nextIndex/8);
        if(nextIndex <= 64 && nextRow-currRow===1) {
            indicesToColor.push(nextIndex+'');
            currIndex = nextIndex;
            currRow = nextRow;
        } else break;
    }

    currIndex = temp1;
    currRow = temp2;

    while(true) {
        nextIndex = currIndex - 7;
        nextRow = Math.ceil(nextIndex/8);
        if(nextIndex >= 1 && nextRow-currRow===-1) {
            indicesToColor.push(nextIndex+'');
            currIndex = nextIndex;
            currRow = nextRow;
        } else {
            break;
        }
    }
}

function findLeftDiagonal(currIndex,indicesToColor) {
    let temp1 = currIndex;
    let currRow = Math.ceil(currIndex/8);
    let temp2 = currRow;
    let nextIndex = null, nextRow = null;
    while(true) {
        nextIndex = currIndex + 9;
        nextRow = Math.ceil(nextIndex/8);
        if(nextIndex <= 64 && nextRow-currRow===1) {
            indicesToColor.push(nextIndex+'');
            currIndex = nextIndex;
            currRow = nextRow;
        } else break;
    }

    currIndex = temp1;
    currRow = temp2;

    while(true) {
        nextIndex = currIndex - 9;
        nextRow = Math.ceil(nextIndex/8);
        if(nextIndex >= 1 && nextRow-currRow===-1) {
            indicesToColor.push(nextIndex+'');
            currIndex = nextIndex;
            currRow = nextRow;
        } else break;
    }
}

function coloringBoxes(indicesToColor) {
    for(let index of indicesToColor) {
        const ele = document.getElementById(index);
        ele.classList.remove(ele.classList[0]);
        ele.classList.add('red');
    }
}

function startColoring(event) {
    const index = event.target.getAttribute('id');
    let indicesToColor = [];
    findRightDiagonal(+index,indicesToColor);
    findLeftDiagonal(+index,indicesToColor);
    coloringBoxes(indicesToColor);
}