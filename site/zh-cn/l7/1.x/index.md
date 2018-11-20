<!--
template: home
title: L7
keywords:
  - L7
  - 地理
  - 空间可视化
  - Webgl
  - 地图
  - 3d
  - GIS Mapbox deckgl
description: L7 中的 L 代表 Location，7 代表世界七大洲，寓意能为全球位置数据提供可视化能力。L7 的目标是提供一套地理空间数据可视化框架，易用易扩展，支持海量数据的高性能和 3D 高质量渲染，安全可靠（无地图法务风险）的地理空间数据可视化解决方案。
featuresCards:
  - img: ${assets}/image/home/features-professional.svg
    title: 架构上灵活可扩展
    description: 数据为核心，相同的数据不同的展现
  - img: ${assets}/image/home/features-simple.svg
    title: 业务上简洁、通用
    description: 基于图形语法，简单，易用
  - img: ${assets}/image/home/features-powerful.svg
    title: 可视化上酷炫，动感
    description: 高性能，高质量实时动态渲染
usecases:
  - img: https://gw.alipayobjects.com/zos/rmsportal/gSmSUjduLxtpiQQKowho.png
    title: 精彩案例
    description: 一个个真实的数据可视化案例，复杂的地理数据让用户达到开箱即用的效果。
    relate: true
    link: https://antv.alipay.com/zh-cn/l7/1.x/demo/index.html
-->

<!-- 第一屏，产品简介 -->
<section class="intro">
  <div class="container">
    <!-- <video autoplay="autoplay" loop="" src="https://gw.alipayobjects.com/os/rmsportal/wcycTgNRDuUrQLHzVhzX.mp4" style="width: 100%; height: 100%; object-fit: fill;"></video> -->
    <div class="header row">
      <div class="col-md-5">
        <h1> L7 地理空间数据可视化</h1>
        <p class="main-info">L7 中的 L 代表 Location，7 代表世界七大洲，寓意能为全球位置数据提供可视化能力。L7 的目标是提供一套地理空间数据可视化框架，易用易扩展，支持海量数据的高性能和 3D 高质量渲染，安全可靠（无地图法务风险）的地理空间数据可视化解决方案。</p>
        <a href="{{ products.l7.getStarted.href }}" class="btn btn-primary btn-lg btn-round-link">{{ products.f2.getStarted.text }}</a>
      </div>
      <div class="col-md-7">
        <div class="l7-demo-container">
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
        <img src="{{ card.img }}" alt="">
        <h5>{{ card.title }}</h5>
        <div class="detail">{{ card.description }}</div>
      </div>
    {% endfor %}
    </div>
  </div>
</section>

<!-- 第三屏：使用案例 -->
<section class="use-cases">
  <div class="container slider">
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

