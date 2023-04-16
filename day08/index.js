import express from"express"
import cors from "cors"
import mongoose from "mongoose"
import { checkValidationPhone, getTokentophone, sendTokenToPhone } from "./phone.js"
import { Board } from "./models/board.mode.js"

const app = express()
app.use(express.json())
app.use(cors())

await mongoose.connect('mongodb://my-database:27017/mydocker01');


app.get("/token/phone",async(req,res)=>{
  const result = await Board.find()
  res.send(result)

})

app.post('/token/phone', async (req,res)=>{
  const myphone = req.body.phone
  const isValidPhone = checkValidationPhone(myphone)

  if(!isValidPhone){
    return res.send("올바른 핸드폰 번호가 아닙니다.")
  }

  const CheckBoardPhone = await Board.findOne({phone:myphone})

  if(CheckBoardPhone){
    //기존에 번호가 있다면 최신 토큰을 덮어씌운다
    const newToken = getTokentophone()
    sendTokenToPhone(myphone,newToken)
    CheckBoardPhone.token = newToken
    CheckBoardPhone.isAuth = false
    await CheckBoardPhone.save()
    return res.send("핸드폰 번호 업데이트 완료 하였습니다.")
  }else{
    //새로운 핸드폰 번호라면 새로운 Board를 생성한다.
    const newBoard = new Board({
      token: getTokentophone(),
      phone: myphone,
      isAuth: false
    })
    await newBoard.save()
    return res.send("핸드폰 번호 등록 완료 하였습니다.")

  }
})

app.patch("/token/phone",async(req,res)=> {
  const {phone,token} = req.body

  const existBoard = await Board.findOne({phone})

  if(!existBoard){
    
    res.send("해당 번호가 존재하지 않습니다.")
  }
  if(existBoard.token !== token){
    res.send("인증된 토큰이 일치하지 않습니다.")
  }

  existBoard.isAuth = true
  await existBoard.save()

  return res.send("인증완료")
  
})
// app.patch('/tokens/phone', async (req, res) => {
//   const { phone, token } = req.body

//   const existingBoard = await Board.findOne({ phone })

//   if (!existingBoard) {
//     return res.status(400).send('해당 핸드폰 번호가 존재하지 않습니다.')
//   }

//   if (existingBoard.token !== token) {
//     return res.status(400).send('인증 토큰이 일치하지 않습니다.')
//   }

//   existingBoard.isAuth = true
//   await existingBoard.save()

//   return res.status(200).send('인증 완료')
// })



app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
