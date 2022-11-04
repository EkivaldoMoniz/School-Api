async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection;
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'school'
    });
    console.log("conectou no banco");

    global.connection = connection;

    return connection;
}

exports.getConnection = () => connect();


