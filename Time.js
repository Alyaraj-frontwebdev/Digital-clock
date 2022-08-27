function currentTimeAndDate(){
    var d= new Date();
    var hours = d.getHours();
    var min = d.getMinutes();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();
    var date=d.getDate();
    const day_name=["SUN", "MON", "TUE", "WED","THU","FRI","SAT"];
    const month_name=["JAN", "FEB", "MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    if(hours<10){
        hours="0"+hours;
    }
    if(min<10){
        min="0"+min;
    }
    if(date<10){
        date="0"+date;
    }
    document.getElementById('currentTime').innerHTML=hours + ":" + min;
    document.getElementById('currentDate').innerHTML=day_name[day] + ", " + date + " " + month_name[month] + "," + year;
}
setInterval(currentTimeAndDate,1000);