import jwt from 'jsonwebtoken';

const auth = async (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        const isCustomToken = token.length < 500;
        let payload;
        if (token && isCustomToken){
            console.log('hi')
            payload = jwt.verify(token, 'test');
            console.log('payload', payload)

            req.userId = payload?.id;
            console.log('req.userId', req.userId);
        }else {
            payload = jwt.decode(token);
            req.userId = payload?.sub
        }
    next();

    } catch (error) {
        console.log(error);
        res.status(400).json({"msg":"authentication failed"});
    }
}

export default auth;