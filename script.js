

const input = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");


function cleanInputString(str) {
    const regex = /[\W_]/g;             //"\W" pronalazi sto nije slovo ili broj osim "_" zato sam dodao i "_".   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes
    return str.replace(regex, '');
  }
 
const palindromeCheck = () => {
    let text = input.value;
    const textNoSpacesUpperCase = cleanInputString(text).toUpperCase();
    const textNoSpacesUpperCaseReverse = textNoSpacesUpperCase.split("").reverse().join("");
    
    if (text === "") {
        alert("Please input a value");
    } else if (textNoSpacesUpperCaseReverse === textNoSpacesUpperCase) {
        result.innerHTML = `<p class="checkResult">${text} is a palindrome</p>`;
    } else {
        result.innerHTML = `<p class="checkResult">${text} is not a palindrome</p>`;
    }
    input.value = "";         //idk why it doesnt work when i put text = "null"; maybe because <input> works that way.
    }
    
checkButton.addEventListener("click", palindromeCheck);             // if i added this onclick ="palindromeCheck()" to the butto it would work the same.
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        palindromeCheck();
    }
})