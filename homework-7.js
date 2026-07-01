function showWeatherForecast(city, temperature) {
    console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}
showWeatherForecast('Калининграде', 30)


const SPEED_OF_LIGHT = 299792458;
function checkSpeed(speed) {
    if (speed > SPEED_OF_LIGHT) {
        console.log("Сверхсветовая скорость");
    } else if (speed < SPEED_OF_LIGHT) {
        console.log("Субсветовая скорость");
    } else {
        console.log("Скорость света");
    }
}
checkSpeed(1000000)


const product = "Парфюмированный шампунь";
const priceProduct = 10;
function checkBudget(currentBudget) {
    if (currentBudget >= 10) {
        console.log(`${product} приобретен. Спасибо за покупку!`);
    } else {
        console.log(`Вам не хватает ${priceProduct - currentBudget}$, пополните баланс`);
    }
}
checkBudget(9)


function getValue(a, b) {
    console.log(`${a + b}`);
}
getValue('2', 3)


const userName = 'Бахруз';
const AVOGADRO = 6.022e23;
const vehiclePrice = 1000



