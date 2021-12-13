const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const router = require('./router')
const errorHandler = require('./middleware/error-handler')
require('./model')

const app = express()

app.use(morgan('dev')) // 日志输出

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors())

const PROT = process.env.PROT || 3000

// 挂载路由
app.use('/api', router)

// 挂载服务端统一处理错误中间件
app.use(errorHandler())


app.listen(PROT, () => console.log(`server is running at http://localhost:${PROT}`))