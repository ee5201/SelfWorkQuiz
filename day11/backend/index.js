import express from "express"
import { checkVaild, getToken, sendTokenToSMS } from "./phone.js"
import cors from 'cors';
import { CheckValidationEmail, getWelcomeTemplate, sendWelcomeTemplateToEmail } from "./email.js";
import { Board } from "./MVC/controllers/Boards.controller.js";
import {TokenPhone} from "./MVC/controllers/Phone.controller.js"
import {Users} from "./MVC/controllers/User.controller.js"



const app = express()
app.use(cors())
app.use(express.json())

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc()));
const board = new Board()
app.get('/boards',board.FetchBoards)  

app.post('/boards', (req,res)=>{
  console.log(req.body)

  res.send("게시물 등록이 완료되었습니다.")
})

const tokenphone = new TokenPhone()
app.post('/token/phone',tokenphone.phone)

const users = new Users()
app.post('/users', users.users)


app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})
