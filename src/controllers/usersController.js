import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { STATUS_CODE } from '../statusCode.js';
import { insertUser } from '../repositories/usersRepository.js';

dotenv.config();

async function signUp(req, res){

    const { name, email, password } = res.locals;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    try{

        await insertUser(name, email, encryptedPassword);

        return res.sendStatus(STATUS_CODE.CREATED);

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

async function signIn(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

async function getUserLinks(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

export { signUp, signIn, getUserLinks };