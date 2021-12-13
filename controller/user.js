const { User } = require('../model')

// 登陆
exports.login = async (req, res, next) => {
    try {
        // 1.获取请求体数据
        console.log(req.body)
        // 2.数据验证
        // 3.验证通过，将保存到数据库
        // 4.发送成功响应
        res.send('login')
    } catch (err) {
        next(err)
    }
}

// 注册
exports.register = async (req, res, next) => {
    try {
        // 1.获取请求体数据
        console.log(req.body)
        // 2.数据验证
        // 2.1 基本数据验证
        // 2.2 业务数据验证

        // 3.验证通过，将保存到数据库
        const user = new User(req.body.user)

        // 保存到数据库
        await user.save()

        // 4.发送成功响应
        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}

// 获取当前登陆用户
exports.getCurrentUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send('register')
    } catch (err) {
        next(err)
    }
}

// 更新当前登陆用户
exports.updateCurrentUser = async (req, res, next) => {
    try {
        // 处理请求
        res.send('register')
    } catch (err) {
        next(err)
    }
}


