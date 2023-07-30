const express = require('express')
const app = express()
const port = 3000

app.get('/trang-chu', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening ot port http://localhost:${port}`)
})