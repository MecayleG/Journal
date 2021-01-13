// Input type='color'
var colorValue = document.getElementById("favcolor");
var textColor = document.querySelector(".color-text");
var colorBtn = document.querySelector(".submit-color-btn");

colorBtn.addEventListener("click", function() {
    textColor.innerHTML = "No way!! My favorite color is " + colorValue.value + " too &#128516;"
    textColor.classList.add("border-for-text")
    setTimeout(() => {
        textColor.innerHTML = "";
        textColor.classList.remove("border-for-text");
    }, 5000);
});