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
  - img: ${assets}/image/home/gi.png
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
      <div class="col-md-7">
        <div class="g2-demo-container">
          <div class="g2-chart-wrapper">
            <div class="chart-content">
              <div class="contianer slick">
                <div id="commentsCarousel" class="carousel">
                  <div class="carousel-inner slick">
                    <div class="carousel-item active" id="c1">
                    </div>
                    <div class="carousel-item" id="c2">
                    </div>
                    <div class="carousel-item" id="c3">
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  <div>
    {% for card in usecases %}
    <div class="row test">
      <div class="col-md-6">
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

```js-
$('.chart-content .slick').each(function () {
  var $target = $(this);
  $target.slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
  }).on('beforeChange', function () {
  });
});
```

<!-- chart1 -->
```js-
const chart = new G2.Chart({
  container: 'c3',
  forceFit: true,
  padding: [ 50, 100 ],
  height: 300
});
chart.legend(false);
chart.tooltip({
  showTitle: false
});

const text = [ 'MIDNIGHT', '3 AM', '6 AM', '9 AM', 'NOON', '3 PM', '6 PM', '9 PM' ];
const data = [];
for (let i = 0; i < 24; i++) {
  const item = {};
  item.type = i + '';
  item.value = 10;
  data.push(item);
}
const { DataView } = DataSet;
const dv = new DataView();
dv.source(data)
  .transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent'
  });

const bgView = chart.view();
bgView.coord('theta', {
  innerRadius: 0.9
});
bgView.source(dv);
bgView.intervalStack()
  .position('percent')
  .style({
    stroke: '#444',
    lineWidth: 1
  })
  .tooltip(false)
  .select(false);
bgView.guide().text({
  position: [ '50%', '50%' ],
  content: '24 hours',
  style: {
    lineHeight: '240px',
    fontSize: '30',
    fill: '#262626',
    textAlign: 'center'
  }
});

const intervalView = chart.view();
intervalView.source(data);
intervalView.coord('polar', {
  innerRadius: 0.9
});
intervalView.axis(false);
intervalView.interval()
  .position('type*value')
  .size('type', function(val) {
    if (val % 3 === 0) {
      return 4;
    } else {
      return 0;
    }
  })
  .color('#444')
  .tooltip(false)
  .label('type', function(val) {
    if (val % 3 === 0) {
      return text[val / 3];
    }
    return '';
  }, {
    offset: 15,
    textStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      fill: '#bfbfbf'
    }
  });

const userData = [
  { type: '睡眠', value: 70 },
  { type: '淡茶烟斗和冥想', value: 10 },
  { type: '写作', value: 10 },
  { type: '教课', value: 40 },
  { type: '酒吧吃肉配白酒', value: 40 },
  { type: '散步', value: 10 },
  { type: '拜访马大大', value: 30 },
  { type: '阅读', value: 30 },
];
const userDv = new DataView();
userDv.source(userData)
  .transform({
    type: 'percent',
    field: 'value',
    dimension: 'type',
    as: 'percent'
  });
const pieView = chart.view();
pieView.source(userDv, {
  percent: {
    formatter: val => {
      return (val * 100).toFixed(2) + '%';
    }
  }
});
pieView.coord('theta', {
  innerRadius: 0.75,
});
pieView.intervalStack().position('percent')
  .color('type')
  .label('type', {
    offset: 40,
  })
  .style({
    stroke: 'white'
  })
  .select(false);

chart.render();
```

<!-- chart2 -->

