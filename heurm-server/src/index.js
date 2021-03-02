require('dotenv').config(); // .env 파일에서 환경변수 불러오기

const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();
const api = require('./api');

const mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser');

const jwt = require('jsonwebtoken');
const { jwtMiddleware } = require('lib/token');

mongoose.Promise = global.Promise; // Node 의 네이티브 Promise 사용
// mongodb 연결
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    (response) => {
        console.log('Successfully connected to mongodb');
    }
).catch(e => {
    console.error(e);
});

const port = process.env.PORT || 4000; // PORT 값이 설정되어있지 않다면 4000 을 사용합니다.

app.use(bodyParser());
app.use(jwtMiddleware);

// 바디파서 적용, 라우터 적용코드보다 상단에 있어야합니다.
// bodyparser : post/put/patch 같은 http method 들의 req body 에 json 형식으로 데이터를 넣어주면
// 이를 파싱해서 사용할 수 있도록 한다.
router.use('/api', api.routes()); // api 라우트를 /api 경로 하위 라우트로 설정

app.use(router.routes()).use(router.allowedMethods());
app.use(async ctx => {
    // 아무것도 없으면 {} 가 반환됩니다.
    ctx.body = ctx.request.body;
});

app.listen(port, () => {
    console.log('heurm server is listening to port ' + port);
});

const token = jwt.sign({ foo: 'bar' }, 'secret-key', { expiresIn: '7d' }, (err, token) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(token);
});