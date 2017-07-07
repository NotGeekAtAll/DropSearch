# DropSearch
模糊搜索下拉选择插件（pc端，依赖jquery）

[demo地址](http://notgeekatall.github.io/demos/dropsearch/)，基本效果如下（实现了鼠标选择，键盘上下和回车键选择），做了防抖处理，以及中文输入问题的优化:
![DropSearch](/dropsearch.gif)


## 如何使用

    <link rel="stylesheet" type="text/css" href="dropsearch.css">
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="dropsearch.js"></script>

## 注意

 - css样式可根据自己情况设置


## 快速上手

    DropSearch.init({
		selector:"#id",
		url: "URL",
		inputParam:"name",
		ajaxHandler: function(data, list) {
			$.each(data.data, function(i, item) {
				list.push(item.name);
			});
		}
	});
			


## 配置项说明

### selector(必填) [String]
input的选择器,如('#dropsearch')


### url(必填) [string]
请求的url地址


### debounceTime(可选) [Number]
输入时防抖的消除setTimeout的时间，默认为300ms


### ajaxType(可选) [String]
请求类型,默认为post


### inputParam(必填) [String]
请求的url地址中input的值为值，inputParam为键（如?inputParam=input）


### otherParams(可选) [Object]
请求的url地址中其他参数，如：{otherParams1:otherParamsValue1,otherParams2:otherParamsValue2}


### clickHandler(回调，可选) [function(data)]
点击或回车下拉选项时的回调函数，参数data为点击项的值


### ajaxHandler(回调，必填) [function(data,list)]
ajax请求接口成功的回调函数，data为请求的结果。list为下拉框填充的数据，因为接口返回的值得结构不一样，所以根据自己的情况来填充list(具体看示例)。














