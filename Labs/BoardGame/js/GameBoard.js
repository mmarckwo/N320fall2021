
class GameBoard {

    // keep track of each space's id and position for reference.
    spaces = [];

    // get position of square from id.
    spacePosition(id) {
        let positionInfo = this.spaces[id][1];
        return positionInfo;
    }

    // method chain of making each row and column of spaces. starts with the bottom row.
    createBoard(spaceAmt, row2S, row3S, row4S, row5S, row6S, row7S, row8S) {

        let spaceBorder = "rgb(115, 115, 115)";
        let spaceColor = "rgb(145, 145, 145)";

        let row1Spaces = spaceAmt;

        let boardArea = document.getElementById("boardArea");

        // make bottom row spaces.
        for(let i = 0; i <= row1Spaces; i++){
            let boardSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");

            // make boardSpace class, set width, height, fill, and stroke attributes.
            boardSpace.classList.add("boardSpace");
            boardSpace.setAttribute("width", 50);
            boardSpace.setAttribute("height", 50);

            boardSpace.setAttribute("fill", spaceColor);
            boardSpace.setAttribute("stroke", spaceBorder);

            // set the lap square to be green.
            if(i == 0) {
                boardSpace.setAttribute("fill", "lightgreen");
                boardSpace.setAttribute("stroke", "green");
            }

            // set position.
            let x = 50 * i;
            let y = 600
            boardSpace.setAttribute("x", x);
            boardSpace.setAttribute("y", y);

            // set spaceID and position value.
            boardSpace.dataset.spaceID = i;
            boardSpace.dataset.position = [x, y];

            // add to spaces array.
            this.spaces.push([boardSpace.dataset.spaceID, boardSpace.dataset.position]);

            // DEBUG MOUSEOVER.
            boardSpace.addEventListener("mouseover", (e) => {
                console.log(e.target.dataset.spaceID);
                console.log(e.target.dataset.position);
            })

            boardArea.appendChild(boardSpace);
            // set end space position to be the last square in the row, and remember the ID of that square.
            if (i == row1Spaces) {
                let endSpaceID = boardSpace.dataset.spaceID;
                // separate value into X and Y array.
                let endSpace = boardSpace.dataset.position.split(",");
                // create next row.
                this.CreateSideRowR(row2S, endSpace, endSpaceID, row3S, row4S, row5S, row6S, row7S, row8S);
            }
        }
    }

    CreateSideRowR(spaceAmt, startPos, startID, row3S, row4S, row5S, row6S, row7S, row8S) {

        let spaceBorder = "rgb(115, 115, 115)";
        let spaceColor = "rgb(145, 145, 145)";

        let boardArea = document.getElementById("boardArea");

        let baseID = parseInt(startID);

        // make side R row spaces.
        for(let i = 0; i <= spaceAmt; i++){
            let boardSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");

            // make boardSpace class, set width, height, fill, and stroke attributes.
            boardSpace.classList.add("boardSpace");
            boardSpace.setAttribute("width", 50);
            boardSpace.setAttribute("height", 50);
            boardSpace.setAttribute("fill", spaceColor);
            boardSpace.setAttribute("stroke", spaceBorder);

            // set position.
            let x = startPos[0];
            let y = (startPos[1] - 50) - (50 * i);
            boardSpace.setAttribute("x", x);
            boardSpace.setAttribute("y", y);

            // set spaceID and position value.
            boardSpace.dataset.spaceID = baseID + 1 + i;
            boardSpace.dataset.position = [x, y];

            this.spaces.push([boardSpace.dataset.spaceID, boardSpace.dataset.position]);

            // DEBUG MOUSEOVER.
            boardSpace.addEventListener("mouseover", (e) => {
                console.log(e.target.dataset.spaceID);
                console.log(e.target.dataset.position);
            })

            // add to spaces array.
            boardArea.appendChild(boardSpace);

            // set end space position to be the last square in the row, and remember the ID of that square.
            if (i == spaceAmt) {
                let endSpaceID = boardSpace.dataset.spaceID;
                // separate value into X and Y array.
                let endSpace = boardSpace.dataset.position.split(",");
                // create next row.
                this.CreateTopRightRow(row3S, endSpace, endSpaceID, row4S, row5S, row6S, row7S, row8S);
            }
        }
    }

