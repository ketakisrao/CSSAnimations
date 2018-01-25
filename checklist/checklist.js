var dateBlock = document.getElementById("#date");
var dayBlock = document.getElementById("#day");
var date = new Date();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
dateBlock.innerHTML = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
dayBlock.innerHTML = days[date.getDay()];