const express = require('express');
const router = express.Router();

const member = require("../models/member"); //member model  
router.route("/join")
    /** 회원 가입 양식 */
    .get((req, res, next) => {
        res.render("member/form");
    })
    /** 회원 가입 처리 */
    .post((req, res, next) => {
        console.log(req.body);
        req.send("");
    });

module.exports = router;