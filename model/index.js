const mongoose = require('mongoose')
const {dbUrl} = require('../config/config.default')

// 连接MongiDB数据库
mongoose.connect(dbUrl,{})

const db = mongoose.connection

// 当连接失败的时候
db.on('error', err => {
    console.log('MongDB 数据库连接失败', err)
})

// 当连接成功的时候
db.once('open',function(){
    console.log('MongDB 数据库连接成功！')
})

// 组织导出模型类
module.exports = {
    User: mongoose.model('User', require('./user')),
    Article: mongoose.model('Article', require('./article'))
}
