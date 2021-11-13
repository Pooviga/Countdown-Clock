var x;
var distance;
var flag;
window.onload = function () {
 	
	var form=document.getElementById('form');
	function runEvent(e){
		console.log(e);
		form.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
	}
	form.addEventListener('mousemove',runEvent);
}
function reset_button(){
	clearInterval(x);
	out(0,0,0,0);
	document.getElementById("date").value = null;


}
function stop_button(){
	clearInterval(x);
	x=0;
}

function out(days,hours,minutes,seconds){
	document.getElementById("demo").innerHTML = days + "d "+"|" + hours + "h "+"|"
	+ minutes + "m " +"|"+ seconds + "s ";
}
function submit_button(){	
	stop_button();
	const d_value=document.getElementById("date").value;
	var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
	var dt = new Date(d_value.replace(pattern,'$3-$2-$1'));
	var s=d_value.replace(pattern,'$3-$2-$1');
	const t_value=document.getElementById("appt").value;
	var app=s.concat(" "+t_value);
	var countDownDate = new Date(app).getTime(); 
	x = setInterval(function() {

		// Get today's date and time
		var now = new Date().getTime();

		// Find the distance between now and the count down date

		distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// Output the result in an element with id="demo"

		out(days,hours,minutes,seconds);
		// If the count down is over, write some text 
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("demo").innerHTML = "EXPIRED";
		}
	}, 1000);
}
	



