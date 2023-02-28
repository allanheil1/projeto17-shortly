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

function findUser() {

}

function validateUserExists() {

}

function findLinks() {

}

function findTotalVisits() {

}

export { validateUniqueEmail, insertUser, findUser, validateUserExists, findLinks, findTotalVisits };