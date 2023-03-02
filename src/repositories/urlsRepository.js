import connection  from "../database.js";

function insertShortenUrl(url, shortenedUrl, userId) {
    return connection.query(
        `INSERT INTO 
            links 
            (url, "shortUrl", "userId") 
        VALUES 
            ($1, $2, $3);`,
        [url, shortenedUrl, userId]
      );
}

function findUrls(id) {
    return connection.query(
        `SELECT * FROM 
            links 
        WHERE 
            id=$1`,
        [id]
    );
}

function findShortUrls(shortUrl) {
    return connection.query(
        `SELECT * FROM 
            links 
        WHERE 
            "shortUrl"=$1`, 
        [shortUrl]
        );
}

function updateVisitCount(id) {
    return connection.query(
        `UPDATE 
            links 
        SET 
            "visitCount"= ("visitCount" + 1) 
        WHERE 
            id=$1`,
        [id]
      );
}

function deleteUrlDb(id) {
    return connection.query(
        `DELETE FROM 
            links 
        WHERE 
            id=$1`,
         [id]
    );
}

export { insertShortenUrl, findUrls, findShortUrls, updateVisitCount, deleteUrlDb };