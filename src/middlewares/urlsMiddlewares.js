import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { STATUS_CODE } from '../statusCode.js';
import { urlSchema } from '../schemas/urlSchema.js';

dotenv.config();

async function validateUrl(req, res, next){

    const { url } = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const secret = process.env.SECRET;

    let dataFromJwt;

    try{

        if(!token){
            return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
        }
    
        const isValid = signUpSchema.validate({ url });
    
        if(isValid.error){
            return res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).send(error);
        }
    
        const decode = jwt.verify(token, secret);

        dataFromJwt = {
            url: url,
            userId: decode.userId
        };

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

    res.locals = data;

    next();

}

async function validateUrlBearer(req, res, next){

    try{

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

export { validateUrl, validateUrlBearer };