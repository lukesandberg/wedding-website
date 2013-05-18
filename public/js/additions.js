function daysToGo() {
	var daysLeft = Math.round((1373754600000 - new Date().getTime()) / (1000*60*60*24));
	if (daysLeft < 0) {
		return "";
	}
	if (daysLeft == 0 || daysLeft == 1) {
		return "The Wedding is Soon!";
	}
	return daysLeft + " days to go!";
}


$(".countdown").text(daysToGo())

