<!--
template: home
title: G2 基础图表类库
keywords:
  - G2
  - The Grammar of Graphics
  - 图形语法
description: G2 是一套基于可视化编码的图形语法，以数据驱动，具有高度的易用性和扩展性，用户无需关注各种繁琐的实现细节，一条语句即可构建出各种各样的可交互的统计图表。
featuresCards:
  - img: ${assets}/image/home/features-simple.svg
    title: 千变万化，自由组合
    description: 从数据出发，仅需几行代码就可以轻松获得想要的图表展示效果
  - img: ${assets}/image/home/features-professional.svg
    title: 生动、易实现
    description: 大量产品实践之上，提供绘图引擎、完备图形语法、专业设计规范
  - img: ${assets}/image/home/features-powerful.svg
    title: 强大的交互语法
    description: 任何图表，都可以基于图形语法灵活绘制，满足你无限的创意
usecases:
  - img: ${assets}/image/home/g2-usecase1.png
    title: 设计故事
    description: 一个个接近真实的数据可视化案例，我们将它们归纳为一个个故事性的设计模板，让用户达到开箱即用的效果。
    relate: true
    name: G2 设计故事精品案例
    link: https://antv.alipay.com/zh-cn/g2/3.x/demo/index.html
clients:
  - img: ${assets}/image/home/aliyun.png
  - img: ${assets}/image/home/alipay.png
  - img: ${assets}/image/home/tmall.png
  - img: ${assets}/image/home/taobao.png
  - img: ${assets}/image/home/mybank.png
  - img: ${assets}/image/home/jd.png
  - img: ${assets}/image/home/yunos.png
  - img: ${assets}/image/home/cainiao.png
resource:
  jsFiles:
    - ${url.g2}
    - ${url.dataSet}
-->

<!-- 第一屏，产品简介 -->
<section class="intro">
    <div class="container">
        <div class="header row">
            <div class="col-md-5">
                <h1>G2 可视化图形语法</h1>
                <p class="main-info">G2 是一套基于可视化编码的图形语法，以数据驱动，具有高度的易用性和扩展性，用户无需关注各种繁琐的实现细节，一条语句即可构建出各种各样的可交互的统计图表。</p>
                <a href="{{ products.g2.links.demo.href }}" class="btn-round-link btn btn-primary btn-lg">{{ resource.translate.demo }}</a>
                <a href="{{base}}zh-cn/g2/3.x/tutorial/index.html#_安装" class="btn-round-link btn btn-light btn-lg">{{ resource.translate.downloadAndUse }}</a>
                <iframe class="btn-round-link btn btn-light btn-lg github-btn" src="https://ghbtns.com/github-btn.html?user=antvis&repo=g2&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
            </div>
            <div class="col-md-7 slick" data-dots="true">
                <div id="commentsCarousel" class="carousel">
                    <div class="carousel-inner slick">
                        <div id="c1" class="plot-container carousel-item active"></div>
                        <div id="c2" class="plot-container carousel-item"></div>
                        <div id="c3" class="plot-container carousel-item"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 第二屏：产品特性 -->
<section class="features text-center">
    <div class="container">
        <div class="row">
            {% for card in featuresCards %}
            <div class="feature col-md-4 text-center">
                <img src="{{ card.img }}" alt="" width="120" height="120">
                <h5>{{ card.title }}</h5>
                <div class="detail">{{ card.description }}</div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- 第三屏：使用案例 -->
<section class="use-cases">
  <div class="container">
    {% for card in usecases %}
    <div class="row test">
      <div class="col-md-7">
        <img class="case-image" src="{{ card.img }}" />
      </div>
      <div class="col-md-5 case-content">
        <div class="logo">
          <img src="{{ card.icon }}" />
        </div>
        <div class="title">{{ card.title }}</div>
        <div class="description">{{ card.description }}</div>
        {% if card.relate %}
        <div class="relate">
          <div class="flex">
            <div class="item name">{{ card.name }}</div>
            <div class="item link">
              <a href="{{ card.link }}" target="_blank">查看详情></a>
            </div>
          </div>
        </div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>

<!-- 第四屏 更多特性 -->

<!-- 第五屏 客户 -->
<section class="clients-container">
  <div class="container">
    <div class="title text-center">感谢一路合作的伙伴</div>
    <div class="row">
      {% for card in clients %}
      <div class="col-md-3">
        <img class="client-icon" src="{{ card.img }}" />
      </div>
      {% endfor %}
    </div>
  </div>
</section>

