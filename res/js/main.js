const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;

cookie.onclick = () => {
    //numberOfCookies = numberOfCookies + 1
    numberOfCookies++
    counter.innerText = "Corruption: " + numberOfCookies;
}