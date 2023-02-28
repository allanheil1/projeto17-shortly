import { STATUS_CODE } from '../statusCode.js';

async function ranking(req, res){

    try{

    } catch(error) {
        console.log(error);
        return res.status(STATUS_CODE.SERVER_ERROR).send(error);
    }

}

export { ranking };