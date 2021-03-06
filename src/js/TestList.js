import React from "react"
import { observer } from "mobx-react"


@observer
export default class TestList extends React.Component {
  searchTests(e) {
    if (e.which === 13) {
      this.props.store.searchTests(e.target.value)
    }
  }

  render() {
    const {tests, error, errorMessage, searchTests} = this.props.store
    const testList = tests.map(test => (
      <tr key={test.timestamp}>
        <td>{test.testId}</td>
        <td>{test.timestamp}</td>
        <td>{test.userId}</td>
        <td>{test.option}</td>
      </tr>
    ))
    return <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1>Elastic Search API</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <input className="form-control" 
            onKeyPress={this.searchTests.bind(this)}
            placeholder="press enter to search"
          />
          <div className={error ? 'alert alert-danger' : 'collapse'}>{errorMessage}</div>
        </div>
        <div className="col-sm-9">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Test</th>
                <th>Timestamp</th>
                <th>User Id</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {testList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  }
}