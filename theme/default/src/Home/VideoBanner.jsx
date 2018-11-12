import React from 'react';
import PropTypes from 'prop-types';

class Banner extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
  }
  static defaultProps = {
    className: 'banner',
  }

  render() {
    return (
      <section id="video-container" style={{ height: window.innerHeight }}>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          controls={false}
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
          src="https://ur.alipay.com/rmsportal_560_test.mov"></video>
        <div className="homepage-title">
          <div style={{fontSize: 52, fontWeight: 'bolder'}}>让数据栩栩如生</div>
          <p style={{marginTop: 20, color: 'rgba(255,255,255,.85)'}}>
            AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单<br />方便、专业可靠、无限可能的数据可视化最佳实践。
          </p>
          <a href="#__products">
            <button className="btn-more">继续了解</button>
          </a>
        </div>
      </section>
    );
  }
}

export default Banner;
