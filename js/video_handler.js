var video = {
	css : {
		show_video:function(id){
			$('.cover-v').show();
			$('#video'+id).addClass('show-video');
			$('#cv'+id).addClass('show-video');
			$('.close-video').show().attr('id',''+id);
		},
		hide_video:function(){
			$('.cover-v').hide();
			$('.video').removeClass('show-video');
			$('.video_comment_cover').removeClass('show-video');
			$('.close-video').hide().removeAttr('id');
		}
	}
}
