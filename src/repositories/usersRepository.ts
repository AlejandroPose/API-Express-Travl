interface User {
    id?: number | string
    name: string
    job_description: string
    phone: string
    schedule: number[]
    status?: string
    image: string
};  

//Obteniendo datos de BBDD
export async function users_BD_getAll() {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute('SELECT * FROM users');
    //console.log(rows);
    return rows;
};

export async function users_BD_getUniqueUser(id: number) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`SELECT * FROM users WHERE idusers = ${id}`);
    //console.log(rows);
    return rows[0];
};

export async function users_BD_createUser(user: User) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`INSERT INTO users (name,jobdescription,phone,schedule,image) values (${user.name},${user.job_description},${user.phone},${user.schedule},${user.image})`);
    //console.log(rows);
    return { message: 'Usuario creado correctamente' };
};

export async function users_BD_editUser(id: number, user: User) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`UPDATE users SET name = ${user.name}, jobdescription = ${user.job_description}, phone = ${user.phone}, schedule = ${user.schedule}, image = ${user.image} WHERE idusers = ${id}`);
    //console.log(rows);
    return { message: 'Usuario editado correctamente' };
};

export async function users_BD_deleteUser(id: number) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`DELETE FROM users WHERE idusers = ${id}`);
    //console.log(rows);
    return { message: 'Usuario eliminado correctamente' };
};




// //Obteniendo datos de JSON
// const users: User[] = require('../data/users.json');

// export const getUsers = async () => {
//     return users;
// };

// export const getUniqueUser = async (id: number) => {
//     return users.find((user: User) => user.id == id);
// };

// const write = (users: User[]) => {
//     fs.writeFileSync("src/data/users.json", JSON.stringify(users, null, 2))
// };

// export const createUser = async (user: User) => {
//     const id = uuidv4();
//     user.id = id;
//     write([...users, user]);
//     console.log(user);
//     return user;
// };