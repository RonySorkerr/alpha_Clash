// for all the function will be performing

// if we click the button it will hide the current screen and show the next screen.
function hideElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
// the screen we want to show
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
