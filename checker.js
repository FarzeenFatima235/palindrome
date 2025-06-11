
function checkPalindrome() {
  var inputBox = document.querySelector("input");
  var text = inputBox.value;
  var cleanText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  var  reverseText = cleanText.split('').reverse().join('');
  var result = document.getElementById("result");

  if (!cleanText) {
    result.textContent = " Please type something!";
    result.style.color = "red";
  } else if (cleanText === reverseText) {
    result.textContent = `"${text}" is a Palindrome `;
    result.style.color = "green";
  } else {
    result.textContent = `"${text}" is NOT a Palindrome `;
    result.style.color = "red";
  }
}
