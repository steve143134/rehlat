/*DOM build*/
months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var d=new Date();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var d = new Date();
(d.getFullYear());

/*Finding out the last date and setting the time and date*/
var theDate = new Date(document.lastModified);
theDate.setTime((theDate.getTime()+(60*60)) )
with (theDate) {
  document.write("<i>Last updated "+weekday[getDay()]+' '+getDate()+' '+months[getMonth()]+' '+d.getFullYear()+' '+getHours()+':'+getMinutes()+" GMT</i>")
}
