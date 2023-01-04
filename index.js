let buttonPlayer1 = document.querySelector("#ping_pong .buttonPlayer1");
let buttonPlayer2 = document.querySelector("#ping_pong .buttonPlayer2");
let buttonReset = document.querySelector("#ping_pong .buttonReset");


let containers = document.querySelector("#ping_pong.containers");

let result = 0
let result2 = 0
let pointsMax = document.querySelector("#ping_pong .points")

buttonPlayer1.addEventListener("click", () => {

    if (result >= pointsMax.value - 1) {
        alert("Player1 ganador")
    }
    else {
        result += 1;
        counter1.innerText = result;
    }

});
buttonPlayer2.addEventListener("click", () => {

    if (result2 >= pointsMax.value - 1) {
        alert("Player2 ganador")
    }
    else {
        result2 += 1;
        counter2.innerText = result2;
    }
})
buttonReset.addEventListener("click", () => {
    counter1.innerText = "0";
    counter2.innerText = "0";
    result = 0;
    result2 = 0;
    pointsMax.value = 0;



})




