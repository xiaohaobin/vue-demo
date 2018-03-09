jQuery.fn.carousel = function(speed,time){
	//this,指的是当前对象
			var s = 0;//
			var timer;
			var d = 'right';
			var $li = $(this);//变量三，轮播元素
			
			function lunbo(){
				$li.hide(1000);
					if(d=='right'){
						s+=1;						
						if(s>(speed-1)){//变量一，数字有可能是5，也有可能是3
							s=0;
						}
						$li.eq(s).show(1000);
					}
					
					if(d=='left'){
						s+=(-1);
						if(s<0){
							s=speed-1;//变量一，数字有可能是5，也有可能是3
						}
						$li.eq(s).show(1000);
					}
//				
					
				
			}			
			if(!$li.is(":animated")){
				timer = setInterval(lunbo,time);//变量二，时间可调控
			}
			
			//鼠标移动到轮播box的时候，停止轮播，移出的时候，就启动轮播
			$(".lunboBox").hover(
				function(){
				clearInterval(timer);
				},
				function(){
				timer = setInterval(lunbo,time);//变量二，时间可调控
				}
			)
			//按键控制方向
			$(".left").click(function(){
				d = "left";
			});
			$(".right").click(function(){
				d = "right";
			});
			
}
