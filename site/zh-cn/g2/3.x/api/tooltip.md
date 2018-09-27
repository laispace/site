<!--
index: 10
title: Tooltip
-->

# Tooltip

## 介绍

提示信息(tooltip)，是指当鼠标悬停在图表上时，以信息框的形式展示相应的数据，如数据的标题、字段、数值等信息。

### 使用配置项配置tooltip
#### chart.tooltip(tooltipConfig)
(tooltipConfig: object)
```js
chart.tooltip(true, {
  showTitle: false,
  inPlot: false
});
```

### tooltip的渲染方式
目前tooltip支持html和canvas两种渲染方式。html渲染支持更加灵活的自定义配置，适合较为复杂的、对交互行为和内容定制要求比较高的可视化场景。canvas渲染使用G2默认配置，适合基础可视化场景，如果希望生成包含tooltip的图片，也推荐使用canvas进行渲染。
通过下面的配置项选择渲染模式：
```js
chart.tooltip(
  {
    useHtml:true / false
   }
);
```

### 关闭tooltip功能
#### chart.tooltip(false)

## 属性

### 通用属性
1. `useHtml`:string

是否使用html渲染，默认为true, false时使用canvas渲染

2. `type`:string

`default` | `mini`

tooltip类型，`mini`则启用只显示单个数据值的`miniTooltip`。 

3. `triggerOn` :boolean

tooltip 的触发方式，可配置的值为：`mousemove`、`click`、`none`，默认为`mousemove`。
* `mousemove`: 鼠标移动触发；
* `click`: 鼠标点击出发；
* `none`: 不触发 tooltip，用户通过`chart.showTooltip()` 和 `chart.hideTooltip()` 来控制 tooltip 的显示和隐藏。

4. `inPlot`:boolean

设置是否将 tooltip 限定在绘图区域内，默认为 true，即限定在绘图区域内。

5. `position`:string

该属性设置之后，就会在固定位置展示 tooltip，可设置的值为：`left`、`right`、`top`、`bottom`。

6. `showTitle`:boolean

是否展示提示信息的标题，默认为 true，即展示，通过设置为 false 来隐藏标题。

7. `title`:string

设置 tooltip 的标题展示的数据字段，设置该字段后，该标题即会展示该字段对应的数值。`showTitle` 为false 时，该设置不生效。

8. `shared`:boolean

设置 tooltip 是否只展示单条数据。

9. `follow`:boolean

设置 tooltip 是否跟随鼠标移动。默认为 true，即跟随。

10. `offset`:number

设置 tooltip 距离鼠标的偏移量。

11. `enterable`:boolean

用于控制是否允许鼠标进入 tooltip，默认为 false，即不允许进入。

### 辅助元素属性
1. `crosshairs`

crosshairs是一个对象类型，用于设置 tooltip 的辅助线或者辅助框。  

G2默认为`line`, `area`, `path`, `areaStack`类型的几何图形开启了垂直辅助线，为`interval`类型的几何图形开启了矩形背景辅助框，如下图所示：

tooltip垂注辅助线应用于多条曲线图表 |  tooltip矩形背景辅助框应用于柱状图
---- | ----
<img src="https://cdn.nlark.com/lark/0/2018/png/101986/1537947058148-d5e187af-1523-4808-a82d-ee5a41726270.png" style="width:100%"> | <img src="https://cdn.nlark.com/lark/0/2018/png/101986/1537947203936-25bc6501-c2e0-4681-9884-5d178e970a9d.png" style="width:100%"> 

crosshairs支持的配置如下：
* `type`:string

`rect` | `x` | `y` | `cross`

`rect` 表示矩形框，`x` 表示水平辅助线，`y` 表示垂直辅助线，`cross` 表示十字辅助线。

* `style`:object

用于控制crosshairs的显示样式，更详细见 [绘图属性](graphic.html)

crosshairs完整用法：
```js
chart.tooltip({
   crosshairs: {
     type: 'rect' | 'x' | 'y' | 'cross',
     style: {
       // 图形样式
       fill: {string}, // 填充的颜色
       stroke: {string}, // 边框的颜色
       strokeOpacity: {number}, // 边框颜色的透明度，数值为 0 - 1 范围
       fillOpacity: {number}, // 填充的颜色透明度，数值为 0 - 1 范围
       lineWidth: {number}, // 边框的粗细
       lineDash: {number} | {array} // 线的虚线样式
     }
   }
});
```
2. `markerGroup`

