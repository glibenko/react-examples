import React, { Component } from 'react';

export default class OldLifeCycle extends Component {
  state = {
      oh: '',
  };

  componentWillMount() {
    // will work before react 17
    // UNSAFE_componentWillMount()
    console.log('componentWillMount before render');
  }

  componentDidMount() {
    console.log('componentDidMount after render');
    console.log('---------------------------------------------------------');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount before component destroyed');
  }

  componentWillReceiveProps(NextProps) {
    // will work before react 17 
    // UNSAFE_componentWillReceiveProps()
    console.log('componentWillReceiveProps wait next props', NextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // for default return true
    console.log('shouldComponentUpdate update component', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    // will work before react 17 
    // UNSAFE_componentWillUpdate
    console.log('componentWillUpdate before rendering when new props or state are being received', nextProps, nextState)
  }

  componentDidUpdate(prevProps, nextProps) {
    console.log('componentDidUpdate after updated component', prevProps, nextProps);
  }

  render() {
    let btnStyle = {
      backgroundColor: '#0698e4',
      cursor: 'pointer',
      padding: '8px 0',
      width: 150,
      textAlign: 'center',
      marginTop: 10,
      borderRadius: 6,
    };

    return (
      <div>
        <div>first render {this.state.oh} {this.props.someProps}</div>
        <div style={btnStyle} onClick={() => {this.setState({ oh: 'state changed' })}}> change state </div>
        <div style={btnStyle} onClick={() => {this.props.changeProps()}}> change props </div>
        <div style={btnStyle} onClick={() => {this.props.killOld()}}> kill component </div>
      </div>
    )
  }
};

