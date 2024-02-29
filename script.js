// display selector
let display = document.querySelector(".display input");
// ALL Number buttons function
function appendOfDisplay(number) {
    display.value += number;

}

//     ALLCELAR button function
function displayAllClear() {
    display.value = "";
}


// DELETE button function 
function oneNumberClear() {
    display.value = display.value.slice(0, -1);
}
// Equal Button function
function calculate() {
    try {

        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }
}



 // keyboard key Event
document.addEventListener('keydown', function(event) {
    var key = event.key;

    // Check if the pressed key is a number, operator, or Enter key
    if (/[\d\+\-\*\/\.%]/.test(key)) {
      display.value += key;
    } else if (key === 'Enter') {
      // if pressed enter calculate number
      calculate();
    } else if (key === 'Escape') {
      // if escape pressed clear display
      display.value = '';
    }else if( key === 'Backspace'){
        // if Backspace pressed last one number delete
        oneNumberClear();
    }
  });