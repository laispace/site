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
  - img: https://gw.alipayobjects.com/zos/rmsportal/uFbxbootiAahJsKWesMg.svg
    title: 架构上灵活可扩展
    description: 数据为核心，相同的数据不同的展现
  - img: https://gw.alipayobjects.com/zos/rmsportal/vVvdsshfRBIZegjThfzD.svg
    title: 业务上简洁、通用
    description: 基于图形语法，简单，易用
  - img: ${assets}/image/home/features-powerful.svg
    title: 可视化上酷炫，动感
    description: 高性能，高质量实时动态渲染
usecases:
  - img: https://gw.alipayobjects.com/zos/rmsportal/mvyerbHlaqhrNlgVwcYg.png
    title: 精彩案例
    description: 一个个真实的数据可视化案例，复杂的地理数据,简单，易用的API接口,让用户达到开箱即用的效果。
    relate: true
    link: https://antv.alipay.com/zh-cn/l7/1.x/demo/index.html
-->

<!-- 第一屏，产品简介 -->
<section class="intro">
   <div class="video_container" style="width: 100%; height: 664px; top:-64px; object-fit: cover; position: absolute;margin-top: 64px; overflow: hidden;">
     <video autoplay="autoplay" loop style="width: 100%; height: 100%; top:0px; object-fit: cover" src="https://mdn.alipayobjects.com/afts/file/A*qmPlRYhAlBkAAAAAAAAAAABjAQAAAQ?bz=antv_site" ></video>
     <div style="width: 100%; height: 100%; position: absolute; top:0px; object-fit: cover;background-image: url(https://gw.alipayobjects.com/zos/rmsportal/oVTFrcRUOwnEpfLIoNys.png);
    background-repeat: round;opacity: 0.75;" ></div>

   </div>
  <div class="container">
    <div class="header row">
      <div class="col-md-5">
        <h1 style="color:#fff"> L7 地理空间数据可视化</h1>
        <p class="main-info" style="color:#fff;"  >L7 中的 L 代表 Location，7 代表世界七大洲，寓意能为全球位置数据提供可视化能力。L7 的目标是提供一套地理空间数据可视化框架，易用易扩展，支持海量数据的高性能和 3D 高质量渲染，安全可靠（无地图法务风险）的地理空间数据可视化解决方案。</p>
        <a href="{{ products.l7.getStarted.href }}"  target = 'blank' class="btn btn-primary btn-lg btn-round-link">{{ products.f2.getStarted.text }}</a>
        <iframe class="btn-round-link btn btn-light btn-lg github-btn" src="https://ghbtns.com/github-btn.html?user=antvis&repo=L7&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170px" height="20px"></iframe>
      </div>
    </div>
  </div>
</section>

<!-- 第二屏：产品特性 -->
<section class="l7-features text-center">
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
  <div class="slider">
    {% for card in usecases %}
    <div class="row test">
      <div class="col-md-6">
        <img class="case-image" style="height:420px; margin:6.5%;" src="{{ card.img }}" />
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
              <a href="/zh-cn/l7/1.x/demo/index.html" target="_blank">查看详情></a>
            </div>
          </div>
        </div>
        {% endif %}
      </div>
    </div>
    {% endfor %}
  </div>
</section>
<!-- 第四屏 使用 app -->
<section class="clients-container" style="min-height: 410px">
  <div class="container">
    <div class="title text-center">L7 地理空间数据可视化解决方案</div>
    <div class="page text-center"> </div>
    <div class="info-content" style="opacity: 1; transform: translate(0px, 0px); margin-top:64px ">
    <p class="main-info loose" style="opacity: 1; transform: translate(0px, 0px); margin:10px; text-align: center;padding-top: 30px;">地理信息将成为未来数字经济的基础设施。地理信息可视化涵盖地理、数据、 图形、可视化、图像等多个技术领。L7建设才刚刚起步，还有很多功能需要持续打磨，还有很多技术难点需要攻克，我们将持续投入争取尽快开源发布正式版。</p>
    <!-- <p class="main-info loose" style="opacity: 1; transform: translate(0px, 0px);  margin:10px;text-align: center;">地理信息可视化涵盖地理、数据、 图形、可视化、图像等多个技术领。</p>
     <p class="main-info loose" style="opacity: 1; transform: translate(0px, 0px);  margin:10px;text-align: center;">L7 建设才刚刚起步，还有很多功能需要持续打磨，还有很多技术难点需要攻克，我们将持续投入争取尽快开源发布正式版，欢迎更多的团队、同学参与进来。</p> -->
    </div>
  </div>
</section>

<script>
var header = document.getElementsByTagName('header')[0];
header.className += ' homepage transparent';
document.getElementById('logo').src= '/assets/image/home/logo-with-text.svg';
</script>
