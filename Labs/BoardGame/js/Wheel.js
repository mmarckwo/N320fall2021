
class Wheel {

    // keep track of players who have finished.
    winnerList = ["---", "---", "---", "---"];

    // create spin button.
    constructor() {

        // current turn div.
        this._currentTurnText = document.createElement("div");
        this._currentTurnText.innerHTML = (`It is Player 1's turn. (Red)`);
        this._currentTurnText.style.position = "absolute";
        this._currentTurnText.style.top = "675px";
        this._currentTurnText.style.left = "350px"
        document.body.appendChild(this._currentTurnText);

        // results div.
        this._raceResultsText = document.createElement("div");
        this._raceResultsText.innerHTML = (`RESULTS <br /> --------- <br /> 1. --- <br /> 2. --- <br /> 3. --- <br /> 4. ---`);
        this._raceResultsText.style.position = "absolute";
        this._raceResultsText.style.left = "800px";
        this._raceResultsText.style.top = "675px";
        document.body.appendChild(this._raceResultsText);

        // instructions div.
        this._howTo = document.createElement("div");
        this._howTo.innerHTML = (`Be the first to cross 3 laps! <br />This game is pure luck.`);
        this._howTo.style.position = "absolute";
        this._howTo.style.top = "675px";
        this._howTo.style.left = "50px"
        document.body.appendChild(this._howTo);

    }

    // wheel spin to move.
    WheelSpin() {
        // spin from 1 - 6.
        let spin = (Math.random() * (6 - 1) + 1).toFixed(0);;
        
        return spin;
    }

    PlayerWin(player) {

        // determine which player made 3 laps from the player's ID.
        let winColor = ""
        if(player == 1) winColor = "Red";
        if(player == 2) winColor = "Blue";
        if(player == 3) winColor = "Green";
        if(player == 4) winColor = "Orange";

        this.winnerList.unshift(winColor);
        console.log(this.winnerList);

        // update results text.
        this._raceResultsText.innerHTML = (`RESULTS <br /> --------- <br /> 1.${this.winnerList[3]} <br /> 2. ${this.winnerList[2]} 
                                            <br /> 3. ${this.winnerList[1]} <br /> 4. ${this.winnerList[0]}`);
    }
}