对于 `line`、`area`、`path` 这三种几何图形，G2在渲染 tooltip 时会自动渲染tooltipMarker<img src="https://gw.alipayobjects.com/zos/rmsportal/BlTPaZMgrTjZINmXExtm.png" style="width: 20px;">

* `hideMarkers`:boolean

设置为true时关闭markerGroup的显示。

### htmlTooltip属性

`htmlTooltip`是G2 tooltip的默认形式，通过设置配置项useHtml:true也可以切换为`htmlTooltip`，以下配置项只有在`useHtml`为true的时候才能生效。

htmlTooltip的构成形式分为三种：**default**，即G2的默认形式;  **模板方法**，用户指定tooltip渲染的模板； **完全自定义方法**，用户完全掌控tooltip的构成形式。灵活性由低到高。

1. `htmlContent`:function

`htmlContent`支持用户获取当前tooltip取值，并完全自定义tooltip，用户可以根据htmlContent方法返回的title和items两个参数定义tooltip dom节点的构成和显示方式。 

用法：
```js
chart.tooltip(
   { 
     useHtml:true, 
     htmlContent:function(title,items){
        return '<div><ul><li>.....</li></ul></div>'
     }
   }
);
```

2. `containerTpl`:string

用于指定图例容器的模板，如默认结构不满足需求，可以自定义该模板，但是自定义模板时必须包含各个 dom 节点的 class，样式可以自定义。

默认值如下：
```js
containerTpl: '<div class="g2-tooltip">'
  + '<div class="g2-tooltip-title" style="margin-bottom: 4px;"></div>'
  + '<ul class="g2-tooltip-list"></ul>'
  + '</div>',
```

3. `itemTpl`:string

tooltip 每项记录的默认模板,如默认结构不满足需求，可以自定义该模板，但是自定义模板时必须包含各个 dom 节点的 class，样式可以自定义。

默认值如下：
```js
itemTpl: '<li data-index={index}>'
  + '<span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>'
  + '{name}<span class="g2-tooltip-value">{value}</span>'
  + '</li>'
```

4. `g2-tooltip`:object

设置 tooltip 容器的 CSS 样式。

5. `g2-tooltip-title`:object

设置 tooltip 标题的 CSS 样式。

6. `g2-tooltip-list`:object

设置 tooltip 列表容器的 CSS 样式。

7. `g2-tooltip-list-item`:object

设置 tooltip 列表容器中每一项的 CSS 样式。

8. `g2-tooltip-marker`:object

设置tooltip 列表容器中每一项 marker 的 CSS 样式。

9. `g2-tooltip-value`:object

设置tooltip 列表容器中每一项 value 的 CSS 样式。

10. `enterable`:boolean

用于控制是否允许鼠标进入 tooltip，默认为 false，即不允许进入。

### canvasTooltip属性

通过设置配置项useHtml:false可以切换为canvasTooltip，以下配置项只有在useHtml为false的时候才能生效。

1. `boardStyle`:object

用于控制tooltip背景板的显示样式，更详细见 [绘图属性](graphic.html)  

2. `titleStyle`:object 

用于控制tooltip标题的显示样式，更详细见 [绘图属性](graphic.html) 

3. `nameStyle`:object 

用于控制tooltip每一项 name 的显示样式，更详细见 [绘图属性](graphic.html)

4. `vaueStyle`:object

用于控制tooltip每一项 value 的显示样式，更详细见 [绘图属性](graphic.html) 

5. `itemGap`:number

用于设定tooltip每一项之间的间距

### miniTooltip属性

mini tooltip是一种极简的tooltip形式，只显示单个数据的数值。通过设置配置项type:mini切换为miniTooltip，以下配置项只有在type为'mini'的时候才能生效。

1. `boardStyle`:object

用于控制tooltip背景板的显示样式，更详细见 [绘图属性](graphic.html)      
      
2. `valueStyle`:object

用于控制tooltip数值value 的显示样式，更详细见 [绘图属性](graphic.html)  

3. `triangleWidth`:number

设定tooltip三角形装饰的宽度

4. `triangleHeight`:number

设定tooltip三角形装饰的宽度


## tooltip属性脑图
<img src="https://cdn.nlark.com/lark/0/2018/png/101986/1537956588552-32c0a0a8-1026-4df0-a258-f544934b616f.png" style="width:60%">
