import { nanoid } from 'nanoid';
import STATUS_CODE from '../statusCode.js';

async function shortenUrl(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

async function listUrl(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}


async function redirectToUrl(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}


async function deleteUrl(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

export { shortenUrl, listUrl, redirectToUrl, deleteUrl };