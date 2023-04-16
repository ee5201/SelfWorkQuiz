import coolsms from "coolsms-node-sdk"
import 'dotenv/config'
import { Board } from "./models/board.mode.js";

export function checkValidationPhone(myphone,isAuth) {
  if (myphone.length !== 10 && myphone.length !== 11) {
      console.log('에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!');
      return false 
  } else {
      return true;
  }
}

export function getTokentophone () {
  const tokenNum = 6
  const result = String(Math.floor(Math.random()*10 ** tokenNum)).padStart(tokenNum,0)
  return result
}

export async function sendTokenToPhone (myphone,getToken) {
  // const SMS_KEY = process.env.SMS_KEY
  // const SMS_SECRET = process.env.SMS_SECRET
  // const SMS_SENDER = process.env.SMS_SENDER

  // const mysms = coolsms.default;
  // const messageService = new mysms(SMS_KEY, SMS_SECRET);

  // const result = await messageService.sendOne({
  //     to: myphone,
  //     from: SMS_SENDER,
  //     text: getToken
  // })
  
  console.log(`${myphone}으로 인증번호 ${getToken} 문자가 전송되었습니다.`)


}
