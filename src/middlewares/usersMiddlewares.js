import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import STATUS_CODE from '../statusCode.js';
import { signUpSchema, signInSchema } from '../schemas/signSchema.js';
import { validateUniqueEmail, validateUserExists } from '../repositories/usersRepository.js';

dotenv.config();

async function validateSignUp(req, res, next){

    const user = req.body;

    const isValid = signUpSchema.validate(req.body);

    if(isValid.error){
        return res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).send(error);
    }

    const emailExists = await validateUniqueEmail(user.email);

    if(emailExists.rowCount > 0){
        return res.sendStatus(STATUS_CODE.CONFLICT);
    }

    res.locals = user;

    next();
    
}

async function validateSignIn(req, res, next){

    try{

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

async function validateHeader(req, res, next){

    try{

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

export { validateSignIn, validateSignUp, validateHeader };

