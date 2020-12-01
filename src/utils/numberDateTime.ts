const todayFullDate: [number, number, number] = [
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
]

const today = new Date(...todayFullDate).getTime()

const tomorrowFullDate: [number, number, number] = [
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate() + 1,
]

const tomorrow = new Date(...tomorrowFullDate).getTime()

const numberDateTime = { today, tomorrow }

export default numberDateTime
