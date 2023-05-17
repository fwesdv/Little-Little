import { DatePicker } from 'antd'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import 'react-datepicker/dist/react-datepicker.module.css'
export class calender extends Component {
  static propTypes = {}

  render() {
    return (
        <DatePicker />
    )
  }
}

export default calender