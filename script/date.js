function getDate() {
    let realTime = new Date();
    // let dateValue = realTime.getDate() + "-" + realTime.getMonth() + "-" + realTime.getFullYear() + " " + realTime.getHours() + ":" + realTime.getMinutes() + ":" + realTime.getSeconds();
    // return dateValue;

    let day = realTime.getDate();
    let fullDay = realTime.getDay();
    let month = realTime.getMonth();
    let year = realTime.getFullYear();
    let hours = realTime.getHours();
    let minutes = realTime.getMinutes();
    let seconds = realTime.getSeconds();
    checkDate(day);
    checkDate(hours);
    checkDate(minutes);
    checkDate(seconds);

    // check pour le jour 
    if (fullDay == 1) {fullDay = "Lundi";}
    else if (fullDay == 2) {fullDay = "Mardi";}
    else if (fullDay == 3) {fullDay = "Mercredi";}
    else if (fullDay == 4) {fullDay = "Jeudi";}
    else if (fullDay == 5) {fullDay = "Vendredi";}
    else if (fullDay == 6) {fullDay = "Samedi";}
    else if (fullDay == 7) {fullDay = "Dimanche";}

    // check pour le mois
    if (month == 0) {month = "Janvier";}
    else if (month == 1) {month = "Février";}
    else if (month == 2) {month = "Mars";}
    else if (month == 3) {month = "Avril";}
    else if (month == 4) {month = "Mai";}
    else if (month == 5) {month = "Juin";}
    else if (month == 6) {month = "Juillet";}
    else if (month == 7) {month = "Août";}
    else if (month == 8) {month = "Septembre";}
    else if (month == 9) {month = "Octobre";}
    else if (month == 10) {month = "Novembre";}
    else if (month == 11) {month = "Décembre";}

    let viewDate = fullDay + " " + day + " " + month + " " + year + " " + hours + ":" + minutes + ":" + seconds;
    return viewDate;
}

function checkDate(appletName) {
    if (appletName < 10) {
        appletName = 0 + appletName;
    }
}

date.textContent = getDate();
setInterval(() => {
    // date.textContent = getDate();

    date.textContent = getDate();
}, 1000);