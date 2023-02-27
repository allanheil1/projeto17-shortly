import STATUS_CODE from '../statusCode.js';

async function ranking(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

export { ranking };