 
 $('.inputs').on('click',function(){
      $('.hidden').hide();
  })
 //课程
  $('#course').on('click',function(){
      $('.courses').show();
      $('.cover').show();
      $(this).next().attr('src','images/down.png');
  })
 	$(".courses ul li").bind('click',function(){
	   $('#course').val($(this).attr('title'));
		$('.courses').hide();
        $('.cover').hide();
		$(this).parent().parent().prev().attr('src','images/left.png');
	});
 //市级选择
  $('#city').on('click',function(){
      $('.citys').show();
      $('.cover').show();
      $(this).next().attr('src','images/down.png');
  })
 	$(".citys ul li").bind('click',function(){
	   $('#city').val($(this).attr('title'));
		$('.citys').hide();
        $('.cover').hide();
		$(this).parent().parent().prev().attr('src','images/left.png');
	});
 //区/县选择
  $('#area').on('click',function(){
      $('.areas').show();
      $('.cover').show();
      $(this).next().attr('src','images/down.png');
  })
 	$(".areas ul li").bind('click',function(){
	   $('#area').val($(this).attr('title'));
		$('.areas').hide();
        $('.cover').hide();
		$(this).parent().parent().prev().attr('src','images/left.png');
	});
 //上课地点选择
  $('#location').on('click',function(){
      $('.locations').show();
      $('.cover').show();
      $(this).next().attr('src','images/down.png');
  })
 	$(".locations ul li").bind('click',function(){
	   $('#location').val($(this).attr('title'));
		$('.locations').hide();
        $('.cover').hide();
		$(this).parent().parent().prev().attr('src','images/left.png');
	});
 //上课时间选择
  $('#time').on('click',function(){
      $('.times').show();
      $('.cover').show();
      $(this).next().attr('src','images/down.png');
  })
 	$(".times ul li").bind('click',function(){
	   $('#time').val($(this).attr('title'));
		$('.times').hide();
        $('.cover').hide();
		$(this).parent().parent().prev().attr('src','images/left.png');
	});


$('.cover').on('click',function(){
     $('.hidden').hide();
     $('.cover').hide();
     $('.dowm_left').attr('src','images/left.png');
  })


$('.reservation').on('click',function(){
      var sex=$(" #sex").val();
      var age=$(" #age").val();
      var marriage=$(" #marriage").val();
      var education=$(" #education").val();
      var career=$(" #profession").val();
      var income=$(" #income").val();
      var is_sh=$(" #account").val();
      var area=$(" #address").val();
      var jccd=$(" #level").val();
      

	 if (sex&&age&&marriage&&education&&career&&income&&is_sh&&area&&jccd) {
         
           // var oneInfo = {sex,age,marriage,education,career,income,is_sh,area,jccd}
           // localStorage.setItem('oneInfo',JSON.stringify(oneInfo))
           
               $('section').hide();
      	       $('nav').show();
           
	 }else{
	 	 Toast( '请填写完整信息');
	 }
  })



function Toast(msg,duration){
      duration=isNaN(duration)?2000:duration;
      var m = document.createElement('div');
      m.innerHTML = msg;
      m.style.cssText="max-width:60%;min-width: 150px;padding:0 14px;height: 40px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
      document.body.appendChild(m);
      setTimeout(function() {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function() { document.body.removeChild(m) }, d * 1000);
      }, duration);
    }