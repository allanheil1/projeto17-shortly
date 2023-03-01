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

function validateUserExists(userId) {
    return connection.query(
        `SELECT 
            * 
        FROM 
            users 
        WHERE 
            id=$1 
        `,
        [userId]
      );
}

function findLinks() {

}

function findTotalVisits() {

}

export { validateUniqueEmail, insertUser, findUser, validateUserExists, findLinks, findTotalVisits };