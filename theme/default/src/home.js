import './copy-code';
import './home.less';

// 实际案例滚动屏
$(".use-cases .slider").slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  adaptiveHeight: true,
  speed: 500,
  cssEase: 'linear',
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true
});
