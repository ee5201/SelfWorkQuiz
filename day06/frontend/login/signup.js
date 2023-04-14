// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector('#ValidationInputWrapper').style.display = 'flex'
  const firstNum = document.getElementById("PhoneNumber02").value
  const secondNum = document.getElementById("PhoneNumber03").value
  console.log('인증 번호 전송')
  const sendphoneNum = (`010${firstNum}${secondNum}`)
  axios.post("http://localhost:3000/token/phone",{
    aaa:sendphoneNum
  }).then((res)=>{
    console.log(res)
    document.getElementById("TokenInput").innerText = res.data
  })
}

// 회원 가입 API 요청
const submitSignup = async () => {
  console.log('회원 가입 이메일 전송')
}
