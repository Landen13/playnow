$(document).ready(function() {

	$(".discog tbody tr").each(function(i){
		var albumgroup = [];
		var m = $("#band_content");
		var album = encodeURIComponent($(this).find("td:first-child").text().replace(':', ''));
		var artist = encodeURIComponent($(m).find(".band_name").text().replace(':', ''));
		var btnbox = "now-playing_"+ makeid() + "-"+i;
		$(this).find("td:first-child").addClass(btnbox);
		albumgroup[0]=artist;
		albumgroup[1]=album;
		albumgroup[2]="."+btnbox;
		albumslist.push(albumgroup);
	}).promise().done( function(){ 
		countertotal = albumslist.length;
		getData();
	 } );

});	

