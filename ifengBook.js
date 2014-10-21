var bookText = ""
var chapters = {}

var id = 0;

var initParam = {"c":7342116, "b":62897, "t":7342116};
var bookurl = "http://v.book.ifeng.com/remc.htm";

var appendBook = function(txt) {bookText += txt;}

var getTitle = function(id, content, url) {
  $.get(url, function(html){
    title=$("div  [ds=doc-title]", $(html)).html(); 
    //console.log(title)
    chapters[id] = {"title": title, "content": content}
  });
}

var printBook1 = function(obj) {
  var keys = [];
  for(var k in obj) keys.push(k);
  keys = keys.sort();
  var book = "";
  for(var i=0; i<keys.length; i++) {
     book += "------------" + obj[keys[i]]["title"] + "-------------<br/>"
     book += obj[keys[i]]["content"];
  }

  bookText = book; 
  document.write(bookText)
}

var printBook = function(obj) {
  var keys = [];
  var book = "";
  for(var k in obj) {
     book += "------------" + obj[k]["title"] + "-------------<br/>"
     book += obj[k]["content"];
  }

  bookText = book; 
  document.write(bookText)
}

var appendBookNext = function(data) {
   txt = data.content;
   
   param = {}
   param["b"] = initParam["b"];
   param["c"] = data.next;

   //get title
   num = initParam["t"];
   initParam["t"] = data.next;
   page = "http://v.book.ifeng.com/book/ts/" + initParam["b"] + "/" + num + ".htm";
   getTitle(id++, txt, page) 

   console.log(param)

   if(data.next) {
     $.post(bookurl, param, appendBookNext);
   } else {
     printBook(chapters);
   }
}

$.post(bookurl, initParam, appendBookNext)