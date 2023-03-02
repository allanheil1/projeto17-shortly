import connection from "../database.js";

function findRanking() {

    return connection.query(
        `SELECT 
            users.id,
            users.name,
            COUNT(links."userId") AS "linksCount",
            SUM(COALESCE(links."visitCount", 0)) AS "visitCount"
        FROM
            users
        LEFT JOIN 
            links
        ON
            users.id = links."userId"
        GROUP BY
            users.id, users.name
        ORDER BY
            "visitCount" DESC NULLS LAST LIMIT 10
        `
    );

}

export { findRanking };