import React from 'react';

export default class TodoClass extends React.Component {
  state = {
    title: 'todo-class',
  };

  render() {
    const {title} = this.state;
    return (
      <>
        <div>
          {title}
        </div>
        <div className="todo">
          <div className="header">
            <span>all</span>
            <input type="text" />
            <span>add</span>
          </div>
          <div className="content">2</div>
          <div className="footer">footer</div>
        </div>
      </>
    );
  }
}
