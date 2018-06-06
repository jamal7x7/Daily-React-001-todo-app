import React from 'react'

const date = new Date()

const DateBar = (props) => (
  <div className='todoContainerDate'>
     Today is {date.toDateString()}
  </div>
)

export default DateBar