    CreateTopRightRow(spaceAmt, startPos, startID, row4S, row5S, row6S, row7S, row8S) {

        let spaceBorder = "rgb(115, 115, 115)";
        let spaceColor = "rgb(145, 145, 145)";

        let boardArea = document.getElementById("boardArea");

        let baseID = parseInt(startID);

        // make side R row spaces.
        for(let i = 0; i <= spaceAmt; i++){
            let boardSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");

            // make boardSpace class, set width, height, fill, and stroke attributes.
            boardSpace.classList.add("boardSpace");
            boardSpace.setAttribute("width", 50);
            boardSpace.setAttribute("height", 50);
            boardSpace.setAttribute("fill", spaceColor);
            boardSpace.setAttribute("stroke", spaceBorder);

            // set position.
            let x = (startPos[0] - 50) - (50 * i);
            let y = startPos[1];
            boardSpace.setAttribute("x", x);
            boardSpace.setAttribute("y", y);

            // set spaceID and position value.
            boardSpace.dataset.spaceID = baseID + 1 + i;
            boardSpace.dataset.position = [x, y];

            // add to spaces array.
            this.spaces.push([boardSpace.dataset.spaceID, boardSpace.dataset.position]);

            // DEBUG MOUSEOVER.
            boardSpace.addEventListener("mouseover", (e) => {
                console.log(e.target.dataset.spaceID);
                console.log(e.target.dataset.position);
            })

            boardArea.appendChild(boardSpace);

            // set end space position to be the last square in the row, and remember the ID of that square.
            if (i == spaceAmt) {
                let endSpaceID = boardSpace.dataset.spaceID;
                // separate value into X and Y array.
                let endSpace = boardSpace.dataset.position.split(",");
                // create next row.
                this.CreateTopRightLeftRow(row4S, endSpace, endSpaceID, row5S, row6S, row7S, row8S);
            }
        }
    }

    CreateTopRightLeftRow(spaceAmt, startPos, startID, row5S, row6S, row7S, row8S) {
        
        let spaceBorder = "rgb(115, 115, 115)";
        let spaceColor = "rgb(145, 145, 145)";

        let boardArea = document.getElementById("boardArea");

        let baseID = parseInt(startID);

        // make side R row spaces.
        for(let i = 0; i <= spaceAmt; i++){
            let boardSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");

            // make boardSpace class, set width, height, fill, and stroke attributes.
            boardSpace.classList.add("boardSpace");
            boardSpace.setAttribute("width", 50);
            boardSpace.setAttribute("height", 50);
            boardSpace.setAttribute("fill", spaceColor);
            boardSpace.setAttribute("stroke", spaceBorder);

            // set position.
            let x = startPos[0];
            let y = (parseInt(startPos[1]) + 50) + (50 * i);
            boardSpace.setAttribute("x", x);
            boardSpace.setAttribute("y", y);

            // set spaceID and position value.
            boardSpace.dataset.spaceID = baseID + 1 + i;
            boardSpace.dataset.position = [x, y];

            // add to spaces array.
            this.spaces.push([boardSpace.dataset.spaceID, boardSpace.dataset.position]);

            // DEBUG MOUSEOVER.
            boardSpace.addEventListener("mouseover", (e) => {
                console.log(e.target.dataset.spaceID);
                console.log(e.target.dataset.position);
            })

            boardArea.appendChild(boardSpace);

            // set end space position to be the last square in the row, and remember the ID of that square.
            if (i == spaceAmt) {
                let endSpaceID = boardSpace.dataset.spaceID;
                // separate value into X and Y array.
                let endSpace = boardSpace.dataset.position.split(",");
                // create next row.
                this.CreateTopRow(row5S, endSpace, endSpaceID, row6S, row7S, row8S);
            }
        }
    }

    CreateTopRow(spaceAmt, startPos, startID, row6S, row7S, row8S) {

        let spaceBorder = "rgb(115, 115, 115)";
        let spaceColor = "rgb(145, 145, 145)";

        let boardArea = document.getElementById("boardArea");

        let baseID = parseInt(startID);

        // make side R row spaces.
        for(let i = 0; i <= spaceAmt; i++){
            let boardSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");

            // make boardSpace class, set width, height, fill, and stroke attributes.
            boardSpace.classList.add("boardSpace");
            boardSpace.setAttribute("width", 50);
            boardSpace.setAttribute("height", 50);
            boardSpace.setAttribute("fill", spaceColor);
            boardSpace.setAttribute("stroke", spaceBorder);

            // set position.
            let x = (startPos[0] - 50) - (50 * i);
            let y = startPos[1];
            boardSpace.setAttribute("x", x);
            boardSpace.setAttribute("y", y);

            // set spaceID and position value.
            boardSpace.dataset.spaceID = baseID + 1 + i;
            boardSpace.dataset.position = [x, y];

            // add to spaces array.
            this.spaces.push([boardSpace.dataset.spaceID, boardSpace.dataset.position]);

            // DEBUG MOUSEOVER.
            boardSpace.addEventListener("mouseover", (e) => {
                console.log(e.target.dataset.spaceID);
                console.log(e.target.dataset.position);
            })

            boardArea.appendChild(boardSpace);

            // set end space position to be the last square in the row, and remember the ID of that square.
            if (i == spaceAmt) {
                let endSpaceID = boardSpace.dataset.spaceID;
                // separate value into X and Y array.
                let endSpace = boardSpace.dataset.position.split(",");
                // create next row.
                this.CreateTopLeftRightRow(row6S, endSpace, endSpaceID, row7S, row8S);
            }
        }
    }

