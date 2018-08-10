import React from 'react';
import LazyLoad from 'react-lazyload';
import Transition from 'react-transition-group/Transition';
// import SpinnerCol from '../Spinner/SpinnerCol';
import './FadeIn.css';
const duration = 1000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
    height: '200px',
    width:'100%'
}

const transitionStyles = {
    entering: {
        opacity: 0
    },
    entered: {
        opacity: 1
    },
};

class FadeIn extends React.Component {
  state = {
    loaded: false,
  };
  onLoad = () => this.setState({ loaded: true });
 
  render() {
    const { height, children } = this.props,
      { loaded } = this.state;
 
    return (
      <LazyLoad height={200}
                        placeholder={<div style={{'height':"200px"}}></div>} debounce={200} once> 
        <Transition in={loaded} timeout={duration}>
          
          {state =>
          
            <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
              {children(this.onLoad)}
            </div>}
        </Transition>
      </LazyLoad>
    );
  }
}
export default FadeIn;