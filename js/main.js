let elForm = document.querySelector('.form');
let elInput = document.querySelector('.input');
let elPassengerResult = document.querySelector('.passenger-result');
let elBikeResult = document.querySelector('.bike-result');
let elCarResult = document.querySelector('.car-result');
let elPlaneResult = document.querySelector('.plane-result');


elForm.addEventListener('submit', function (evt){
    evt.preventDefault()
    
    let inputValue = elInput.value;
    let passengerSpeed = 3.6;
    let bikeSpeed = 20.1;
    let carSpeed = 70;
    let planeSpeed = 800;

    function passenger(passengerSpeed) {
        return inputValue / passengerSpeed;
    }
    elPassengerResult.textContent = Math.floor(passenger(3.6)) + "soat"+ " " +Math.ceil((passenger(3.6) - Math.floor(passenger(3.6)))*60) + "daqiqa";

    function bike(bikeSpeed) {
        return inputValue / bikeSpeed;
    }
    elBikeResult.textContent = Math.floor(bike(20.1)) + "soat"+ " " +Math.ceil((passenger(20.1) - Math.floor(passenger(20.1)))*60) + "daqiqa";

    function car(carSpeed) {
        return inputValue / carSpeed;
    }
    elCarResult.textContent = Math.floor(passenger(70)) + "soat"+ " " +Math.ceil((passenger(70) - Math.floor(passenger(70)))*60) + "daqiqa";

    function plane(planeSpeed) {
        return inputValue / planeSpeed;
    }
    elPlaneResult.textContent = Math.floor(passenger(800)) + "soat"+ " " +Math.ceil((passenger(800) - Math.floor(passenger(800)))*60) + "daqiqa";
})


