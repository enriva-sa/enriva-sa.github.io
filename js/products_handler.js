var hidden = true;
var product = {
	show_details:function(id){
		if(hidden){
			this.hide_details();
			$('#prod'+id).show();
			hidden = false;
		}else{
			hidden = true;
			this.hide_details(id);
		}
	},
	hide_details:function(id){
		if(id===undefined){
			$('.hidden_comment').hide();
		}else{
			this.show_details(id);
		}
	}
}

var hid = true;

$('#pr-men').on('click',function(){
	if(hid){
		$('.sub-menu').show()
		hid = false;
	}else{
		$('.sub-menu').hide();
		hid = true;
	}
});
