const express = require('express')
const path = require('path')
const bp = require('body-parser')
const app = express()
const router = require('./server/routes.js')
app.use(bp.json()) //important
app.use(express.static(path.join(__dirname, './public/dist/public')))
router(app)
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});
app.listen(8000)