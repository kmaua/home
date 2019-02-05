var totalCookies, cookiesPerClick, cookiesPerSecond;
var stage, mainCookie, mainCookieHit, clickUpgrade;
var clickUpgradeCost, clickUpgradeValue, clickUpgradeAmount;
var cUpCost = "",
    cUpAmount = "";
var autoClickerAmount, autoClickCost, aClickCost = "",
    aClickAmount = "";
var grandmaAmount, grandmaCost, gCost = "",
    gAmount = "";
var bakeryAmount, bakeryCost, bCost = "",
    bAmount = "";
var clickText, floatingText;
var goldenCost, goldenAmount, goldCost;
var floatingCursor, floatingAutoClick, floatingGrandma, floatingBakery;
var turboClickCost;
var goldenPinCost;
var goldenOvenCost;
var goldenCookieAmount, goldenCookieCost, goldenCookieBuff, gCookCost = "",
    gCookAmount = "";
var autoClickBuff, grandmaBuff, bakeryBuff;


function clickUpCost() {
    // Displays the "Cost: ___" and "Amount: ___" on the button
    console.log("clickUpCost running");
    cUpCost = "Cost: " + clickUpgradeCost;
    cUpAmount = "Amount: " + clickUpgradeAmount;
    document.getElementById("mouseUpgradeCost").innerHTML = cUpCost;
    document.getElementById("mouseUpgradeAmount").innerHTML = cUpAmount;
}

function autoClickerCost() {
    // Displays the "Cost: ___" and "Amount: ___" on the button
    console.log("autoClickerCost running");
    aClickCost = "Cost: " + autoClickCost;
    aClickAmount = "Amount: " + autoClickerAmount;
    document.getElementById("autoClickCost").innerHTML = aClickCost;
    document.getElementById("autoClickAmount").innerHTML = aClickAmount;
}

function gmaCost() {
    // Displays the "Cost: ___" and "Amount: ___" on the button
    console.log("grandmaCost running");
    gCost = "Cost: " + grandmaCost;
    gAmount = "Amount: " + grandmaAmount;
    document.getElementById("grandmaCost").innerHTML = gCost;
    document.getElementById("grandmaAmount").innerHTML = gAmount;
}

function bakCost() {
    // Displays the "Cost: ___" and "Amount: ___" on the button
    console.log("bakeryCost running");
    bCost = "Cost: " + bakeryCost;
    bAmount = "Amount: " + bakeryAmount;
    document.getElementById("bakeryCost").innerHTML = bCost;
    document.getElementById("bakeryAmount").innerHTML = bAmount;
}

function gCursorCost() {
    // Displays the "Cost: ___" on the button
    console.log("goldCost running");
    goldCost = goldenCost;
    document.getElementById("goldenCursorCost").innerHTML = goldCost;
}

function tAutoCCost() {
    // Displays the "Cost: ___" on the button
    console.log("TurboAutoClick running");
    document.getElementById("turboClickCost").innerHTML = turboClickCost;
}

function rollCost() {
    // Displays the "Cost: ___" on the button
    console.log("RollingPinCost running");
    document.getElementById("goldenPinCost").innerHTML = goldenPinCost;
}

function gOvenCost() {
    // Displays the "Cost: ___" on the button
    console.log("GoldenOvenCost running");
    document.getElementById("goldenOvenCost").innerHTML = goldenOvenCost;
}

function goldCookieCost() {
    // Displays the "Cost: ___" and "Amount: ___" on the button
    console.log("GoldCookieCost running");
    gCookCost = "Cost: " + goldenCookieCost;
    gCookAmount = "Amount: " + goldenCookieAmount;
    document.getElementById("goldenCookieCost").innerHTML = gCookCost;
    document.getElementById("goldenCookieAmount").innerHTML = gCookAmount;
}

