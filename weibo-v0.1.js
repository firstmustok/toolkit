(function (win, doc){
	var weibo = {
		init: function(){
			var div='from<input type="text" value="1" size="2" id="del-from"></input>to<input type="text" value="2" size="2" id="del-to"></input>\
                     <a class="W_btn_b" onclick="weibo.delmsg();"><span>OK</span></a>\
                     <a class="W_btn_b" onclick="weibo.deleteAll();"><span>Delete All</span></a>';
			var app = doc.createElement('div');
			with ( app.style ) {
				position = 'fixed';
				top = '40px';
				right = '20px';
				zIndex = '9999999';
			}
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
			var delBtn, cfmBtn, attr, flag=false;
			//click batch delete
			delBtn = this.get("div", "action-type", 'delMessageList');
			
			this.clickEvent(delBtn);
			
			//selet all
			var msg=document.getElementsByTagName("input");
			for(var v in msg)
				if( msg[v].type == 'checkbox'){
					msg[v].checked = true;
					flag = true;
				}

			//click confirm button
			cfmBtn = this.get('span', 'action-type', 'handleOk');
			this.clickEvent( cfmBtn );
			if(flag == true){
				return false;
			} else {
				alert("Delete Message Success!");
				return true;
			}
		},
		deleteMessageList : function(f, t){
			var ret;
			for(var i=f; i<t; i++){
				ret = this.deleteMessage();
				if(!ret) break;
				this.sleep(2);//wait the page loading
			}
		},
		sleep : function(millis){
			var date = new Date();
			var curDate = null;
			do { curDate = new Date(); }
			while(curDate-date < millis*1000);
		},		
		clickEvent : function (el) {
			if(el == null)
				return;
            if (document.createEvent){
                var evObj = document.createEvent('MouseEvents');
                evObj.initEvent( 'click', true, false );
                el.dispatchEvent(evObj);
				// el.click();
            } else if (document.createEventObject){
                el.fireEvent('onclick')
            }
		},
		delmsg : function(){
			var from = document.getElementById('del-from').value,
			    to = document.getElementById('del-to').value,
			    max = this.getMaxPageNum();
			max = max<to?max:to;
			this.deleteMessageList(from, max);
		},
		getMaxPageNum : function(){
			var page = this.get('div', 'action-type', 'commentFilter'),
			    max = 0;
			for(var i in page.childNodes)
				if("A" == page.childNodes[i].tagName)
					max++;
			return max;
		},
		deleteAll : function(){
			var max = this.getMaxPageNum();
			this.deleteMessageList(1, max);
		}
	};
	weibo.init();
	win.weibo = weibo;
	//weibo.delmsg();
})(window, document);
