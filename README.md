# DropSearch
模糊搜索下拉选择插件（pc端，依赖jquery）

基本效果如下（实现了鼠标选择，键盘上下和回车键选择）:
![DropSearch](/dropsearch.gif)

##如何使用

    <link rel="stylesheet" type="text/css" href="dropsearch.css">
    <script src="http://cdnjs.w3cbus.com/jquery/2.0.0/jquery.min.js"></script>
	<script src="dropsearch.js"></script>

##注意

 - css样式可根据自己情况设置
 - 渲染列表中的list，请根据后台给的接口自己调整，具体在dropsearch.js中的getNameList()函数中ajax的succes回调中（这里有点坑QAQ）



##快速上手

    DropSearch.init({
				selector:"seletor",
				url: URL,
				inputParam:"name"
			});
			


##参数说明

###selector [string]
input的选择器（单个）


###url [string]
请求的url地址

###inputParam [string]
请求的url地址中input的值为值，inputParam为键（如?inputParam=input）

###otherParams(可选) [obj]
请求的url地址中其他参数，如：{otherParams1:otherParamsValue1,otherParams2:otherParamsValue2}

###clickHandler(回调，可选) [function(data)]
点击或回车下拉选项时的回调函数，参数data为点击项的值














