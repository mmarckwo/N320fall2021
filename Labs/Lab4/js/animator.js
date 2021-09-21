TweenMax.to(".type", {duration: 1.15, width: 200, opacity: '100%', ease: "power2.inOut"}); // text write-in animation.
TweenMax.to(".fadeIn", {duration: 1.75, opacity: '100%', ease: "circ.out"}).delay(1);      // bar fade-in animation.

let boxNum = document.getElementsByClassName("popIn");  // get all boxes that should pop in from HTML. 
showBoxes();                                            // run animation for appearing boxes.

function showBoxes() {
    for (let i = 0; i < boxNum.length; i++) {
        TweenMax.to(boxNum[i], {duration: 1, delay: (i/3 + 1.75), scale: 1, ease: "elastic.out(1, 0.7)"});  // box pop-in animation. 
        boxNum[i].addEventListener("mouseover", highlight);                                                 // listen for when the mouse is over, then do highlight animation. 

        boxNum[i].addEventListener("mouseout", unhighlight);                                                // listen for when the mouse is no longer over, then unhighlight the box. 

        boxNum[i].addEventListener("click", removeBox);                                                     // listen for when the box is clicked, then do remove animation.
    }
}

function highlight(e) {
    let ele = e.currentTarget;                                                                      // get element reference from event. 
    TweenMax.to(ele, {duration: .2, scale: 1.2, backgroundColor: "orange", ease: "power4.out"});    // highlight animation. 
}

function unhighlight(e) {
    let ele = e.currentTarget;                                                                                  // get element reference from event. 
    TweenMax.to(ele, {duration: .25, scale: 1, backgroundColor: "blueviolet", ease: "elastic.out(1, 0.5)"});    // unhighlight animation. 
}

function removeBox(e) {
    let ele = e.currentTarget;                          // get element reference from event. 
    TweenMax.to(ele, {duration: .2, scale: 0});         // remove animation. 
    ele.removeEventListener("mouseover", highlight);    // stop listening for mouseover. 
    ele.removeEventListener("mouseout", unhighlight);   // stop listening for mouseout. 
    ele.removeEventListener("click", removeBox);        // stop listening for click.
}
