$(document).ready(function() {
	$(".PageBody").ready(function() {
		var bgVideo = new $.BigVideo();
		bgVideo.init();
		bgVideo.show([
	        { type: "video/mp4",  src: "bgvideo/lulu.mp4" },
	        { type: "video/webm", src: "bgvideo/lulu.webm" },
	        { type: "video/ogg",  src: "bgvideo/lulu.ogv" }
	    ]);
	});
});