```js-
$.getJSON('/assets/data/iris.json', data => {
    const chart = new G2.Chart({
        container: 'c2',
        forceFit: true,
        height: 300,
        padding: 'auto',
        theme: {
            widthRatio: {
                column: 0.7 // 小提琴图最宽处占总宽度的比例
            }
        }
    });
    chart.legend('Species', {
      offsetY: -12
    });
    chart.scale({
        key: { sync: true }, // key 字段在其中一个 view 映射到 color 了，在其他所以需要同步，否则
        y: { sync: true }
    });
    // chart.coord('polar');
    chart.axis('key', {
        grid: {
            zIndex: -1,
            align: 'center',
            alternateColor: '#f5f5f5',
            type: 'polygon',
            lineStyle: {
                stroke: 'white'
            }
        },
        tickLine: {
            alignWithLabel: false
        }
    });
    chart.axis('y', {
        line: G2.Global.axis.top.line,
        tickLine: G2.Global.axis.top.tickLine,
        grid: null
    });

    const ds = new DataSet({});
    const fields = ['PetalWidth', 'PetalLength', 'SepalWidth', 'SepalLength'];
    // 小提琴图用 KDE transform 提供数据
    const dv1 = ds.createView().source(data).transform({
        type: 'kde',
        extent: [0, 8], // 采样范围
        fields,
        as: ['key', 'y', 'size'], // 生成的统计字段：字段名、采样点、采样点对应的概率值
        groupBy: ['Species'],
        minSize: 0.01 // 小于这个值的概率将被忽略
    });
    // 需要根据分组提供分位值等统计数据，所以提前拍平数据
    const dv2 = ds.createView().source(data);
    dv2.transform({
        type: 'fold',
        fields
    });
    // 计算 95% 分位值，用于画 95% 分位线
    const dv3 = ds.createView().source(dv2).transform({
        type: 'bin.quantile',
        field: 'value',
        as: 'y',
        groupBy: ['key', 'Species'],
        p: [0.025, 0.975]
    });
    // 计算 Q1 和 Q3 分位值，用于画分位线
    const dv4 = ds.createView().source(dv2).transform({
        type: 'bin.quantile',
        field: 'value',
        as: 'y',
        groupBy: ['key', 'Species'],
        p: [1 / 4, 3 / 4]
    });
    // 计算中位值
    const dv5 = ds.createView().source(dv2).transform({
        type: 'aggregate',
        fields: ['value'],
        operations: ['median'],
        as: ['y'],
        groupBy: ['key', 'Species']
    });

    const adjustCfg = [{
        type: 'dodge',
        marginRatio: 1 / 32
    }];
    // violin plot
    const view1 = chart.view();
    view1.source(dv1);
    view1.violin()
        .position('key*y')
        .color('Species')
        .adjust(adjustCfg)
        // .shape('smooth')
        // .shape('smoothHollow')
        .size('size')
        .style({
            lineWidth: 1,
            fillOpacity: 0.3,
            strokeOpacity: 0.75
        })
        .tooltip(false);
    // 95% confidence interval
    const view3 = chart.view();
    view3.source(dv3);
    view3.interval()
        .position('key*y')
        .color('Species')
        .adjust(adjustCfg)
        .size(1)
        .style({
            fill: 'black',
            lineWidth: 0
        })
        .tooltip(false);
    // Q1 / Q3
    const view4 = chart.view();
    view4.source(dv4);
    view4.interval()
        .position('key*y')
        .color('Species')
        .adjust(adjustCfg)
        .size(8)
        .style({
            fill: 'black',
            fillOpacity: 1
        })
        .tooltip('y', value => {
            return {
                name: 'Q1-Q3',
                value
            };
        });
    // median
    const view5 = chart.view();
    view5.source(dv5);
    view5.point()
        .position('key*y')
        .color('Species')
        .adjust(adjustCfg)
        .size(3)
        .style({
            fill: 'white',
            lineWidth: 0
        })
        .tooltip('y', value => {
            return {
                name: 'Median',
                value
            };
        });
    chart.render();
});
```

<!-- chart3 -->

```js-
$.getJSON('/assets/data/tempChange.json', data => {
  const chart = new G2.Chart({
    container: 'c1',
    forceFit: true,
    padding: 'auto',
    height: 300
  });
  chart.source(data, {
    change: {
      tickInterval: 0.25
    },
    year: {
      range: [0, 1]
    }
  });
  chart.area().position('year*change').color('white')
    .shape('smooth');
  chart.line().position('year*change').color('white')
    .shape('smooth');
  chart.guide().regionFilter({
    top: true,
    start: [ 'min', 0 ],
    end: [ 'max', 'min' ],
    color: '#18a1cd'
  });
  chart.guide().regionFilter({
    top: true,
    start: [ 'min', 'max' ],
    end: [ 'max', 0 ],
    color: '#FF4D4F'
  });
  chart.guide().region({
    top: false,
    start: [ 2000, 'max' ],
    end: [ 2016, 'min' ]
  });
  chart.guide().dataMarker({
    top: true,
    position: [ 1977, 0.18 ],
    content: '时间进入1977年后，全球气\n温开始呈现整体升高趋势。',
    lineLength: 50,
    style: {
      text: { textAlign: 'right', fontSize: 13 },
      point: { stroke: '#FF4D4F' }
    }
  });
  chart.guide().dataMarker({
    top: true,
    position: [ 1940, 0.08 ],
    content: '1940年，气温变化首次出现正值。',
    lineLength: 50,
    style: {
      text: { textAlign: 'right', fontSize: 13 },
      point: { stroke: '#FF4D4F' }
    }
  });
  chart.render();
});
```
