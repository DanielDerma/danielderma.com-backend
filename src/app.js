const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/", (req, res) => {
  res.json({ msg: "200" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/`)
})