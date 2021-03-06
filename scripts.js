$(document).ready(function(){

	//Underline current topic
	$("li[class^='activetoggle']").click(function(){
		$(this).siblings().removeClass('active')
		$(this).toggleClass('active');
	});

	var d = document.getElementById("RANDO");
	var f = document.getElementById("topiclist");

	$('#TOPICOFF').click(function() {
		f.className += " hide";
		d.className = "";
	});

	$('#TOPICON').click(function() {
		d.className += " hide";
		f.className = "";
	});


	//Scroll through topic list
	x = 0, numToShow = 1, numToIncrement = 1;
	var $lis = $('#topics').find('li');
	$lis.slice(x, x + numToShow).show();
	$('#NEXT, #PREVIOUS').click(function() {
		x += 1 + $(this).is('#PREVIOUS') * -2;
		x = Math.min(Math.max(x, 0), $lis.length - numToShow);
		$lis.fadeOut(500).slice(x, x + numToShow).fadeIn(1200);
	});
});