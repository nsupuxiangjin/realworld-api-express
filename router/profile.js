/**
 * 用户资料相关路由
 */

const express = require('express')

const router = express.Router()

// 获取指定用户的资料
router.get('/:username', async (req, res, next) => {
    try {
        // 处理请求
        res.send('获取指定用户的资料')
    } catch (err) {
        next(err)
    }
})
// 关注用户
router.post('/:username/follow', async (req, res, next) => {
    try {
        // 处理请求
        res.send('关注用户')
    } catch (err) {
        next(err)
    }
})

// 取消关注用户
router.delete('/:username/follow', async (req, res, next) => {
    try {
        // 处理请求
        res.send('取消关注用户')
    } catch (err) {
        next(err)
    }
})



module.exports = router