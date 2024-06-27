import jwt from 'jsonwebtoken';

const auth = async (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        const isCustomToken = token.length < 500;
        let payload;
        if (token && isCustomToken){
            payload = jwt.verify(token, process.env.SECRET_KEY);

            req.userId = payload?.id;
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