import React, { Component } from 'react';
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'
import Clock from 'react-clock';

class App extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    setInterval(
      () => this.setState({ date: new Date() }),
      1000
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container" style={{ marginTop: "3em" }}>
          <h1>MY FUCKING TODO LIST</h1>
          <strong>With react+redux</strong>
          <div className="row" style={{ marginTop: "3em" }}>
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <Clock
                value={this.state.date}
              />
            </div>
          </div>
          <div className="row" style={{ marginTop: "3em" }}>
            <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>

          </div>
          <Table />
        </div>

      </div>
    );
  }

}

export default App;
