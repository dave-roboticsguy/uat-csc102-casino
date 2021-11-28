/* code.js by David Garcia, 2021 */

/* Function provided by UAT for this assignment
I changed the document.write to getElementbyID 
because it would reload and erase my entire html page */


function play() {
    /* assigns the object die1 to 5 */
    let die1 = 5
    /* assigns the object die2 to 2 */
    let die2 = 2
    /* adds up the sum of the two objects and assigns it to sum */
    let sum = die1 + die2

    /* I had to create multiple elements for each item I wanted to write in my html */
    document.getElementById("crapsDemo1").innerHTML = "Die 1 = " + die1;
    document.getElementById("crapsDemo2").innerHTML = "<br/>";
    document.getElementById("crapsDemo3").innerHTML = "Die 2 = " + die2;
    document.getElementById("crapsDemo4").innerHTML = "<br/>";
    document.getElementById("crapsDemo5").innerHTML = "Sum = " + sum;
    document.getElementById("crapsDemo6").innerHTML = "<br/>";

    /* the two objects are using the "equal to" operator and
    the if statement is also the "or" logical operator
    the == operator also performs a comparison and type coercion */
    if (sum == 7 || sum == 11) {
        document.getElementById("crapsDemo7").innerHTML = "CRAPS - you lose";
        document.getElementById("crapsDemo8").innerHTML = "<br/>";
    }

    /*     if the above condition is not met, the flow goes into the elseif
        this uses the logical "and" operator and die1 modulo remainder must be even
        this condition will never be met since we dont have any user inputs */
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsDemo9").innerHTML = "DOUBLES - you win";
        document.getElementById("crapsDemo10").innerHTML = "<br/>";
    }
}

/* creates an empty array called pics */
let pics = []

/* push() method adds one or more elements to the end of an array */
/* stored pics in root dir */
pics.push("die01.svg");
pics.push("die02.svg");
pics.push("die03.svg");
pics.push("die04.svg");
pics.push("die05.svg");
pics.push("die06.svg");

/* this is what links to the html */
let dice = document.querySelectorAll("img");

function roll() {
    /* the foreach() method executes the function one time for each element in array */
    dice.forEach(function (die) {
        /* fourth index in array, which is die05 */
        let dieOneIndexVal = 4;
        /* first index in array, which is die02 */
        let dieTwoIndexVal = 1;

        /* querySelector() method allows you to find the first element that matches */
        /* setAttribute() method adds te specified attribute to the element and gives it the value */
        document.querySelector("#die-01").setAttribute("src", pics[dieOneIndexVal]);
        document.querySelector("#die-02").setAttribute("src", pics[dieTwoIndexVal]);
    });
}

// This function is used to play a song from an mp3 file on the web.
function playMusic() {
    var music = new Audio('\ManhattanSkyline.mp3');
    music.play();
}