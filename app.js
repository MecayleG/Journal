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

// The counter
let counter = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            counter--
        } else if (styles.contains("increase")) {
            counter++
        } else {
            counter = 0
        }
        if (counter > 0) {
            value.style.color = 'green'
        }
        if (counter < 0) {
            value.style.color = 'red'
        }
        if (counter === 0) {
            value.style.color = 'black'
        }

        value.textContent = counter;
    })
});