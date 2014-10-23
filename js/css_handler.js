var re_locate = function(){
	$(".btn#responsive-menu").css("margin-top",$(".upside-header").height()*.26);
	$(".page-tittle").css("margin-top",$(".upside-header").height()*.40);
	if($(window).width()<600){
		$(".page-tittle").css("margin-top",$(".upside-header").height()*.3);
		$(".page-tittle").css("font-size",15);
	}else{
		$(".page-tittle").css("font-size",34);
		$(".page-tittle").css("margin-top",$(".upside-header").height()*.40);
	}
}

jQuery(window).load(function(){
	re_locate();
});

$(window).resize(function(){
	re_locate();
});
