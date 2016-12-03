$(function(){
	$('.idxNavBtn').click(function(){
		$('.mask').show();
		
	});
	$('.mask li').click(function(){
		$('.mask').hide();
	});
	
	$('.maskVideoBg').click(function(){
		$('.maskVideo').hide();
		$('.MP4')[0].play();
	});
	$('.MP4').click(function(){
		$('.MP4')[0].pause();
		$('.maskVideo').show();
	});	
	//锚点

	//产品轮播图
    $('#nav .navList').click(function(e){
    	var iNow=$(this).index();
    	$('#nav .navList').removeClass('cur');
    	$('#nav .navList')[iNow].className='navList cur';
    	swiper.slideTo(iNow, 1000, false);
    	e.preventDefault();
    });
    
   
})
// 