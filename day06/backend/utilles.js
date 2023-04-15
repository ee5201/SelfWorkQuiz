export function getDate() {
  const day = new Date()
  const yy = day.getFullYear()
  const mm = String(day.getMonth() +1).padStart("2",0)
  const dd = String(day.getDay()).padStart("2",0)
  const result = (`${yy}년${mm}월${dd}일`)
  return result

}