function init() {
    console.log("Init Function Running");
    loadAssets();
    // Initial Values
    totalCookies = 0;
    cookiesPerSecond = 0;
    cookiesPerClick = 1;
    clickText = cookiesPerClick;
    clickUpgradeValue = 0;
    // Amounts
    clickUpgradeAmount = 0;
    autoClickerAmount = 0;
    grandmaAmount = 0;
    bakeryAmount = 0;
    goldenCookieAmount = 0;
    // Costs
    clickUpgradeCost = 15;
    autoClickCost = 50;
    grandmaCost = 500;
    bakeryCost = 1000;
    goldenCost = 750;
    turboClickCost = 750;
    goldenPinCost = 1250;
    goldenOvenCost = 2000;
    goldenCookieCost = 75000;
    // Buffs
    autoClickBuff = 1;
    grandmaBuff = 5;
    bakeryBuff = 10;
    goldenCookieBuff = 1000;
    // Initial Value Function Calls
    clickUpCost();
    autoClickerCost();
    gmaCost();
    bakCost();
    gCursorCost();
    tAutoCCost();
    rollCost();
    gOvenCost();
    goldCookieCost();
    //
    console.log("totalCookies: " + totalCookies);
    console.log("cookiesPerClick: " + cookiesPerClick);
    stage = new createjs.Stage("stage");
    mainCookie = new createjs.Bitmap("images/cookie.png");
    mainCookieHit = new createjs.Shape();
    clickUpgrade = new createjs.Shape();
    floatingCursor = new createjs.Bitmap("images/floatingCursor.png");
    floatingAutoClick = new createjs.Bitmap("images/floatingAutoClick.png");
    floatingGrandma = new createjs.Bitmap("images/floatingGrandma.png");
    floatingBakery = new createjs.Bitmap("images/floatingBakery.png");
    //
    // Ticker
    createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener("tick", onTick);
    //
    // Properties
    //
    mainCookieHit.graphics.beginFill("#776c50").drawCircle(0, 0, 140);
    mainCookieHit.x = 203;
    mainCookieHit.y = 178;
    mainCookieHit.alpha = 0.02;
    mainCookie.scaleX = 0.73;
    mainCookie.scaleY = 0.73;
    mainCookie.x = 200;
    mainCookie.y = 175;
    mainCookie.regX = 200;
    mainCookie.regY = 200;
    // Floating Object Properties
    floatingCursor.scaleX = 0.10;
    floatingCursor.scaleY = 0.10;
    floatingCursor.alpha = 0;
    floatingAutoClick.scaleX = 0.10;
    floatingAutoClick.scaleY = 0.10;
    floatingAutoClick.alpha = 0;
    floatingGrandma.scaleX = 0.3;
    floatingGrandma.scaleY = 0.3;
    floatingGrandma.alpha = 0;
    floatingBakery.scaleX = 0.25;
    floatingBakery.scaleY = 0.25;
    floatingBakery.alpha = 0;
    //
    stage.addChild(mainCookie);
    stage.addChild(mainCookieHit);
    //
    // Buttons
    mainCookieHit.addEventListener("click", addCookies);
}

function loadAssets() {
    // Loads Sound Assets
    createjs.Sound.volume = 0.35;
    createjs.Sound.registerSound("sounds/crunch.wav", "crunch");
    createjs.Sound.registerSound("sounds/goldenCookie.wav", "goldenCookie");
}

function addCookies() {
    // Adds cookies equal to cookiesPerClick, which changes with upgrades
    totalCookies += cookiesPerClick;
    // Plays Crunch sound when clicking
    createjs.Sound.play("crunch");
    document.getElementById("text").value = totalCookies;
    // Shrinks, then grows the cookie, as if it were a button being pressed
    createjs.Tween.get(mainCookie)
        .to({
            scaleX: 0.65,
            scaleY: 0.65
        }, 75)
        .to({
            scaleX: 0.73,
            scaleY: 0.73
        }, 75);
    // Creates text that floats up from the mouse position and disappears, which lets the user know how many cookies they have just recieved
    floatingText = new createjs.Text(clickText, "30px Ariel", "white");
    floatingText.shadow = new createjs.Shadow("black", 4, 4, 6);
    floatingText.alpha = 0;
    stage.addChild(floatingText);
    createjs.Tween.get(floatingText)
        .to({
            alpha: 1,
            x: stage.mouseX,
            y: stage.mouseY
        })
        .to({
            y: stage.mouseY - 60,
            alpha: 0
        }, 750);
    // Updates the document title to let the user know how many cookies they have even if they are on another tab
    document.title = totalCookies + " Cookies!";
}

