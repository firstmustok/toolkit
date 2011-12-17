(function (win, doc){
	var weibo = {
		init: function(){
			var div='from<input type="text" value="1" size="2" id="del-from"></input>to<input type="text" value="2" size="2" id="del-to"></input>\
                     <input type="button" value="OK" id="weibo-del-msg-ok" onclick="weibo.delmsg()"></input>';
			var app = doc.createElement('div');
			with ( app.style ) {
				position = 'fixed';
				top = '10px';
				right = '10px';
				zIndex = '9999999';
				background = '#73797C'
			}
			app.className = 'weiboClass';
			app.innerHTML = div;
			try{
				document.body.appendChild(app);
			} catch(e){
				alert(e);
			}
		},
		get : function(type, attr, val){
			var tmp, t = document.getElementsByTagName(type);
			for(var i in t){
				if(t[i].getAttribute){
					tmp = t[i].getAttribute(attr);
					if(tmp != null && tmp == val){
						return t[i];
					}
				}
			}
		},
		deleteMessage : function(){
			var delBtn, cfmBtn, attr;
			//click batch delete
			delBtn = this.get("div", "action-type", 'delMessageList');
			this.clickEvent(delBtn);

			//selet all
			var msg=document.getElementsByTagName("input");
			for(var v in msg)
				if( msg[v].type == 'checkbox')
					msg[v].checked = true;

			//click confirm button
			cfmBtn = this.get('div', 'action-type', 'handleOk');
			this.clickEvent( cfnBtn );
			alert("Delete Message Success!");
		},
		deleteMessageList : function(f, t){
			for(var i=f; i<t; i++){
				deleteMessage();
			}
		},
		clickEvent : function (el) {
            if (document.createEvent)
            {
                var evObj = document.createEvent('MouseEvents');
                evObj.initEvent( 'click', true, false );
                el.dispatchEvent(evObj);
				// el.click();
            } else if (document.createEventObject){
                el.fireEvent('onclick')
            }
		},
		delmsg : function(){
			this.deleteMessage();
		}
	};
	weibo.init();
	win.weibo = weibo;
})(window, document);
