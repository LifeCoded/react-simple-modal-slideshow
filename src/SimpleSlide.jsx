import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SimpleSlide extends Component {
  render() {
    const prev = this.props.showPrev ?
      <a
        className={`${this.props.classNamePrefix}__controls--prev`}
        onClick={this.props.onPrev}
      >
        Previous
      </a>
      : null;

    const next = this.props.showNext ?
      <a
        className={`${this.props.classNamePrefix}__controls--next`}
        onClick={this.props.onNext}
      >
        Next
      </a>
      : null;

    return (
      <div className={`${this.props.classNamePrefix}__slide`}>
        <div className={`${this.props.classNamePrefix}__media`}>
          {this.props.slide.media}

          <div className={`${this.props.classNamePrefix}__controls`}>
            {prev}
            {next}
          </div>
        </div>

        <div className={`${this.props.classNamePrefix}__content`}>
          {this.props.slide.content}
        </div>
      </div>
    );
  }
}

SimpleSlide.propTypes = {
  slide: PropTypes.object,
  showPrev: PropTypes.bool,
  showNext: PropTypes.bool,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  onClose: PropTypes.func,
  classNamePrefix: PropTypes.string,
};
