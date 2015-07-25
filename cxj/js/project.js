// JavaScript Document

//向下滚动和left高度持平的时候开始fixed，fixed的右边距根据浏览器尺寸计算，滚回取消fixed。
// $(function(){
// 	var h1 = $('#content-left').offset().top; //
// //	var h2 = $('#foot').offset().top - window.screen.availHeight + 70;
// 	var w,w_ctn,w_right,right_margin,wVal,rVal;
	
// 	$(window).scroll(function(){
// 		//自动计算边距
// 		//lg container 1024px; md container 970px;
// 		w=document.body.clientWidth;
// 		if (w>=1200) {
// 			w_ctn = 1024;
// 		}
// 		else {w_ctn = 970;}
// 		//右侧导航的宽度（padding不变，不用考虑）
// 		w_right=(w_ctn-60)*0.25;
// 		wVal=w_right.toString() + "px";
// 		//右侧导航固定后的右边距 = container右侧 + 30px的padding-right
// 		right_margin=(w-w_ctn)/2 + 30;
// 		rVal=right_margin.toString() + "px";
// 		if($(window).scrollTop() >h1){  //&& $(window).scrollTop() <h2
// 			$('#content-right').addClass('fixed');
// 			document.getElementById("content-right").style.width=wVal;
// 			document.getElementById("content-right").style.right=rVal;
// 		}
// 		else{
// 			$('#content-right').removeClass('fixed');
// 			document.getElementById("content-right").style.right="0";
// 		}
// 	});
// })
  
//hover自动展开当前，缩小其他
$(document).ready(function(){
	if (currentClass === "a")
	{
		$("#tech").addClass("current-class");
		$("#design-item").hide();
		$("#idea-item").hide();
		$("#hobby-item").hide();
	}
	else if (currentClass === "b")
	{
		$("#design").addClass("current-class");
		$("#tech-item").hide();
		$("#idea-item").hide();
		$("#hobby-item").hide();
	}
	else if (currentClass === "c")
	{
		$("#idea").addClass("current-class");
		$("#tech-item").hide();
		$("#design-item").hide();
		$("#hobby-item").hide();
	}

	$("#tech").hover(function() {
		$("#tech-item").show("slow");
		$("#design-item").hide("slow");
		$("#idea-item").hide("slow");
		$("#hobby-item").hide("slow");
	});
	$("#design").hover(function() {
		$("#tech-item").hide("slow");
		$("#design-item").show("slow");
		$("#idea-item").hide("slow");
		$("#hobby-item").hide("slow");		
	});
	$("#idea").hover(function() {
		$("#tech-item").hide("slow");
		$("#design-item").hide("slow");
		$("#idea-item").show("slow");
		$("#hobby-item").hide("slow");
	});
	$("#hobby").hover(function() {
		$("#tech-item").hide("slow");
		$("#design-item").hide("slow");
		$("#idea-item").hide("slow");
		$("#hobby-item").show("slow");
	});
});