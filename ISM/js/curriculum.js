// JavaScript Document
$(document).ready(function(){
	var courseLinkHit=new Array();
	for (var i=1;i<=10;i++){
		courseLinkHit[i] = 0;
	}
	$("#courseLink1").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[1] == 0) {
			courseLinkHit[1] = 1;
			$("#courseContent1").slideDown("fast");
			$("#courseLink1").attr("style","color:black")
		}
		else {
			courseLinkHit[1] = 0;
			$("#courseContent1").slideUp("fast");
			$("#courseLink1").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink2").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[2] == 0) {
			courseLinkHit[2] = 1;
			$("#courseContent2").slideDown("fast");
			$("#courseLink2").attr("style","color:black")
		}
		else {
			courseLinkHit[2] = 0;
			$("#courseContent2").slideUp("fast");
			$("#courseLink2").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink3").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[3] == 0) {
			courseLinkHit[3] = 1;
			$("#courseContent3").slideDown("fast");
			$("#courseLink3").attr("style","color:black")
		}
		else {
			courseLinkHit[3] = 0;
			$("#courseContent3").slideUp("fast");
			$("#courseLink3").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink4").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[4] == 0) {
			courseLinkHit[4] = 1;
			$("#courseContent4").slideDown("fast");
			$("#courseLink4").attr("style","color:black")
		}
		else {
			courseLinkHit[4] = 0;
			$("#courseContent4").slideUp("fast");
			$("#courseLink4").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink5").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[5] == 0) {
			courseLinkHit[5] = 1;
			$("#courseContent5").slideDown("fast");
			$("#courseLink5").attr("style","color:black")
		}
		else {
			courseLinkHit[5] = 0;
			$("#courseContent5").slideUp("fast");
			$("#courseLink5").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink6").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[6] == 0) {
			courseLinkHit[6] = 1;
			$("#courseContent6").slideDown("fast");
			$("#courseLink6").attr("style","color:black")
		}
		else {
			courseLinkHit[6] = 0;
			$("#courseContent6").slideUp("fast");
			$("#courseLink6").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink7").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[7] == 0) {
			courseLinkHit[7] = 1;
			$("#courseContent7").slideDown("fast");
			$("#courseLink7").attr("style","color:black")
		}
		else {
			courseLinkHit[7] = 0;
			$("#courseContent7").slideUp("fast");
			$("#courseLink7").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink8").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[8] == 0) {
			courseLinkHit[8] = 1;
			$("#courseContent8").slideDown("fast");
			$("#courseLink8").attr("style","color:black")
		}
		else {
			courseLinkHit[8] = 0;
			$("#courseContent8").slideUp("fast");
			$("#courseLink8").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink9").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[9] == 0) {
			courseLinkHit[9] = 1;
			$("#courseContent9").slideDown("fast");
			$("#courseLink9").attr("style","color:black")
		}
		else {
			courseLinkHit[9] = 0;
			$("#courseContent9").slideUp("fast");
			$("#courseLink9").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink10").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[10] == 0) {
			courseLinkHit[10] = 1;
			$("#courseContent10").slideDown("fast");
			$("#courseLink10").attr("style","color:black")
		}
		else {
			courseLinkHit[10] = 0;
			$("#courseContent10").slideUp("fast");
			$("#courseLink10").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink11").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[11] == 0) {
			courseLinkHit[11] = 1;
			$("#courseContent11").slideDown("fast");
			$("#courseLink11").attr("style","color:black")
		}
		else {
			courseLinkHit[11] = 0;
			$("#courseContent11").slideUp("fast");
			$("#courseLink11").attr("style","color:#808080")
		}
		return false;
	});
	$("#courseLink12").click(function(event){
		event.stopPropagation();
		if (courseLinkHit[12] == 0) {
			courseLinkHit[12] = 1;
			$("#courseContent12").slideDown("fast");
			$("#courseLink12").attr("style","color:black")
		}
		else {
			courseLinkHit[12] = 0;
			$("#courseContent12").slideUp("fast");
			$("#courseLink12").attr("style","color:#808080")
		}
		return false;
	});
});
