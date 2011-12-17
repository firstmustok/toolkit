//javascript:var s=document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='http%3a%2f%2fcode.jquery.com%2fjquery-1.7.1.min.js';alert("dfasdfasdf");
//javascript:var s=document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='file%3a%2f%2fhome%2fwallace-young%2fCode%2fJS%2fjquery-1.7.1.min.js';alert('xxxx');void(0);
//javascript:var s=document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='/home/wallace-young/Code/JS/weibo.js';alert('xxxx');void(0);
//javascript:var s=document.createElement('script');s.type='text/javascript';document.body.appendChild(s);s.src='http://erkie.github.com/asteroids.min.js'; App.followOne('1473612611',this); void(0);
//----------------------------  webo.js  ----------------------------------------
(function (win, doc){
	var weibo = {
		init: function(){
			// var jq = doc.createElement('script');
			// jq.type = 'text/javascript';
			// if( doc ) {
			// 	//doc.body.appendChild(jq);
			// 	doc.body.appendChild(jq);
			// 	jq.src = '/home/wallace-young/Code/JS/jquery-1.7.1.min.js';
			// 	//jq.src = 'http://code.jquery.com/jquery-1.7.1.min.js';
				alert("init sucess!!");
			// } else {
			// 	alert("I am so sorry, i can not help you. \n init failure!!");
			// }
		},
		hack : function(){
			// var weibocontent = $("#pl_content_publisherTop.send_weibo_current.input.top_border.bottom_border textarea").val();
			// var sendBtn = $("#pl_content_publisherTop.btn");
			// alert(weibocontent);
			// alert(sentBtn);
		}
	};
	weibo.init();
	doc.weiboxx = weibo;
})(window, document);
