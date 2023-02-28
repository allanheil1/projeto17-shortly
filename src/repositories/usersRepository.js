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

function insertUser() {

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