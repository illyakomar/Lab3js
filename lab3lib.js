function showTime() {
    let dateObj = new Date();
    let monthsArr = ['cічня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
    let daysArr = ['неділя', 'понеділок', 'вівторок', 'середа', 'четверг', 'пятниця', 'субота'];
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth();
    let numDay = dateObj.getDate();
    let day = dateObj.getDay();
    let hour = dateObj.getHours();
    let minute = dateObj.getMinutes();
    let second = dateObj.getSeconds();

    if (minute < 10) minute = "0" + minute;

    if (second < 10) second = "0" + second;

    let out = "Дата:  " + numDay + " " + monthsArr[month] + " " + year + " " + " року " + "\n" + "День:  " + daysArr[day] + " " + "\n" + "Час:  " + hour + ":" + minute + ":" + second;
    alert(out);
}
function dayNumber(){
    let dateObj = new Date();
    let daysArr = ['неділя', 'понеділок', 'вівторок', 'середа', 'четверг', 'пятниця', 'субота'];
    let day = dateObj.getDay();
    let out = "Номер дня:  " + day + " "  + "\n" + "Назва дня:  " + daysArr[day];
    alert(out);
}

function nDaysAgo() {
    var date = new Date();
    var valueD = document.getElementById("daysAgo").value;
    var elem = document.getElementById("outputDaysAgo");
    date.setDate(date.getDate()- valueD);
    elem.innerHTML = date.getDate();
}

function lastMonthDay() {
    var elem = document.getElementById("output1");
    var Year = document.getElementById("Year").value;
    var Month = document.getElementById("Month").value;
    var date = new Date(Year, +Month + 1, 0);
    elem.innerHTML = date.getDate();
}

function Seconds() {
    var date = new Date();
    var today = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    var tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate()+1);
    var rizn2 = Math.round((tomorrow - date)/1000);
    var elem = document.getElementById("output2");
    elem.innerHTML = "<p>Від початку сьогоднішнього дня</p>" + today + "<br>"  +"<p>До початку наступного дня</p>" + rizn2 ;
}
function Format() {
    var date = new Date (2019, 12, 3);
    var day = date.getDate();
    var elem = document.getElementById("output3");
    if (day < 10)
        day = '0' + day;

    var month = date.getMonth() + 1;
    if (month < 10)
        month = '0' + month;

    var year = date.getFullYear();
    if (year < 10)
        year = '0' + year;

    elem.innerHTML = day + '.' + month + '.' + year;
}
function Decimal() {
    var elem = document.getElementById("output4");
    var date1 = new Date();
    var date2 = new Date(2019, 10, 8);

    elem.innerHTML = "Різниця в: " + Math.abs(parseInt((date1 - date2)/8.64e+7)) + " днів";
}

function formatDate() {
    var date = new Date();
    var dateNow = new Date();
    var decimal = dateNow - date;
    var elem = document.getElementById("output5");
    if(decimal<1000)
        elem.innerHTML = "Тільки що";
        else if(decimal < 60000)
        elem.innerHTML = parseInt(decimal/1000) + " c. назад";
    else if(decimal < 3600000)
        elem.innerHTML = parseInt(decimal*1.66667e-5) + " хв. назад";
    else
        elem.innerHTML = date.toLocaleString("uk");
}

function AnotherDateFormat() {
    var str = document.getElementById("data").value;
    var d = new Date(Date.parse(str));
    var elem = document.getElementById('output6');
    elem.innerHTML = d;
}

function LangDate() {
    var date = new Date();
    var elem = document.getElementById('output7');
    var lang = document.getElementById("select10").value
    var options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    elem.innerHTML = date.toLocaleString(lang, options);
}
