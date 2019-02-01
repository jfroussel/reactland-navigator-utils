import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  title: {
    width: 'auto',
    padding: '5px 10px'
  }
}

export default class Navigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventSelected: '',
      propertyType: '',
      objectValue: ''
    }
  }
  static propTypes = {
    text: PropTypes.string
  }


  getObjectList() {
    let n = navigator
    let list = []
    for (const key in n) {
      const value = key
      list.push(value)
    }
    return list
  }

  getObjectSelectedProperty = (propertyName) => {
    const property = typeof navigator[propertyName]
    this.setState({ propertyType: property })
    console.log('getObjectSelectedProperty', property)
  }

  getObjectValue = (propertyName) => {
    const value = navigator[propertyName]
    this.setState({ objectValue: value })
  }

  handleChange = (event) => {
    const name = event.target.value
    this.setState({ eventSelected: name })
    this.getObjectSelectedProperty(name)
    this.getObjectValue(name)
    console.log(name)
  }

  render() {

    const list = this.getObjectList()
    console.log(this.state)
    console.log(navigator)


    return (
      <div className="container pt-5">
        <div className="row">
          <div className="container col-6">
            <div className="form-group col-8">
              <select className="form-control" id="properties" onChange={this.handleChange}>
                <option value="">Select properties</option>
                {
                  list.map((opt, i) => {
                    return <option key={i} value={opt} >{opt}</option>
                  })
                }
              </select>
            </div>
          </div>
          <div className="container col-6">
            <div className="row mb-3">
              <div className="col-12">
                Name : <code>{this.state.eventSelected}</code> <br />
                Type : <code> {this.state.propertyType}</code> <br />
                value : <code> {JSON.stringify(this.state.objectValue)}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
