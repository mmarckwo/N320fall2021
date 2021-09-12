class Game {
    // class props.
    foundCircles = 0;
    totalCircles = 0;
    searchColor = "#99FF00";
    normalColor = "#7700AA";
    gameZone = document.getElementById("gameZone");
    foundBar = new FoundBar(); 

    constructor() {
        // make circles.
        for(let i = 0; i < 25; i++) {
            let newCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

            // circle class.
            newCircle.classList.add("gameCircle");
            newCircle.setAttribute("cx", Math.random() * 400);
            newCircle.setAttribute("cy", Math.random() * 400);

            // randomly choose circle's reveal color.
            if(Math.random() < .3) {
                // set to be the 'looking for' color.
                newCircle.dataset.hiddenColor = this.searchColor;
                this.totalCircles++;
            } else {
                newCircle.dataset.hiddenColor = this.normalColor;
            }

            // mouse events
            // on mouseover, show the hidden color attribute.
            newCircle.addEventListener("mouseover", (e) => {
                e.target.style.fill = e.target.dataset.hiddenColor;
            })

            newCircle.addEventListener("mouseout", (e) => {
                e.target.style.fill = "#363636";
            })

            newCircle.addEventListener("click", (e) => {
                // if the user clicked on something with the 'looking for' color.
                if(e.target.dataset.hiddenColor == this.searchColor) {
                    e.target.remove();

                    // store how many have been clicked on.
                    this.foundCircles++;

                    // update the found UI.
                    this.foundBar.setPercent(this.foundCircles / this.totalCircles);
                }
            })

            // add circle to the screen.
            this.gameZone.appendChild(newCircle);
        }
    }
}

class FoundBar {
    element = document.getElementById("foundBar");
    maxSize = 130;
    percent = 0;

    setPercent(percent) {
        this.percent = percent;
        this.element.setAttribute("width", this.percent * this.maxSize);
    }
}

let f = new FoundBar();
f.setPercent(0);

let g = new Game();