const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/linkdin' , (req,res)=>{
    res.send('https://www.linkedin.com/in/amartya-sankar-das-242095260/')
})

app.get('/login' , (req,res)=>{
  res.send('<h1>  Login Page</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
