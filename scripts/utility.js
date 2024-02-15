// it will hide the screen
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

// it will show the next screen
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
};




// the alphabets array
const randomAlphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// this will generet random aplhabet

function randomAlphabet() {
    // there is 26 alphabets we have to generat random number from 0 - 25. cause, length is array.length - 1;
    const randomNuber = Math.random() * 25;

    // convert the floor number into integer
    const indexOfNumbers = Math.round(randomNuber);

    // it generates a random number and from the number of index get an alphabet.

    const alphabet = randomAlphabet(indexOfNumbers);

    console.log(alphabet);

    // return alphabet;
}

