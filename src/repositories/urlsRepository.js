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

function findShortUrls() {

}

function updateVisitCount() {

}

function deleteUrlDb() {

}

export { insertShortenUrl, findUrls, findShortUrls, updateVisitCount, deleteUrlDb };