function clickUpgradeButton() {
    // Checks to see if the user has enough cookies to purchase the upgrade
    if (totalCookies >= clickUpgradeCost) {
        cookiesPerClick += 1 + clickUpgradeValue;
        console.log("cookiesPerClick: " + cookiesPerClick);
        totalCookies -= clickUpgradeCost;
        // Rounds the amount of cookies to a whole number
        totalCookies = Math.round(totalCookies * 1) / 1;
        clickUpgradeAmount++;
        clickUpgradeCost += 5;
        clickUpgradeCost *= 1.05;
        // Rounds the amount of cookies to a whole number
        clickUpgradeCost = Math.round(clickUpgradeCost * 1) / 1;
        clickUpCost();
        document.getElementById("text").value = totalCookies;
        clickText = cookiesPerClick;
        stage.addChild(floatingCursor);
        createjs.Tween.get(floatingCursor)
            .to({
                alpha: 1,
                x: 40,
                y: 350
            })
            .to({
                y: 100,
                alpha: 0
            }, 1000);
    }
    console.log("Click Upgrade cost: " + clickUpgradeCost);

}

function autoClickButton() {
    // Checks to see if the user has enough cookies to purchase the upgrade
    if (totalCookies >= autoClickCost) {
        autoClickerAmount++;
        console.log("autoClickers: " + autoClickerAmount);
        totalCookies -= autoClickCost;
        // Rounds the amount of cookies to a whole number
        totalCookies = Math.round(totalCookies * 1) / 1;
        autoClickCost += 8;
        autoClickCost *= 1.02;
        // Rounds the amount of cookies to a whole number
        autoClickCost = Math.round(autoClickCost * 1) / 1;
        autoClickerCost();
        document.getElementById("text").value = totalCookies;
        cookiesPerSecond += autoClickBuff;
        stage.addChild(floatingAutoClick);
        createjs.Tween.get(floatingAutoClick)
            .to({
                alpha: 1,
                x: 240,
                y: 350
            })
            .to({
                y: 100,
                alpha: 0
            }, 1000);
    }
    console.log("Auto Clicker cost: " + autoClickCost);
}

function grandmaButton() {
    // Checks to see if the user has enough cookies to purchase the upgrade
    if (totalCookies >= grandmaCost) {
        grandmaAmount++;
        console.log("grandmas: " + grandmaAmount);
        totalCookies -= grandmaCost;
        // Rounds the amount of cookies to a whole number
        totalCookies = Math.round(totalCookies * 1) / 1;
        grandmaCost += 12;
        grandmaCost *= 1.02;
        // Rounds the amount of cookies to a whole number
        grandmaCost = Math.round(grandmaCost * 1) / 1;
        gmaCost();
        document.getElementById("text").value = totalCookies;
        cookiesPerSecond += grandmaBuff;
        stage.addChild(floatingGrandma);
        createjs.Tween.get(floatingGrandma)
            .to({
                alpha: 1,
                x: 40,
                y: 350
            })
            .to({
                y: 100,
                alpha: 0
            }, 1000);
    }
}

function bakeryButton() {
    // Checks to see if the user has enough cookies to purchase the upgrade
    if (totalCookies >= bakeryCost) {
        bakeryAmount++;
        console.log("bakeries: " + bakeryAmount);
        totalCookies -= bakeryCost;
        // Rounds the amount of cookies to a whole number
        totalCookies = Math.round(totalCookies * 1) / 1;
        bakeryCost += 20;
        bakeryCost *= 1.02;
        // Rounds the amount of cookies to a whole number
        bakeryCost = Math.round(bakeryCost * 1) / 1;
        bakCost();
        document.getElementById("text").value = totalCookies;
        cookiesPerSecond += bakeryBuff;
        stage.addChild(floatingBakery);
        createjs.Tween.get(floatingBakery)
            .to({
                alpha: 1,
                x: 240,
                y: 350
            })
            .to({
                y: 100,
                alpha: 0
            }, 1000);
    }
}

