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

function findUrls() {

}

function findShortUrls() {

}

function updateVisitCount() {

}

function deleteUrlDb() {

}

export { insertShortenUrl, findUrls, findShortUrls, updateVisitCount, deleteUrlDb };