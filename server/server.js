const express=require('express')

const cookieParser=require('cookie-parser')

const dotenv=require('dotenv')

dotenv.config()

const AuthRouter=require('./Route/userRoute')

const {app,server } = require('./Scoket/socket')

app.use(cookieParser())

const cors=require('cors')


const db=require('./db')

const PORT=process.env.PORT||4000



app.use(express.json())//to parse the incoming requests with json payloads(from req.body)

app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true // Allow credentials to be sent and received
  }))


app.use('/api/auth',AuthRouter)




// app.get('/',(req,res)=>{

//     console.log('hello')
    
//     res.send('hello')
// })

server.listen(PORT,()=>{
    console.log(`SERVER IS RUNNING AT PORT 2000`)
})