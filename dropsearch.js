(function($){
	
	var DropSearch = function (options) {
		var self = this;
		this.inputField = $(options.selector);
		this.searchUrl = options.url;
		this.inputParam = options.inputParam;
		this.otherParams = options.otherParams;
		this.oUl = $("<ul class='drop-list'></ul>");
		this.index = -1;
		this.ajaxType = options.ajaxType || "post";
		this.options = options;
		
		this.inputField.on("keyup click",function(e){
			var e = e || window.event;
			e.stopPropagation();
			
			if ( e.type == "click") {
				self.renderList(self.getNameList());
			} else{
				if ( e.keyCode == 40 && self.oUl.children().length > 0) {
					self.doMove(1);
				}else if ( e.keyCode == 38 && self.oUl.children().length > 0){
					self.doMove(-1);
				}else if ( e.keyCode == 13 && self.oUl.children().length > 0 && self.oUl.children().hasClass("active")){
					self.doInput(self.oUl.children().filter("[class='active']").html());
				}else {
					self.renderList(self.getNameList());
				}
			}
			
		});
		
		
		this.oUl.on("click",function(e){
			var e = e || window.event;
			e.stopPropagation();
			if ( e.target.nodeName === "LI") {
				self.doInput(e.target.innerHTML)
			}
		});
		
		$(document).on("click",function(){
			self.oUl.empty();
		});
	}
	
	DropSearch.prototype.getNameList = function () {
		var self = this,
			list = [],
			param = [];
		param.push(this.inputParam + "=" + this.inputField.val());
		if ( this.otherParams) {
			for (var item in this.otherParams) {
				param.push( item + "=" + this.otherParams[item]);
			}
		}
		$.ajax({
			type: self.ajaxType,
			url: self.searchUrl,
			data: param.join("&"),
			async: false,
			success: function (data){
				$.each(data.books, function(i,item) {
					list.push(item.publisher);
				});
			}
		});
		return list;
	}
 	
 	DropSearch.prototype.renderList = function (list) {
 		this.index = -1;
 		var self = this,
 			html = [];
 		self.oUl.empty();
 		$.each(list, function(i) {
 			html += "<li>"+list[i]+"</li>";
 		});
 		self.oUl.append(html);
 		self.inputField.parent().append(self.oUl).css("position","relative");
 		self.oUl.css({
 			top: self.inputField.outerHeight()+2,
 			left: self.inputField.get(0).offsetLeft,
 			width: self.inputField.outerWidth()
 		});
 	}
 	
 	DropSearch.prototype.doMove = function (count) {
 		var aLi = this.oUl.children();
 		this.index = this.index + count;
 		if ( this.index > aLi.length - 1) {
 			this.index = 0;
 		} else if ( this.index < 0){
 			this.index = aLi.length -1;
 		}
 		aLi.removeClass("active").eq(this.index).addClass("active");
 	}
 	
 	DropSearch.prototype.doInput = function (data){
 		this.inputField.val(data);
		this.oUl.empty();
		if ( this.options.clickHandler) {
			this.options.clickHandler(data);
		}
 	}
 	
	DropSearch.init = function(options){
		new this(options);
	};
	
	window["DropSearch"] = DropSearch;
})(jQuery);