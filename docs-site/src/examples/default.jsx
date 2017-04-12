import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default React.createClass({
  displayName: 'Default',

  getInitialState () {
    return {
      startDate: moment(),
      multiStartDate: [moment(), moment().add(2, 'days')]
    }
  },

  handleChange (date) {
   this.setState({
      startDate: date
    })
  },

  handleMultiSelect (date) {

    let updatedArray = this.state.multiStartDate.filter((formerlySelectedElement) => {
      return !formerlySelectedElement.isSame(date, "day")
    })

    if (updatedArray.length === this.state.multiStartDate.length) {
      updatedArray.push(date)
    }

    this.setState({
      multiStartDate: updatedArray
    })
  },

  render () {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">
          {'<DatePicker'}<br />
              {'selected={this.state.startDate}'}<br />
              {'onChange={this.handleChange} />'}
        </code>
      </pre>
      <div className="column">
        <DatePicker
            multi
            selected={this.state.startDate}
            selectedList={this.state.multiStartDate}
            onChange={this.handleChange}
            onMultiSelect={this.handleMultiSelect}
        />
      </div>
    </div>
  }
})
