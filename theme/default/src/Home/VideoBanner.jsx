import React from 'react';
import PropTypes from 'prop-types';

class Banner extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
  }
  static defaultProps = {
    className: 'banner',
  }

  constructor(props) {
    super(props);
    this.state = {height: window.innerHeight};
    this.onWindowResize = this.onWindowResize.bind(this);
  }

  onWindowResize() {
    this.setState({ height: window.innerHeight });
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render() {
    return (
      <div>
      <section id="video-container" style={{ height: this.state.height }}>
        <video
          autoplay="autoplay"
          loop="loop"
          muted="muted"
          controls={false}
          style={{ width: '100%', height: '100%', objectFit: 'fill' }}
          src="https://gw.alipayobjects.com/os/rmsportal/dMEdKQJFpRDASrUYsOHb.mp4">
        </video>
        <div className="overlay">
          <div className="homepage-title">
            <div style={{fontSize: 52, fontWeight: 'bolder'}}>让数据栩栩如生</div>
            <p style={{marginTop: 20, color: 'rgba(255,255,255,.85)'}}>
              AntV 是蚂蚁金服全新一代数据可视化解决方案，致力于提供一套简单<br />方便、专业可靠、无限可能的数据可视化最佳实践。
            </p>
            <a href="#__products">
              <button className="btn-more">继续了解</button>
            </a>
          </div>
          <img id="arrow" src="https://gw.alipayobjects.com/zos/rmsportal/cfUeahyjXCvoeUHrZDcE.svg" width="64" height="64" />
        </div>
      </section>
      </div>
    );
  }
}

export default Banner;
