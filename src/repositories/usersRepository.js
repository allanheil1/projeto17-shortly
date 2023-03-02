import connection  from "../database.js";

function validateUniqueEmail(email) {
    return connection.query(
        `
        SELECT
            *
        FROM
            users
        WHERE
            email=$1
        `,
        [email]
    );
}

function insertUser(name, email, encryptedPassword) {

    return connection.query(
        `INSERT INTO 
            users 
            (name, email, password) 
        VALUES 
            ($1, $2, $3);`,
        [name, email, encryptedPassword]
      );
}

function findUser(email, password) {
    return connection.query(
        `SELECT 
            * 
        FROM 
            users 
        WHERE 
            email=$1 
        AND 
            password=$2`,
        [email, password]
      );
}

function validateUserExists(id) {
    return connection.query(
        `SELECT 
            * 
        FROM 
            users 
        WHERE 
            id=$1 
        `,
        [id]
      );
}

function findLinks(id) {
    return connection.query(
        `SELECT 
            users.id AS id, 
            users.name AS name, 
            links.id AS "urlId", 
            links."shortUrl", 
            links.url, 
            links."visitCount" 
        FROM 
            links 
        JOIN 
            users 
        ON 
            links."userId" = users.id 
        WHERE 
            links."userId"=$1 
        GROUP BY 
            users.id, 
            users.name, 
            links.id`,
        [id]
      );
}

function findTotalVisits(id) {
    return connection.query(
        `SELECT 
            SUM(links."visitCount") AS "visitCount" 
        FROM 
            links
        JOIN 
            users 
        ON 
            links."userId" = users.id 
        WHERE 
            links."userId"=$1`,
        [id]
      );
}

export { validateUniqueEmail, insertUser, findUser, validateUserExists, findLinks, findTotalVisits };