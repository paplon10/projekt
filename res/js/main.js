const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cps = document.getElementById("cps");
const clickupgrade = document.getElementById("clickupgrade");
const autoclickupgrade = document.getElementById("autoclickupgrade");
const ring = document.getElementById("ring");
const amount1 = document.getElementById("amount1")
const amount2 = document.getElementById("amount2")
const amount3 = document.getElementById("amount3")
const clicked = document.getElementById("clicked")
const corruption = document.getElementById("corruption")
const gclick =document.getElementById("gainedclick")
const gringw =document.getElementById("gainringw")
const gring =document.getElementById("gainring")

let numberOfCookies = 0;

let cookieInceaseNumber = 1;
let clickupgradeprize = 20;

let autoclickerinterval;

let autoclickerIncrease = 0;
let autoclickerprize = 100;

let ringIncrease = 0;
let ringprize = 5000;

let totalcps = 0;

//stats hodnoty
let time = 0;
let clickedtimes = 0;
let totalamount = 0;
let gainclick = 0;
let gainwrath = 0;
let gainring = 0;

//mnozstvi upgardu (a = amount)
let aclick = 0;
let aauto = 0;
let aring = 0;

cookie.onclick = () => {
    numberOfCookies += cookieInceaseNumber;
  counter.innerText = "Corruption: " + numberOfCookies;
  clickedtimes++;
  clicked.innerText = "Clicked: " + clickedtimes;
  totalamount += cookieInceaseNumber;
  gainclick += cookieInceaseNumber;
  corruption.innerText = "Total Corruption gained: " + totalamount;
  gclick.innerText= "Corruption gained from clicking: " + gainclick;
};

clickupgrade.onclick = () => {
  if (numberOfCookies >= clickupgradeprize) {
    numberOfCookies -= clickupgradeprize;
    aclick++;
    clickupgradeprize = clickupgradeprize + 10 * aclick;
    clickupgrade.innerHTML = "Buy click upgrade: " + (clickupgradeprize) + " Corruption";
    counter.innerText = "Corruption: " + numberOfCookies;
    cookieInceaseNumber++;
    amount1.innerText = "Click Upgrades: " + aclick;
  }
};

setInterval(() => {
    numberOfCookies += autoclickerIncrease;
    numberOfCookies += ringIncrease;
    counter.innerText = "Corruption: " + numberOfCookies;
    time++;
    totalamount += autoclickerIncrease;
    totalamount += ringIncrease;
    gainwrath += autoclickerIncrease;
    gainring += ringIncrease;

    corruption.innerText = "Total Corruption gained: " + totalamount;
    gringw.innerText= "Corruption gained from Ringwraths: " + gainwrath;
    gring.innerText= "Corruption gained from Rings of Power: " + gainring;
  }, 1000);

autoclickupgrade.onclick = () => {
  if (numberOfCookies >= autoclickerprize) {
    numberOfCookies -= autoclickerprize;
    autoclickerIncrease++;
    aauto++;
    autoclickerprize = autoclickerprize + 50 * aauto;
    autoclickupgrade.innerHTML = "Buy a Ringwrath: " + (autoclickerprize) + " Corruption";
    counter.innerText = "Corruption: " + numberOfCookies;
    totalcps = autoclickerIncrease + ringIncrease;
    cps.innerText = "per sec: " + totalcps;
    amount2.innerText = "Ringwraths: " + aauto;
  }
};
ring.onclick = () => {
    if (numberOfCookies >= ringprize) {
      numberOfCookies -= ringprize;
      ringIncrease += 10;
      aring++;
      ringprize = ringprize + 1000 * aring;
      ring.innerHTML = "Buy Ring of Power: " + (ringprize) + " Corruption";
      counter.innerText = "Corruption: " + numberOfCookies;
      totalcps = autoclickerIncrease + ringIncrease;
      cps.innerText = "per sec: " + totalcps;
      amount3.innerText = "Rings of Power: " + aring;
    }
  };