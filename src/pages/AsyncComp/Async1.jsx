import React from 'react';

export default class AsyncComponent extends React.PureComponent {
  state = {
    component: null,
  };

  componentDidMount() {
    import('./AsyncComp').then((data) => {
      console.log(data.default);
      setTimeout(() => {
        this.setState({
          component: data.default,
        });
      }, 1000);
    });
  }

  render() {
    const C = this.state.component;
    return C ? <C /> : null;
  }
}
