//inisialisasi library
const express = require("express")
const app = express()

//import route siswa
const siswa = require("./router/siswa")
app.use("/siswa", siswa)

//membuat web server dengan port 8000
app.listen(8000, () => {
    console.log("server run on port 8000")
})
