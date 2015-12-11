/*
2012, nikenou frontend Library v1.0dev

build time: July 04 11:16
*/

/**
 * @create: ouli
 * @fadeSlider	图片滑动播放插件
 * @调用方式	
   $.fn.fadeSlider({
		controlsShow: true, //是否显示数字导航
		speed: 800, //滑动速度
		auto: true, //是否自定滑动
		pause: 2000, //两次滑动暂停时间持
		height: 0, //容器高度，不设置自动获取图片高度
		width: 0//容器宽度，不设置自动获取图片宽度
   })
 */
$.fn.fadeSlider=function(options){var defaults={controlsShow:true,effect:1,speed:800,auto:true,pause:2000,height:0,width:0};var options=$.extend({},defaults,options);this.each(function(){var obj=$(this);var curr=1;var $img=obj.find("li");var s=$img.length;var w=$img.eq(0).outerWidth();var h=$img.eq(0).outerHeight();var $flashelement=$("ul",obj);options.height==0?obj.height(h):obj.height(options.height);options.width==0?obj.width(w):obj.width(options.width);obj.css("overflow","hidden");obj.css("position","relative");if(options.effect==1){$("li",obj).css("display","none")}else{if(options.effect==2){$("li",obj).css({"float":"left","width":w});$flashelement.css("width",s*w)}}if(options.controlsShow){var navbtnhtml='<div class="slider_navNum">';for(var i=0;i<s;i++){navbtnhtml+="<span>"+(i+1)+"</span>"}navbtnhtml+="</div>";obj.append(navbtnhtml);obj.find(".slider_navNum span").hover(function(){var num=Number($(this).html());flash(num,true,options.effect)},function(){timeout=setTimeout(function(){flash((curr/1+1),false,options.effect)},options.pause)})}function setcurrnum(index){obj.find(".slider_navNum span").eq(index).addClass("on").siblings().removeClass("on")}function flash(index,clicked,effect){$flashelement.stop();var next=index==s?1:index+1;curr=next-1;setcurrnum((index-1));switch(effect){case 1:$("li",obj).css("display","none");$("li",obj).eq(index-1).fadeTo(options.speed,1);$("li",obj).eq(index-1).find("h3").css("display","block");break;case 2:p=((index-1)*w*-1);$flashelement.animate({marginLeft:p},options.speed)}if(clicked){clearTimeout(timeout)}if(options.auto&&!clicked){timeout=setTimeout(function(){flash(next,false,options.effect)},options.speed+options.pause)}}var timeout;setcurrnum(0);if(options.effect==1){$("li",obj).eq(0).css("display","block");$("li",obj).eq(0).find("h3").css("display","block")}if(options.auto){timeout=setTimeout(function(){flash(2,false,options.effect)},options.pause)}})};