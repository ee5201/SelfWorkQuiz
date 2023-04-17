import { checkVaild, getToken, sendTokenToSMS } from "../../phone.js";

export class TokenPhone {
  phone = (req,res) =>{
    const myphone = req.body.aaa
    console.log(myphone)
  
    const isValid = checkVaild(myphone);
    if(isValid){
      const mytoken = getToken();
  
      sendTokenToSMS(myphone,mytoken);
      res.send("인증완료!!")
    }
  }
}