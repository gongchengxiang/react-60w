import React from 'react';

export default class ClassComp extends React.Component {
  state = {
    test: 'class-comp-test',
  };

  render() {
    const {test, testProp} = this.state;
    return (
      <div>
        <div>
          {test}
        </div>
        <div>
          {testProp}
        </div>
      </div>
    );
  }
}
