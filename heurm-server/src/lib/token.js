const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');

/**
 * JWT 토큰 생성
 * @param {any} payload
 * @returns {string} token
 */

function generateToken(payload) {
    return new Promise(
        (resolve, reject) => {
            jwt.sign(
                payload,
                jwtSecret,
                {
                    expiresIn: '7d'
                }, (error, token) => {
                    if (error) reject(error);
                    resolve(token);
                }
            );
        }
    );
};

function decodeToken(token) {
    return new Promise(
        (resolve, reject) => {
            jwt.verify(token, jwtSecret, (error, decoded) => {
                if (error) reject(error);
                resolve(decoded);
            });
        }  
    );
}

exports.jwtMiddleware = async (ctx, next) => {
    const token = ctx.cookies.get('access_token'); // ctx 에서 access_token 을 읽어온다<div className=""></div>
    if (!token) return next(); // token 이 없으면 다음 작업을 진행한다

    try {
        const decoded = await decodeToken(token); // 토큰을 디코딩한다

        // 토큰 만료일이 하루밖에 안남았으면 토큰을 재발급한다.
        if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
            // 하루가 지나면 갱신해준다
            const { _id, profile } = decoded;
            const freshToken = await generateToken({ _id, profile }, 'account');
            ctx.cookies.set('access_token', freshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
                httpOnly: true
            });
        }

        // ctx.request.user 에 디코딩된 값을 넣어준다
        ctx.request.user = decoded;
    } catch (e) {
        // token validate 실패
        ctx.request.user = null;
    }

    return next();
}

exports.generateToken = generateToken;