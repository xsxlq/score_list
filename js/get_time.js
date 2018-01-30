function showTime(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var h = hours;
	if(h>12){
		h = "PM"
		hours -= 12;
	}
	else{
		h = "AM"
	}
	if(minutes<10){
		var time = `${h} ${hours}:0${minutes}:${seconds}`;
	}
	else{
		var time = `${h} ${hours}:${minutes}:${seconds}`
	}
	document.getElementById("get_time").innerHTML = time;
}
setInterval("showTime(),1000");
