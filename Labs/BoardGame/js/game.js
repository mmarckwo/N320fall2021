
const PlayBoard = {

    // board reference.
    board: new GameBoard(),

    // wheel reference.
    wheel: new Wheel(),
    
    // player references
    players: [],
    activePlayers: [],

}

class Game {
    
    game = "playing";

    // game starts at turn 1 (for player 1)
    currentTurn = 1;

    // (true number of spaces is value + 1)
    // bottom row.
    row1Spaces = 17;

    // right side row.
    row2Spaces = 10;

    // top right row.
    row3Spaces = 3;

    // left part of top right row.
    row4Spaces = 3;

    // top row.
    row5Spaces = 9;

    // right part of top left row.
    row6Spaces = 3;

    // top left row.
    row7Spaces = 2;

    // left side row.
    row8Spaces = 9;

    // players
    Player1 = new Player("Red", 1);
    Player2 = new Player("Blue", 2);
    Player3 = new Player("Green", 3);
    Player4 = new Player("Orange", 4);

    constructor() {        

        // create list of active players.
        PlayBoard.activePlayers = [this.Player1, this.Player2, this.Player3, this.Player4];
        console.log(PlayBoard.activePlayers);

        // create the board.
        PlayBoard.board.createBoard(this.row1Spaces, this.row2Spaces, this.row3Spaces, this.row4Spaces, this.row5Spaces, this.row6Spaces, this.row7Spaces, this.row8Spaces);

        // create spin button.
        this._spinButton = document.createElement("button");

        // style attributes.
        this._spinButton.style.width = "150px";
        this._spinButton.style.height = "50px";
        this._spinButton.style.position = "absolute";
        this._spinButton.style.top = "700px";
        this._spinButton.style.left = "350px";

        this._spinButton.innerHTML = "Roll";

        document.body.appendChild(this._spinButton);

        this._spinButton.addEventListener("click", () => {

            if(this.game == "over") {
                PlayBoard.wheel._currentTurnText.innerHTML = ("The race is complete!");
                return;
            }

            // spin wheel.
            let spinResult = PlayBoard.wheel.WheelSpin();

            if(PlayBoard.activePlayers[this.currentTurn -1 ] == undefined) {
                this.game = "over";
                endGame();
            }
            PlayBoard.activePlayers[this.currentTurn - 1].MovePlayer(spinResult, this.currentTurn - 1);

            // next player's turn.
            this.currentTurn++;
            // go back to the first player in the active player list if the last one is reached.
            if(this.currentTurn > PlayBoard.activePlayers.length) this.currentTurn = 1;

            

            // update player turn text.
            // append player color.
            let playerColor = PlayBoard.activePlayers[this.currentTurn - 1].color;
            PlayBoard.wheel._currentTurnText.innerHTML = (`It is Player ${PlayBoard.activePlayers[this.currentTurn - 1].playerID}'s turn. (${playerColor})`);

        })

        // render players.
        this.Player1.DrawPlayer();
        this.Player2.DrawPlayer();
        this.Player3.DrawPlayer();
        this.Player4.DrawPlayer();

    }

}

// update turn text to completed state.
function endGame() {
    PlayBoard.wheel._currentTurnText.innerHTML = ("The race is complete!");
}

class Player {

    constructor(color, playerID) {
        this.color = color;
        this.playerID = playerID;

        this._xPos = 0;
        this._yPos = 0;

        // game data.
        this.currentSpace = 0;
        this.lap = 0;
    }

    MovePlayer(spin, IDref) {

        // move to the new space.
        let newSpaceID = parseInt(this.currentSpace) + parseInt(spin);

        // make a lap once the end is reached.
        if(newSpaceID >= 64) {
            newSpaceID -= 64;
            this.lap += 1;
        }

        // update current space value.
        this.currentSpace = newSpaceID;

        let newPosition = PlayBoard.board.spacePosition(this.currentSpace).split(",");

        this._xPos = newPosition[0];
        this._yPos = newPosition[1];

        let Player = PlayBoard.players[IDref];

        // animate slide.
        TweenMax.to(Player, {duration: 1, cx: (parseInt(this._xPos) + 25), cy: (parseInt(this._yPos) + 25), ease: "power4.out"});
        
        Player.setAttribute("cx", (parseInt(this._xPos) + 25));
        Player.setAttribute("cy", (parseInt(this._yPos) + 25));        

        console.log(IDref);
        console.log(PlayBoard.activePlayers);
        // if the player makes 3 laps, add their name to the race results and remove them from the game.
        if(this.lap == 3) {
            PlayBoard.wheel.PlayerWin(PlayBoard.activePlayers[IDref].playerID);
            this.finished = "true";
            PlayBoard.activePlayers.splice(parseInt(IDref), 1);
            Player.remove();
        }

    }

    DrawPlayer() {
        let boardArea = document.getElementById("boardArea");
        let Player = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        PlayBoard.players.push(Player);

        // get starting position of board.
        let startPosition = PlayBoard.board.spacePosition(0).split(",");

        // animate slide.
        TweenMax.to(Player, {duration: 1, cx: (startPosition[0] + 25), cy: (parseInt(startPosition[1]) + 25), ease: "power4.out"});
        // positioning.
        Player.setAttribute("cx", (startPosition[0] + 25));
        Player.setAttribute("cy", (parseInt(startPosition[1]) + 25));

        // visual.
        Player.setAttribute("r", 15);
        Player.setAttribute("fill", this.color);
        Player.setAttribute("id", this._playerID);

        boardArea.appendChild(Player);
    }
}

class Items {
    //itms + func.
}

let g = new Game();