console.log("😎<<--PapiScript-->>");

const date = document.querySelector('.date');
let realTime = new Date();

function start() {
    date.innerHTML = getDate(date);
    setInterval(() => {
        date.innerHTML = getDate(date);
    }, 1000);
}
start();

function getDate(date) {
    let dateValue = realTime.getDate() + "-" + realTime.getMonth() + "-" + realTime.getFullYear() + " " + realTime.getHours() + ":" + realTime.getMinutes() + ":" + realTime.getSeconds();
    return dateValue;
}