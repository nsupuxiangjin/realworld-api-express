const express = require("express");
const userCtrl = require("../controller/user");
const userValidator = require('../validator/user')

const router = express.Router();

// 用户登陆
router.post("/users/login", userCtrl.login);

// 用户注册
// .bail()  如果前面验证失败就不会往后面走
// .custom()  自定义验证
router.post("/users", userValidator.register, userCtrl.register);

// 获取当前登陆用户
router.get("/user", userCtrl.getCurrentUser);

// 更新当前登陆用户
router.put("/user", userCtrl.updateCurrentUser);

module.exports = router;
