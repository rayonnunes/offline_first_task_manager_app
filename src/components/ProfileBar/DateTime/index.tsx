import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'

import { DateTimeWrapper, TimeText, DateText } from './styles'

const DateTime = () => {
  const [time, setTime] = useState(format(new Date(), 'HH:mm'))
  const [date, setDate] = useState(format(new Date(), 'MMMM, do'))
  const [year, setYear] = useState(format(new Date(), 'yyyy'))

  const updateTime = () => {
    const updatedDate = new Date()
    const newTime = format(updatedDate, 'HH:mm')
    const newDate = format(updatedDate, 'MMMM, do')
    const newYear = format(updatedDate, 'yyyy')
    setTime(newTime)
    setDate(newDate)
    setYear(newYear)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      updateTime()
    }, 1000)
    return () => clearInterval(timer)
  }, [])
  return (
    <DateTimeWrapper>
      <TimeText>{time}</TimeText>
      <DateText>{date}</DateText>
      <DateText>{year}</DateText>
    </DateTimeWrapper>
  )
}

export default DateTime
