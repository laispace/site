import './copy-code';
import './home.less';

// 实际案例滚动屏
const sliderLength = $(".use-cases .slider").children('.row').length;
$(".use-cases .slider").slick({
  dots: sliderLength > 1 ? true : false,
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
