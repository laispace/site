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
                      <img height="300" src="{{assets}}/image/home/g2/case1.png"/>
                    </div>
                    <div class="carousel-item" id="c2">
                      <img height="300" src="{{assets}}/image/home/g2/case2.png"/>
                    </div>
                    <div class="carousel-item" id="c3">
                      <img height="300" src="{{assets}}/image/home/g2/case3.png"/>
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

