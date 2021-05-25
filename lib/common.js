/**
 * 공통 메서드
 */

const commonLib = {
    /**
     * alert 메세지 출럭
     * 
     * @param Object res - Response 객체
     * @param String 출력 메세지
     */
    alert: function (msg, res) {
        
        return res.send(`<script>alert("${msg}");</script>`)
    }
}

module.exports = commonLib;