// 1. Write a program that displays current date and time in
// your browser.


// var date = new Date()
// console.log(date)

// 2. Write a program that alerts the current month in words.
// For example December.


// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// var now = new Date ();
// var theMonth = now.getMonth()
// var nameOfMonth = monthNames[theMonth]
// console.log(nameOfMonth)

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var date = new Date();
// var theDay = date.getDay();
// var today = dayNames[theDay];
// console.log(today);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
// var date = new Date();
// var theDay = date.getDay();
// var today = dayNames[theDay];
// if (today === dayNames[0] || today === dayNames[6]){
//     alert("its fun day")

// }
// else{
//     alert(today)
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

// var date = new Date();
// var monthDate = date.getDate();
// if (monthDate <= 15){
//     document.write("First fifteen day of month")
// }
// else{
//     document.write("Last fifteen days of months")
// }

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

// var a = new Date();
// console.log(a);
// var milliSecond = a.getTime();
// console.log(milliSecond);
// var minutes = milliSecond/1000 * 60 *60
// console.log(minutes)


// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

// var date = new Date ();
// var time = date.getTime();
// if (time === 12){
//     alert("It's A.M")
// }
// else{
//     alert("It's P.M")
// }


// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
//   var laterDate = new Date("dec31,2021" );
// console.log(laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

// var current = new Date()/ (1000*60*60*24);
// var ramazan = new Date("May 12, 2021")/ (1000*60*60*24)
// var days = current - ramazan
// alert(days + "days passed scince Ramazan 2021")


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.



// var currentMillis = new Date ().getTime();
// var start = new Date ("Jan 1 , 2021").getTime()
// var Result = currentMillis - start
// console.log(Result)

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

// var currentDate = new Date();
// console.log(currentDate);
// currentDate.setHours(21)
// console.log(currentDate)


// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// var currentDate = new Date();
// console.log(currentDate);
// currentDate.setFullYear(1921);
// console.log(currentDate);




// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

// var currentMillis = new Date().getTime();
// var currentYear = Math.floor(currentMillis / (1000 * 60 * 60 * 24 * 30 * 12)) + 1969;
// var birthYear = "";
// var validBirthYear = false;
// while (birthYear === "" || birthYear === null || validBirthYear === false) {
// 				birthYear = prompt("Enter your birth year:");
// 				if (birthYear === null) {
// 								alert("Please proceed!");
// 				}
// 				else if (birthYear === "") {
// 								alert("You entered nothing!");
// 				}
// 				else if (birthYear != Number(birthYear)) {
// 								alert("This isn't a number!");
// 				}
// 				else if (birthYear.indexOf(".") !== -1) {
// 								alert("Year must be an integer!")
// 				}
// 				else if (birthYear.length !== 4) {
// 								alert("Input should contain 4 digits!");
// 				}
// 				else if (birthYear > currentYear) {
// 								alert("Given year has yet to come!");
// 				}
// 				else if (birthYear < 0) {
// 								alert("Negative year is not possible!")
// 				}
// 				else {
// 								validBirthYear = true;
// 				}
// }

// var age = currentYear - birthYear;

// document.write("<div class='page'>");
// document.write("<h1>Age Calculator</h1>");
// document.write("<p><span class='sub-heading'>Your Birth Year: </span>" + birthYear + "</p>");
// document.write("<p><span class='sub-heading'>Current Year: </span>" + currentYear + "</p>");
// document.write("<h2>Result</h2>");
// if (currentYear == birthYear) {
// 				document.write("<p>You are less than a year old.</p>")
// }
// else if (birthYear < 1870) {
// 				document.write("<p>You are WAY too old.</p>")
// }
// else {
//    document.write("<p>You've been on Earth for " + age + " years.</p>");
// }




// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// var customerName = prompt("Enter your name");
// var currentMonth = prompt ("Enter month");
// var numberOfUnits = +prompt ("no. of unit")
// var chargesPerUnit = 16
// var netAmountPayable = numberOfUnits*chargesPerUnit
// var grossAmountPayabl = numberOfUnits*chargesPerUnit + 365


// document.write("Customer Name : " + customerName+ "<br/>")
// document.write("Current Month : " + currentMonth+ "<br/>")
// document.write("Number of units : " + numberOfUnits+ "<br/>")
// document.write("Charges per unit : " + chargesPerUnit+ "<br/>")
// document.write("Net Amount Payable (within Due Date) : " + netAmountPayable+ "<br/>");
// document.write("Late Payment Surcharge : " + "350"+ "<br/>");
// document.write("ross Amount Payable (after Due Date) : " + grossAmountPayabl+ "<br/>");





