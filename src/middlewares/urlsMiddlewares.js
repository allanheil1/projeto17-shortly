import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { STATUS_CODE } from '../statusCode.js';

dotenv.config();

async function validateUrl(req, res, next){

    try{

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

async function validateUrlBearer(req, res, next){

    try{

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

export { validateUrl, validateUrlBearer };