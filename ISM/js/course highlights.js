$(document).ready(function(){
	$("#subvideo1link").click(function(event){
		event.stopPropagation();
		$("#video").html('<embed src="http://player.youku.com/player.php/sid/XNjQ0NTc2NDMy/v.swf&isAutoPlay=true" width="650" height="480" type="application/x-shockwave-flash" allowfullscreen="true" wmode="transparent"></embed>');
		return false;
	});
	$("#subvideo2link").click(function(event){
		event.stopPropagation();
		$("#video").html('<embed src="http://player.youku.com/player.php/sid/XNjQ0NTc0Nzk2/v.swf&isAutoPlay=true" width="650" height="480" type="application/x-shockwave-flash" allowfullscreen="true" wmode="transparent"></embed>');
		return false;
	});
	$("#subvideo3link").click(function(event){
		event.stopPropagation();
		$("#video").html('<embed src="http://player.youku.com/player.php/sid/XNjQ0NTcyNDg0/v.swf&isAutoPlay=true" width="650" height="480" type="application/x-shockwave-flash" allowfullscreen="true" wmode="transparent"></embed>');
		return false;
	});
});
