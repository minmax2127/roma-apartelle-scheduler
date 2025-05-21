function formatDateString(dateString) {
  const checkIn = new Date(dateString)

  const formattedDate = checkIn.toLocaleDateString()
  const formattedTime = checkIn.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  return {
    date: formattedDate,
    time: formattedTime,
  }
}

function calculateDuration(checkInDateTime, checkOutDateTime) {
  const checkIn = new Date(checkInDateTime)
  const checkOut = new Date(checkOutDateTime)

  const duration = Math.abs(checkOut - checkIn) / (1000 * 60 * 60) // in hours

  return duration
}

function calculateCheckOutTime(checkInDateTime, duration) {
  const checkIn = new Date(checkInDateTime)
  const checkOut = new Date(checkIn.getTime() + duration * 60 * 60 * 1000) // in milliseconds

  return checkOut.toISOString()
}

function currentDateTime() {
  const now = new Date()

  return now.toISOString()
}

function getYYYYMMDD(dateObj) {
  const year = dateObj.getFullYear()
  const month = String(dateObj.getMonth() + 1).padStart(2, '0') // Month is 0-indexed
  const day = String(dateObj.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function convertTo24HourFormat(time12h) {
  const [time, modifier] = time12h.split(' ')
  let [hours, minutes] = time.split(':')

  if (hours === '12') {
    hours = '00'
  }

  if (modifier.toUpperCase() === 'PM') {
    hours = parseInt(hours, 10) + 12
  }

  return `${hours}:${minutes}`
}

function timestampToISOString(timestamp) {

  try {
    // Convert seconds to milliseconds
    const milliseconds = timestamp.seconds * 1000 + Math.floor(timestamp.nanoseconds / 1000000)

    // Create a Date object
    const date = new Date(milliseconds)

    // Convert to ISO string
    const isoString = date.toISOString()

    return isoString
  } catch (error) {
    console.log(error)
  }


}


export {
  formatDateString,
  calculateDuration,
  calculateCheckOutTime,
  currentDateTime,
  getYYYYMMDD,
  convertTo24HourFormat,
  timestampToISOString,
}
