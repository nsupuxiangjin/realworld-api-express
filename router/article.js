/**
 * 文章相关路由
 */

const express = require('express')

const router = express.Router()

// 获取文章列表
router.get('/', async (req, res, next) => {
    try {
        // 处理请求
        res.send('文章列表')
    } catch (err) {
        next(err)
    }
})
// 获取用户关注的作者文章列表
router.get('/feed', async (req, res, next) => {
    try {
        // 处理请求
        res.send('获取用户关注的作者文章列表')
    } catch (err) {
        next(err)
    }
})

// 获取文章
router.get('/:slug', async (req, res, next) => {
    try {
        // 处理请求
        res.send('获取文章')
    } catch (err) {
        next(err)
    }
})

// 创建文章
router.post('/', async (req, res, next) => {
    try {
        // 处理请求
        res.send('获取文章')
    } catch (err) {
        next(err)
    }
})

// 更新文章
router.post('/:slug', async (req, res, next) => {
    try {
        // 处理请求
        res.send('更新文章')
    } catch (err) {
        next(err)
    }
})

// 更新文章
router.delete('/:slug', async (req, res, next) => {
    try {
        // 处理请求
        res.send('刪除文章')
    } catch (err) {
        next(err)
    }
})



module.exports = router