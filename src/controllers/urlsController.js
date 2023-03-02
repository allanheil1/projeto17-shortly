import { nanoid } from 'nanoid';
import { STATUS_CODE } from '../statusCode.js';
import { insertShortenUrl, findUrls, findShortUrls, updateVisitCount, deleteUrlDb } from '../repositories/urlsRepository.js';

async function shortenUrl(req, res){

    const { url, userId } = res.locals;

    const shortenedUrl = nanoid(8);

    const response = {
        id: userId,
        shortUrl: shortenedUrl
    }

    try{

        await insertShortenUrl(url, shortenedUrl, userId)

        return res.status(STATUS_CODE.CREATED).send(response);

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

async function listUrl(req, res){

    const { id } = req.params;

    try{
        
        const url = await findUrls(id);

        if(url.rowCount > 0){
            const response = {
                id: url.rows[0].id,
                shortUrl: url.rows[0].shortUrl,
                url: url.rows[0].url
            }

            return res.status(STATUS_CODE.OK).send(response);

        }else{
            return res.sendStatus(STATUS_CODE.NOT_FOUND);
        }

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}


async function redirectToUrl(req, res){

    const { shortUrlParam } = req.params;

    try{

        const shortUrl = await findShortUrls(shortUrlParam);

        if(shortUrl.rowCount > 0){
            const url = `localhost:5000/${shortUrl.rows[0].shortUrl}`;
            const idUrl = shortUrl.rows[0].idUrl;
            
            await updateVisitCount(idUrl);

            return res.redirect(url);
        }else{
            return res.sendStatus(STATUS_CODE.NOT_FOUND);
        }

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