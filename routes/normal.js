//botalble에 대한 응답을 해줄수없는 경우 출력될 페이지임
var express = require('express')
var router = express.Router();

router.get('/', (req, res ) => {
    res.send("localhost:3000/prointerview로 리액트에서 요청해서 이 문자를 보냄")
})
router.post('/write', (req, res ) => {    
    res.send("localhost:3000/prointerview/write 로 리액트에서 요청해서 글쓰기 폼태그 보여줄거임")
})

module.exports = router