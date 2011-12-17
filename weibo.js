(function (win, doc){
	var weibo = {
		init: function(){
			var jq = doc.createElement('script');
			jq.type = 'text/javascript';
			if( doc ) {
				//doc.body.appendChild(jq);
				doc.body.appendChild(jq);
				jq.src = 'http://code.jquery.com/jquery-1.7.1.min.js';
				// jq.src = '/home/wallace-young/Code/JS/jquery-1.7.1.min.js';
				alert("init sucess!!");
			} else {
				alert("I am so sorry, i can not help you. \n init failure!!");
			}
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
	alert(jQuery);
})(window, document);
