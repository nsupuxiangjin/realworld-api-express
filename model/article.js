const mongoose = require('mongoose')
const baseModel = require('./base-model')

const ArticleSchema = new mongoose.Schema({
    ...baseModel,
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: null
    },
    iamge: {
        type: String,
        default: null
    }
})

module.exports = ArticleSchema