import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { STATUS_CODE } from '../statusCode.js';
import { urlSchema } from '../schemas/urlSchema.js';
import { findUrls } from '../repositories/urlsRepository.js';

dotenv.config();

async function validateUrl(req, res, next){

    const { url } = req.body;
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    const secret = process.env.SECRET || 'secretdefault123';

    let dataFromJwt;

    try{

        if(!token){
            return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
        }
    
        const isValid = urlSchema.validate({ url });
    
        if(isValid.error){
            return res.sendStatus(STATUS_CODE.UNPROCESSABLE_ENTITY);
        }
    
        const decode = jwt.verify(token, secret);

        dataFromJwt = {
            url: url,
            userId: decode.userId
        };

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.UNAUTHORIZED).send(error);
    }

    res.locals = dataFromJwt;

    next();

}

async function validateUrlBearer(req, res, next){

    const { id } = req.params;

    const { authorization } = req.headers;

    const token = authorization?.replace('Bearer ', '');

    if(!token){
        return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }

    const secret = process.env.SECRET || 'secretdefault123';

    try{

        const urlResponse = await findUrls(id);

        if(urlResponse.rowCount <= 0){
            return res.sendStatus(STATUS_CODE.NOT_FOUND);
        }

        const decode = jwt.verify(token, secret);

        if(urlResponse.rows[0].userId !== decode.userId){
            return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
        }

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

    res.locals = id;

    next();

}

export { validateUrl, validateUrlBearer };