function goldenCookie() {
    // Checks to see if the user has enough cookies to purchase the upgrade
    if (totalCookies >= goldenCookieCost) {
        createjs.Sound.play("goldenCookie");
        goldenCookieAmount++;
        console.log("Golden Cookies: " + goldenCookieAmount);
        totalCookies -= goldenCookieCost;
        // Rounds the amount of cookies to a whole number
        totalCookies = Math.round(totalCookies * 1) / 1;
        goldenCookieCost += 500;
        goldenCookieCost *= 1.25;
        // Rounds the amount of cookies to a whole number
        goldenCookieCost = Math.round(goldenCookieCost * 1) / 1;
        goldCookieCost();
        document.getElementById("text").value = totalCookies;
        cookiesPerSecond += goldenCookieBuff;
    }
}

function goldenCursor() {
    // Checks to see if the user has enough cookies to purchase the upgrade
    if (totalCookies >= goldenCost) {
        clickUpgradeValue++;
        console.log("golden cursors: " + goldenAmount);
        totalCookies -= goldenCost;
        // Rounds the amount of cookies to a whole number
        totalCookies = Math.round(totalCookies * 1) / 1;
        goldenCost += 25;
        goldenCost *= 1.1;
        // Rounds the amount of cookies to a whole number
        goldenCost = Math.round(goldenCost * 1) / 1;
        gCursorCost();
    }
}

function turboAutoClick() {
    // Checks to see if the user has enough cookies to purchase the upgrade
    if (totalCookies >= turboClickCost) {
        autoClickBuff += 1;
        totalCookies -= turboClickCost;
        // Rounds the amount of cookies to a whole number
        totalCookies = Math.round(totalCookies * 1) / 1;
        turboClickCost += 25;
        turboClickCost *= 1.12;
        // Rounds the amount of cookies to a whole number
        turboClickCost = Math.round(turboClickCost * 1) / 1;
        tAutoCCost();
    }
}

function goldenRollingPin() {
    // Checks to see if the user has enough cookies to purchase the upgrade
    if (totalCookies >= goldenPinCost) {
        grandmaBuff += 5;
        totalCookies -= goldenPinCost;
        // Rounds the amount of cookies to a whole number
        totalCookies = Math.round(totalCookies * 1) / 1;
        goldenPinCost += 25;
        goldenPinCost *= 1.13;
        // Rounds the amount of cookies to a whole number
        goldenPinCost = Math.round(goldenPinCost * 1) / 1;
        rollCost();
    }
}

function goldenOven() {
    // Checks to see if the user has enough cookies to purchase the upgrade
    if (totalCookies >= goldenOvenCost) {
        bakeryBuff += 10;
        totalCookies -= goldenOvenCost;
        // Rounds the amount of cookies to a whole number
        totalCookies = Math.round(totalCookies * 1) / 1;
        goldenOvenCost += 35;
        goldenOvenCost *= 1.13;
        // Rounds the amount of cookies to a whole number
        goldenOvenCost = Math.round(goldenOvenCost * 1) / 1;
        gOvenCost();
    }
}

function cookiesTimer() {
    // Called every second, this function updates the amount of cookies the user has, based on the cookiesPerSecond variable
    totalCookies += cookiesPerSecond;
    document.getElementById("text").value = totalCookies;
    document.title = totalCookies + " Cookies!";
}
// Calls the cookiesTimer function every second
setInterval(cookiesTimer, 1000);

// Ticker Engine
function onTick() {
    document.getElementById("cPerSec").innerHTML = cookiesPerSecond;
    document.getElementById("cPerClick").innerHTML = cookiesPerClick;
    stage.update();
}


// ASSET REFERENCES

// Cookie: 
// https://www.timhortons.com/ca/images/smile-cookie-2018-slider-cookie.png

// Mouse Cursors
// https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Mouse-cursor-hand-pointer.svg/1200px-Mouse-cursor-hand-pointer.svg.png

// Grandma
// https://openclipart.org/image/2400px/svg_to_png/279927/grandma-486796.png

// Bakery
// https://openclipart.org/detail/168767/boulanger

// Crunch Sound
// https://freesound.org/people/InspectorJ/sounds/429595/

// Golden Cookie Sound
// https://freesound.org/people/Rob_o_Frog/sounds/416213/
