import express from "express"
import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc";
import {options }from "./swagger/config.js"
import cors from "cors"
import { checkValidationPhone, getTokentophone, sendTokenToPhone } from "./phone.js";
import { CheckValidationEmail, getTempletEmail, sendTOEmailTOsms } from "./email.js";


const app = express()
app.use(express.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/user',(req, res)=> {
  const result = [
    { 
      email : "aaa@gmail.com", 
      name : "철수",
      phone : "010-1234-5678",
      personal : "220110-2222222",
      prefer : "https://naver.com"
    },
    { 
      email : "bbb@gmail.com", 
      name : "anna",
      phone : "010-1234-2222",
      personal : "220110-0000000",
      prefer : "https://naver.com"
    },
    { 
      email : "ccc@gmail.com", 
      name : "cris",
      phone : "010-1234-3333",
      personal : "870920-1111111",
      prefer : "https://naver.com"
    },
    { 
      email : "ddd@gmail.com", 
      name : "짱구",
      phone : "010-1234-2222",
      personal : "920110-5555555",
      prefer : "https://naver.com"
    },
    { 
      email : "fff@gmail.com", 
      name : "훈이",
      phone : "010-1234-6666",
      personal : "670217-6666666",
      prefer : "https://naver.com"
    },
  ]
  res.send(result)
})


app.get('/starbucks',(req,res)=>{
  const coffelist =[
    // 커피 1개 객체 데이터 예시
    { name: '아메리카노', kcal: 5 },
    { name: '카페라떼', kcal: 10 },
    { name: '콜드브루', kcal: 15 },
    { name: '카페모카', kcal: 50 },
    { name: '돌체라뗴', kcal: 500 },
    { name: '카라멜라뗴', kcal: 200 },
    { name: '바닐라라뗴', kcal: 20 },
    { name: '에스프레소', kcal: 1 },
    { name: '디카페인', kcal: 5 },
    { name: '오트라뗴', kcal: 300 },
  ]
  res.send(coffelist)
})

app.post("/token/phone",(req,res)=>{
  const myphone = req.body.aaa
  const isVaild = checkValidationPhone(myphone)
  res.send("인증완료")
  if(isVaild){
    const getToken = getTokentophone()
    sendTokenToPhone(myphone,getToken)

  }
})
app.post("/user/email",(req,res)=>{
const useremail = req.body.myuser
const isVaildEmail = CheckValidationEmail(useremail.email)
if(isVaildEmail){
  const Templet = getTempletEmail(useremail)

  sendTOEmailTOsms(useremail.email,Templet)
  res.send("가입완료")
}

})
app.listen(3000,()=>{
  console.log(`Example app listening on port ${3000}`)
})