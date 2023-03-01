import { nanoid } from 'nanoid';
import { STATUS_CODE } from '../statusCode.js';
import { insertShortenUrl, findUrls, findShortUrls, updateVisitCount, deleteUrlDb } from '../repositories/urlsRepository.js';

async function shortenUrl(req, res){

    const { url, userId } = res.locals;

    const shortenedUrl = nanoid(8);

    try{

        await insertShortenUrl(url, shortenedUrl, userId)

        return res.status(STATUS_CODE.CREATED).send(shortenedUrl);

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