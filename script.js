const startDate = new Date(2019, 09 , 7);

const today = new Date();

let years = today.getFullYear() - startDate.getFullYear();
let months = today.getMonth() - startDate.getMonth();
let days = today.getDate() - startDate.getDate();

if (days < 0) {
    months--;
    const previousMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
    );

    days += previousMonth.getDate();
}

if (months < 0) {
    years--;
    months += 12;
}

document.getElementById("experience").innerHTML =
    years + " Years " +
    months + " Months " +
    days + " Days";
