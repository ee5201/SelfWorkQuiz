import { getDate } from "./utilles.js"
import nodemailer from "nodemailer"
import 'dotenv/config'


export function CheckValidationEmail (email) {
  if(email === undefined && !email.includes("@")){
    console.log("에러발생")
    return false
  }else{
    return true
  }
}

export function getTempletEmail (user) {
  return `
  <html>
    <body>
    <h1> ${user.name}님 가입을 환영합니다.</h1>
    </hr>
      <div>이름:${user.name}</div>
      <div>전화번호:${user.Number}</div>
      <div>좋아하는사이트:${user.Likesite}</div>
      <div>가입일:${getDate()}</div>
    </body>
  </html> 
  `

}

export async function sendTOEmailTOsms (email,templet) {
  const Email_User = process.env.EMAIL_USER 
  const Email_Pass = process.env.EMAIL_PASS
  const Email_Sender = process.env.EMAIL_SENDER 

  const trans = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: Email_User,
      pass: Email_Pass
    },
  });

  const result = await trans.sendMail({
    from: Email_Sender,
    to: email,
    subject: "가입을 환영합니다", // Subject line
    text: "가입을 환영합니다.", // plain text body
    html: templet, // html body
  });
  console.log(result)
}