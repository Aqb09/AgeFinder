const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
     
     let today = new Date();
        let inputDate = new Date(document.getElementById("date-input").value);
        let birthDate,birthMonth, birthYear;

        let birthDetails = {
            date: inputDate.getDate(),
            month: inputDate.getMonth() + 1,
            year: inputDate.getFullYear()
        }

        let currentYear = today.getFullYear();
        let currentMonth = today.getMonth() + 1;
        let currentDate = today.getDate();

        leapYear(currentYear);

        if (birthDetails.year > currentYear ||
            (birthDetails.month > currentMonth &&
                birthDetails.year == currentYear) ||
            (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
            ) {

            alert("Not Born Yet");
            displayResult("-", "-", "-");
            return;
        }

        birthYear = currentYear - birthDetails.year;

        if(currentMonth >= birthDetails.month) {
            birthMonth = currentMonth - birthDetails.month;
        } else { 
            birthMonth = currentMonth + 12 - birthDetails.month;
            birthYear--;
        }

        if(currentDate >= birthDetails.date) {
            birthDate = currentDate - birthDetails.date;
        } else {
            
            birthMonth--;
            let days = months[birthDetails.month - 2];
            birthDate = days - birthDetails.date + 
            currentDate;

            if(birthMonth < 0) {
                birthMonth = 11;
                birthYear--;
            }
        }
        
    displayResult(birthDate,birthMonth,birthYear);        
}


function displayResult(bDate, bMonth, bYear) {
    document.getElementById("years").textContent= bYear;
    document.getElementById("months").textContent= bMonth;
    document.getElementById("days").textContent= bDate;
}



function leapYear(year) {
    if (year % 4 == 0 ||(year % 100 == 0 && year % 400 == 0)) {
        months[1] = 29;
    } else { months[1] = 28; }


}
