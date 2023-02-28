import { nanoid } from 'nanoid';
import { STATUS_CODE } from '../statusCode.js';

async function shortenUrl(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

async function listUrl(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}


async function redirectToUrl(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}


async function deleteUrl(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

export { shortenUrl, listUrl, redirectToUrl, deleteUrl };