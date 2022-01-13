//universal time zone code.
function update_timer() {
	const time = new Date();
	const hours = time.getHours();
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	document.getElementById("get_hour").innerHTML = hours;
	document.getElementById("get_min").innerHTML = minutes;
	document.getElementById("get_sec").innerHTML = seconds;
	const am_pm = document.getElementById("am_pm");
	if(hours > 11) {
		am_pm.innerHTML = "PM";
	}
}
setInterval(update_timer, 1000);

//Time change with image code. 
function set_wakeup_time() {
	 a = document.getElementById("set_wakeup_time").value;
	console.log(a);
	var h = time = new Date();
	var hours = time.getHours() % 12;
	if(a % 12 == hours) {
		document.getElementById("images").style.backgroundImage = "url('./images/sunrise_image.jpeg')";
	}
	var b = document.getElementById("set_lunch_time").value;
	console.log(b);
	if(b % 12 == hours) {
		document.getElementById("images").style.backgroundImage = "url('./images/lunch_image.jpeg')";
	}
	var c = document.getElementById("set_nap_time").value;
	if(c % 12 == hours) {
		document.getElementById("images").style.backgroundImage = "url('./images/good_night.jpeg')";
	}


//print the time code.

	var set_time = $("#set_wakeup_time option:selected").text();
	var p1 = document.getElementById("wake_id");
	if(set_time != "Default" && set_time != "") { 
		p1.innerHTML = set_time;
	} else {
		p1.innerHTML = "";
	}
	var lunch_time = $("#set_lunch_time option:selected").text();
	var p2 = document.getElementById("lunch_id");
	if(lunch_time != "Default" && lunch_time != "") {
		p2.innerHTML = lunch_time;
	} else {
		p2.innerHTML = "";
	}
	var nap_time = $("#set_nap_time option:selected").text();
	var p3 = document.getElementById("nap_id");
	if(nap_time != "Default" && nap_time != "") {
		p3.innerHTML = nap_time;
	} else {
		p3.innerHTML = "";
	}
}