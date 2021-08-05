import React, { Component } from 'react';

export default class NewLifeCycle extends Component {
  state = {
      oh: '',
  };

  static getDerivedStateFromProps(props, state) {
    // this method is fired on every render
    console.log('getDerivedStateFromProps before render', props, state);
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount after render');
    console.log('---------------------------------------------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // for default return true
    console.log('shouldComponentUpdate update component', nextProps, nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {

    console.log('getSnapshotBeforeUpdate before render after get update params', prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    console.log('componentDidUpdate after updated component', prevProps, nextProps, snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount before component destroyed');
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

