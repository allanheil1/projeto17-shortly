import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { STATUS_CODE } from '../statusCode.js';
import { insertUser, findUser, findTotalVisits, findLinks } from '../repositories/usersRepository.js';

dotenv.config();

async function signUp(req, res){

    const { name, email, password } = res.locals;

    const encryptedPassword = bcrypt.hashSync(password, 10);

    try{

        await insertUser(name, email, encryptedPassword);

        return res.sendStatus(STATUS_CODE.CREATED);

    } catch(error) {
        console.log(error.message);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
    }

}

async function signIn(req, res){

    const { email, password, name, id } = res.locals;

    const secret = process.env.SECRET || 'secretdefault123';

    const payload = { 
        username: name,
        userId: id
    };

    const token = jwt.sign(payload, secret);

    const response = {
        token: token
    };

    try{
        await findUser(email, password);

        return res.status(200).send(response);

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

async function getUserLinks(req, res){

    const userId = res.locals;

    try{

        const numberOfVisitsResponse = await findTotalVisits(userId);
        const visitsSum = numberOfVisitsResponse.rows[0].visitCount;

        const linksResponse = await findLinks(userId);

        const response = {
            id: linksResponse.rows[0].id,
            name: linksResponse.rows[0].name,
            visitCount:visitsSum,
            shortenedUrls: linksResponse.rows.map((row) => ({
                id: row.urlId,
                shortUrl: row.shortUrl,
                url: row.url,
                visitCount: row.visitCount
            }))
        }

        return res.status(STATUS_CODE.OK).send(response);

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

export { signUp, signIn, getUserLinks };