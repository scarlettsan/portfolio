$(document).ready(function(){
	$("#aboutus").hover(function() {
		$("#aboutusList").show("fast");
	},function() {
		$("#aboutusList").hide("fast");	
	});
	$("#academics").hover(function() {
		$("#academicsList").show("fast");
	},function() {
		$("#academicsList").hide("fast");	
	});
	$("#admission").hover(function() {
		$("#admissionList").show("fast");
	},function() {
		$("#admissionList").hide("fast");	
	});
	$("#research").hover(function() {
		$("#researchList").show("fast");
	},function() {
		$("#researchList").hide("fast");	
	});
	$("#faculty").hover(function() {
		$("#facultyList").show("fast");
	},function() {
		$("#facultyList").hide("fast");	
	});
	$("#teacher").hover(function() {
		$("#teacherDes").slideDown("fast");
	},function() {
	$("#teacherDes").slideUp("fast");	
	});
	$("#student").hover(function() {
		$("#studentDes").slideDown("fast");
	},function() {
		$("#studentDes").slideUp("fast");	
	});
	$("#group").hover(function() {
		$("#groupDes").slideDown("fast");
	},function() {
		$("#groupDes").slideUp("fast");	
	});
});