import { STATUS_CODE } from '../statusCode.js';
import { findRanking } from '../repositories/rankingRepository.js';

async function ranking(req, res){

    try{

        const getFromDb = await findRanking();

        const ranking = getFromDb.rows;

        const response = ranking.map((r) => ({
            id: r.id,
            name: r.name,
            linksCount: r.linksCount,
            visitCount: r.visitCount
        }));
        
        return res.status(STATUS_CODE.OK).send(response);

    } catch(error) {
        console.log(error);
        return res.sendStatus(STATUS_CODE.SERVER_ERROR);
    }

}

export { ranking };