import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { STATUS_CODE } from '../statusCode.js';
import { signUpSchema, signInSchema } from '../schemas/signSchema.js';
import { validateUniqueEmail, validateUserExists } from '../repositories/usersRepository.js';

dotenv.config();

async function validateSignUp(req, res, next){

    const user = req.body;

    const isValid = signUpSchema.validate(req.body);

    if(isValid.error){
        return res.sendStatus(STATUS_CODE.UNPROCESSABLE_ENTITY);
    }

    const emailExists = await validateUniqueEmail(user.email);

    if(emailExists.rowCount > 0){
        return res.sendStatus(STATUS_CODE.CONFLICT);
    }

    res.locals = user;

    next();

}

async function validateSignIn(req, res, next){

    const { email, password } = req.body;

    let loginData;

    const isValid = signInSchema.validate(req.body);

    if(isValid.error){
        return res.sendStatus(STATUS_CODE.UNPROCESSABLE_ENTITY);
    }

    const userExists = await validateUniqueEmail(email);

    if(userExists.rowCount === 0){
        return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }

    const passwordCorrect = bcrypt.compareSync(password, userExists.rows[0].password);

    if(!passwordCorrect){
        return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }

    if(userExists.rowCount > 0 && passwordCorrect){
        loginData = {
            email: email,
            password: userExists.rows[0].password,
            name: userExists.rows[0].name,
            id: userExists.rows[0].id
          };
    }

    res.locals = loginData;

    next();

}

async function validateHeader(req, res, next){

    const { authorization } = req.headers;

    const token = authorization?.replace('Bearer ', '');

    const secret = process.env.SECRET || 'secretdefault123';

    const decode = jwt.verify(token, secret);

    if(!decode){
        return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }

    const userId = decode.userId;

    const userExists = validateUserExists(userId);

    if(userExists.rowCount <= 0){
        return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    res.locals = userId;

    next();

}

export { validateSignIn, validateSignUp, validateHeader };

