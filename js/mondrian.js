function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function changeColors(square){
    var colors = ["white", "red", "blue", "yellow"]
    let rectangles = square.children;//returns rect div


    var temp = rectangles[0].style.backgroundColor;
    var colorChanged = false;
    while (!colorChanged) {
        var newColor = colors[getRandomInt(0,3)];
        if (newColor != temp) {
            rectangles[0].style.backgroundColor = newColor;
            colorChanged = true;
        }
    }
    
    if(rectangles[0].style.backgroundColor != "white") {
        rectangles[1].style.backgroundColor = "white";
        return;
    }
    rectangles[1].style.backgroundColor = colors[getRandomInt(0, 3)];
    if (rectangles[1].style.backgroundColor != "white") {
        rectangles[0].style.backgroundColor = "white";
    }
    return;
}





//Creates vertical line in squares
function verticalDiv(cell) {
    var square = document.createElement("div");
    var leftDiv = document.createElement("div");
    leftDiv.className = "leftDiv";
    leftDiv.style.backgroundColor = "white";
    leftDiv.style.borderRight = "1px solid black";

    var rightDiv = document.createElement("div");
    rightDiv.className = "rightDiv";
    rightDiv.style.backgroundColor = "white";
    rightDiv.style.borderLeft = "1px solid black";

    square.appendChild(leftDiv);
    square.appendChild(rightDiv);

    square.addEventListener("click", function() {
        changeColors(square);
    });

    cell.appendChild(square);
    return;
}

//creates horizontal line in squares
function horizontalDiv(cell) {
    var square = document.createElement("div");
    var topDiv = document.createElement("div");
    topDiv.className = "topDiv";
    topDiv.style.backgroundColor = "white";
    topDiv.style.borderBottom = "1px solid black";

    var bottomDiv = document.createElement("div");
    bottomDiv.className = "bottomDiv";
    bottomDiv.style.backgroundColor = "white";
    bottomDiv.style.borderTop = "1px solid black";

    square.appendChild(topDiv);
    square.appendChild(bottomDiv);

    square.addEventListener("click", function(){
        changeColors(square);
    });

    cell.appendChild(square);
    return;
}



//creates table for placing squares
function createBoard() {
    var board = document.getElementById("board")
    var rows = 6;
    var cols = 10;
    var id = 0;


    for(var r = 0; r < rows; r++){
        var row = document.createElement("tr");
        for(var c = 0; c < cols; c++){
            var cell = document.createElement("td");
            cell.id = id++;
            if(cell.id % 2 == 0){
                verticalDiv(cell);
            }else{
             horizontalDiv(cell);
            }
            row.appendChild(cell);
        }
        board.appendChild(row);
        id++
    }
}

document.addEventListener('DOMContentLoaded', createBoard);



