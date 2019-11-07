import React from 'react';
import CreateTodo from './containers/CreateTodo'
import Table from './containers/Table'

function App() {
  return (
    <div className="App">
      <div className="container" style={{ marginTop: "3em" }}>
        <h1>MY FUCKING TODO LIST</h1>
        <strong>With react+redux</strong>
        <div className="row"  style={{ marginTop: "3em" }}>
          <div className="col-lg-10 offset-lg-2 col-md-10 col-sm-12 col-xs-12">
            <CreateTodo />
          </div>

        </div>
        <Table />
      </div>

    </div>
  );
}

export default App;
