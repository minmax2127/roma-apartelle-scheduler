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

export { formatDateString, calculateDuration, calculateCheckOutTime, currentDateTime, getYYYYMMDD }