<!-- chart1 -->
```js-
var padding = [40, 40, 90, 60];
  var data = [
    { month: 'Jan', Tokyo: 7.0, London: 3.9 },
    { month: 'Feb', Tokyo: 6.9, London: 4.2 },
    { month: 'Mar', Tokyo: 9.5, London: 5.7 },
    { month: 'Apr', Tokyo: 14.5, London: 8.5 },
    { month: 'May', Tokyo: 18.4, London: 11.9 },
    { month: 'Jun', Tokyo: 21.5, London: 15.2 },
    { month: 'Jul', Tokyo: 25.2, London: 17.0 },
    { month: 'Aug', Tokyo: 26.5, London: 16.6 },
    { month: 'Sep', Tokyo: 23.3, London: 14.2 },
    { month: 'Oct', Tokyo: 18.3, London: 10.3 },
    { month: 'Nov', Tokyo: 13.9, London: 6.6 },
    { month: 'Dec', Tokyo: 9.6, London: 4.8 }
  ];
  var ds = new DataSet();
  var dv = ds.createView().source(data);
  dv.transform({
    type: 'fold',
    fields: [ 'Tokyo', 'London' ], // 展开字段集
    key: 'city', // key字段
    value: 'temperature', // value字段
  });
  var chart = new G2.Chart({
    // container: 'c1',
    container: $('.plot-container')[0],
    forceFit: true,
    height: 390,
    padding: padding
  });
  chart.source(dv, {
    month: {
      range: [ 0, 1 ]
    }
  });
  chart.tooltip({
    crosshairs: {
      type: 'line'
    }
  });
  chart.axis('temperature', {
    label: {
      formatter: val => {
        return val + '°C';
      }
    }
  });
  chart.line().position('month*temperature').color('city').size(2).shape('smooth');
  chart.point().position('month*temperature').color('city').size(4).shape('circle').style({
    stroke: '#fff',
    lineWidth: 1
  });
  chart.render();
  chart.showTooltip({
    x: 250,
    y: 250
  });
```

<!-- chart2 -->

```js-
  var padding = [40, 40, 90, 60];
  const data = [
    { name:'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.' :39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
    { name:'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.' :34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4}
  ];
  const ds = new DataSet();
  const dv = ds.createView().source(data);
  dv.transform({
    type: 'fold',
    fields: [ 'Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.' ], // 展开字段集
    key: '月份', // key字段
    value: '月均降雨量', // value字段
  });

  const chart = new G2.Chart({
    // container: 'c2',
    container: $('.plot-container')[1],
    forceFit: true,
    height: 390,
    padding: padding
  });
  chart.source(dv);
  chart.interval().position('月份*月均降雨量').color('name').adjust([{
    type: 'dodge',
    marginRatio: 1 / 32
  }]);
  chart.render();
```

<!-- chart3 -->

```js-
  var padding = [40, 40, 90, 60];
  var data = [
    {country: 'Asia', year: '1750', value: 502},
    {country: 'Asia', year: '1800', value: 635},
    {country: 'Asia', year: '1850', value: 809},
    {country: 'Asia', year: '1900', value: 5268},
    {country: 'Asia', year: '1950', value: 4400},
    {country: 'Asia', year: '1999', value: 3634},
    {country: 'Asia', year: '2050', value: 947},
    {country: 'Africa', year: '1750', value: 106},
    {country: 'Africa', year: '1800', value: 107},
    {country: 'Africa', year: '1850', value: 111},
    {country: 'Africa', year: '1900', value: 1766},
    {country: 'Africa', year: '1950', value: 221},
    {country: 'Africa', year: '1999', value: 767},
    {country: 'Africa', year: '2050', value: 133},
    {country: 'Europe', year: '1750', value: 163},
    {country: 'Europe', year: '1800', value: 203},
    {country: 'Europe', year: '1850', value: 276},
    {country: 'Europe', year: '1900', value: 628},
    {country: 'Europe', year: '1950', value: 547},
    {country: 'Europe', year: '1999', value: 729},
    {country: 'Europe', year: '2050', value: 408},
    {country: 'Oceania', year: '1750', value: 200},
    {country: 'Oceania', year: '1800', value: 200},
    {country: 'Oceania', year: '1850', value: 200},
    {country: 'Oceania', year: '1900', value: 460},
    {country: 'Oceania', year: '1950', value: 230},
    {country: 'Oceania', year: '1999', value: 300},
    {country: 'Oceania', year: '2050', value: 300},
  ];
  const chart = new G2.Chart({
    // container: 'c3',
    container: $('.plot-container')[2],
    forceFit: true,
    height: 390,
    padding: padding
  });
  chart.source(data, {
    year: {
      type: 'linear',
      tickInterval: 50
    }
  })
  chart.tooltip({
    crosshairs: {
      type: 'line'
    }
  });
  chart.areaStack().position('year*value').color('country');
  chart.lineStack().position('year*value').color('country').size(2);
  chart.render();
```
