function DateT(){
  const tt =new Date()
  const yy =tt.getFullYear()
  const mm = String(tt.getMonth() +1).padStart(2,"0")
  const dd = String(tt.getDay()).padStart(2,"0")
  const hh = tt.getHours()
  const Mn = String(tt.getMinutes()).padStart(2,"0")
  const Ss = String(tt.getSeconds()).padStart(2,"0")

  const Today = `${yy}년${mm}월${dd}일 ${hh}:${Mn}:${Ss}`
  return Today;
}

function WTT (){
  console.log(`오늘${DateT()}입니다`)
}

WTT()