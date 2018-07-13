import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import SimpleSlide from './SimpleSlide.jsx';

export default class SimpleModal extends Component {
  render() {
    return (
      <div className={this.props.classNamePrefix}>
        <a
          className={`${this.props.classNamePrefix}__close`}
          onClick={this.props.onClose}
        >
          Close
        </a>

        <CSSTransitionGroup
          component="div"
          transitionName={{
            enter: `${this.props.classNamePrefix}__slide-enter`
              + `-${this.props.slideAnimationDirection}`,
            enterActive: `${this.props.classNamePrefix}__slide-enter`
              + `-${this.props.slideAnimationDirection}-active`,
            leave: `${this.props.classNamePrefix}__slide-leave`
              + `-${this.props.slideAnimationDirection}`,
            leaveActive: `${this.props.classNamePrefix}__slide-leave`
              + `-${this.props.slideAnimationDirection}-active`,
          }}
          transitionEnter={this.props.slideAnimations}
          transitionLeave={this.props.slideAnimations}
          transitionEnterTimeout={this.props.slideTransitionEnterTimeout}
          transitionLeaveTimeout={this.props.slideTransitionLeaveTimeout}
        >
          <SimpleSlide
            {...this.props}
            key={this.props.slideIndex}
          />
        </CSSTransitionGroup>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  slide: PropTypes.object,
  slideIndex: PropTypes.number,
  slideAnimations: PropTypes.bool,
  slideAnimationDirection: PropTypes.string,
  showPrev: PropTypes.bool,
  showNext: PropTypes.bool,
  onPrev: PropTypes.func,
  onNext: PropTypes.func,
  onClose: PropTypes.func,
  classNamePrefix: PropTypes.string,
  slideTransitionEnterTimeout: PropTypes.number,
  slideTransitionLeaveTimeout: PropTypes.number,
};
