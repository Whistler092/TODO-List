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
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-5">
              <h1>Pending tasks </h1>
              <strong>... of the day</strong>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-5">
              <div className="row">
                <div > {/* className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12" */}
                  <Clock
                    value={this.state.date}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5" >
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <CreateTodo />
            </div>
            
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
              <Table />
            </div>
          </div>

        </div>

      </div>
    );
  }

}

export default App;
