var d = new Date();
var days = ["Вс", "По", "Вт", "Ср", "Чт", "Пт", "Су"];
document.getElementById("week").innerHTML = days[d.getDay()];
document.getElementById("hh").innerHTML = d.getHours();
document.getElementById("mm").innerHTML = d.getMinutes();
document.getElementById("ss").innerHTML = d.getSeconds();