    CreateTopLeftRightRow(spaceAmt, startPos, startID, row7S, row8S)  {

        let spaceBorder = "rgb(115, 115, 115)";
        let spaceColor = "rgb(145, 145, 145)";

        let boardArea = document.getElementById("boardArea");

        let baseID = parseInt(startID);

        // make side R row spaces.
        for(let i = 0; i <= spaceAmt; i++){
            let boardSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");

            // make boardSpace class, set width, height, fill, and stroke attributes.
            boardSpace.classList.add("boardSpace");
            boardSpace.setAttribute("width", 50);
            boardSpace.setAttribute("height", 50);
            boardSpace.setAttribute("fill", spaceColor);
            boardSpace.setAttribute("stroke", spaceBorder);

            // set position.
            let x = startPos[0];
            let y = (startPos[1] - 50) - (50 * i);
            boardSpace.setAttribute("x", x);
            boardSpace.setAttribute("y", y);

            // set spaceID and position value.
            boardSpace.dataset.spaceID = baseID + 1 + i;
            boardSpace.dataset.position = [x, y];

            // add to spaces array.
            this.spaces.push([boardSpace.dataset.spaceID, boardSpace.dataset.position]);

            // DEBUG MOUSEOVER.
            boardSpace.addEventListener("mouseover", (e) => {
                console.log(e.target.dataset.spaceID);
                console.log(e.target.dataset.position);
            })

            boardArea.appendChild(boardSpace);

            // set end space position to be the last square in the row, and remember the ID of that square.
            if (i == spaceAmt) {
                let endSpaceID = boardSpace.dataset.spaceID;
                // separate value into X and Y array.
                let endSpace = boardSpace.dataset.position.split(",");
                // create next row.
                this.CreateTopLeftRow(row7S, endSpace, endSpaceID, row8S);
            }
        }
    }

    CreateTopLeftRow(spaceAmt, startPos, startID, row8S) {

        let spaceBorder = "rgb(115, 115, 115)";
        let spaceColor = "rgb(145, 145, 145)";

        let boardArea = document.getElementById("boardArea");

        let baseID = parseInt(startID);

        // make side R row spaces.
        for(let i = 0; i <= spaceAmt; i++){
            let boardSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");

            // make boardSpace class, set width, height, fill, and stroke attributes.
            boardSpace.classList.add("boardSpace");
            boardSpace.setAttribute("width", 50);
            boardSpace.setAttribute("height", 50);
            boardSpace.setAttribute("fill", spaceColor);
            boardSpace.setAttribute("stroke", spaceBorder);

            // set position.
            let x = (startPos[0] - 50) - (50 * i);
            let y = startPos[1];
            boardSpace.setAttribute("x", x);
            boardSpace.setAttribute("y", y);

            // set spaceID and position value.
            boardSpace.dataset.spaceID = baseID + 1 + i;
            boardSpace.dataset.position = [x, y];

            // add to spaces array.
            this.spaces.push([boardSpace.dataset.spaceID, boardSpace.dataset.position]);

            // DEBUG MOUSEOVER.
            boardSpace.addEventListener("mouseover", (e) => {
                console.log(e.target.dataset.spaceID);
                console.log(e.target.dataset.position);
            })

            boardArea.appendChild(boardSpace);

            // set end space position to be the last square in the row, and remember the ID of that square.
            if (i == spaceAmt) {
                let endSpaceID = boardSpace.dataset.spaceID;
                // separate value into X and Y array.
                let endSpace = boardSpace.dataset.position.split(",");
                // create next row.
                this.CreateSideRowL(row8S, endSpace, endSpaceID);
            }
        }
    }

    CreateSideRowL(spaceAmt, startPos, startID) {

        let spaceBorder = "rgb(115, 115, 115)";
        let spaceColor = "rgb(145, 145, 145)";

        let boardArea = document.getElementById("boardArea");

        let baseID = parseInt(startID);

        // make side R row spaces.
        for(let i = 0; i <= spaceAmt; i++){
            let boardSpace = document.createElementNS("http://www.w3.org/2000/svg", "rect");

            // make boardSpace class, set width, height, fill, and stroke attributes.
            boardSpace.classList.add("boardSpace");
            boardSpace.setAttribute("width", 50);
            boardSpace.setAttribute("height", 50);
            boardSpace.setAttribute("fill", spaceColor);
            boardSpace.setAttribute("stroke", spaceBorder);

            // set position.
            let x = startPos[0];
            let y = (parseInt(startPos[1]) + 50) + (50 * i);
            boardSpace.setAttribute("x", x);
            boardSpace.setAttribute("y", y);

            // set spaceID and position value.
            boardSpace.dataset.spaceID = baseID + 1 + i;
            boardSpace.dataset.position = [x, y];

            // add to spaces array.
            this.spaces.push([boardSpace.dataset.spaceID, boardSpace.dataset.position]);

            // DEBUG MOUSEOVER.
            boardSpace.addEventListener("mouseover", (e) => {
                console.log(e.target.dataset.spaceID);
                console.log(e.target.dataset.position);
            })

            boardArea.appendChild(boardSpace);
        }
    }

}