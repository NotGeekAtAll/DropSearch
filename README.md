# DropSearch

模糊搜索下拉选择插件（pc 端，依赖 jquery）

[demo 地址](http://notgeekatall.github.io/demos/dropsearch/)，基本效果如下（实现了鼠标选择，键盘上下和回车键选择），做了防抖处理，以及中文输入问题的优化:
![DropSearch](/dropsearch.gif)

## 如何使用

    <link rel="stylesheet" type="text/css" href="dropsearch.css">
    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
    <script src="dropsearch.js"></script>

## 注意

- css 样式可根据自己情况设置

## 快速上手

    var ds = DropSearch.init({
        selector: ".dropsearch",
        debounceTime: 500,
        <!-- 点击列表事件 -->
        clickHandler: function(data) {
            alert(data);
        },
        <!-- 获取输入的值 -->
        onInput (value) {

          <!-- 模拟ajax请求 -->
          setTimeout(function () {

            <!-- 调用实例上的renderList方法渲染列表 -->
            ds.renderList(generateList(value))
          }, 1000)
        }
    });

## 配置项说明

### selector(必填) [String]

input 的选择器,如('#dropsearch')

### debounceTime(可选) [Number]

输入时防抖的消除 setTimeout 的时间，默认为 300ms

### clickHandler(回调，可选) [function(data)]

点击或回车下拉选项时的回调函数，回调参数 data 为点击项的值

### onInput(回调，可选) [function(value)]

输入框输入后的回调，回调参数为 input 的值

### 静态方法
DropSearch.init
`var ds = DropSearch.init(options)`

返回DropSearch实例
### 实例方法
renderList 渲染列表
`ds.renderList`