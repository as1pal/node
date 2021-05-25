/**
 * 로그인 여부 체크후 추가처리 미들웨어
 */

module.exports.loginSession = (req, res, next) => {
    req.isLogin = res.isLogin = res.locals.isLogin = false;
    if (req.session.memId) { //로그인 성공
        res.isLogin = res.isLogin = res.locals.isLogin = true;
    }
    next();
};