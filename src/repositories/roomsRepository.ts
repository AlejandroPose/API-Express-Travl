interface Room {
    id?: number | string
    name: string
    image1: string
    image2: string
    image3: string
    bedType: string
    roomFloor: string
    facilities: string
    price: number
    offer: boolean
    discount: number | null
}; 

//Obteniendo datos de BBDD
export async function rooms_BD_getAll() {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute('SELECT * FROM rooms');
    //console.log(rows);
    return rows;
};

export async function rooms_BD_getUniqueRoom(id: number) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`SELECT * FROM rooms WHERE idrooms = ${id}`);
    //console.log(rows);
    return rows[0];
};

export async function rooms_BD_createRoom(room: Room) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`INSERT INTO rooms (name,image1,image2,image3,bedtype,roomfloor,facilities,price,offer,discount) values (${room.name},${room.image1},${room.image2},${room.image3},${room.bedType},${room.roomFloor},${room.facilities},${room.price},${room.offer},${room.discount})`);
    //console.log(rows);
    return { message: 'Room creada correctamente' };
};

export async function rooms_BD_editRoom(id: number, room: Room) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`UPDATE rooms SET name = ${room.name}, image1 = ${room.image1}, image2 = ${room.image2}, image3 = ${room.image3}, bedtype = ${room.bedType}, roomfloor = ${room.roomFloor}, facilities = ${room.facilities}, price = ${room.price}, offer = ${room.offer}, discount = ${room.discount} WHERE idrooms = ${id}`);
    //console.log(rows);
    return { message: 'Rooms editado correctamente' };
};

export async function rooms_BD_deleteRoom(id: number) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`DELETE FROM rooms WHERE idrooms = ${id}`);
    //console.log(rows);
    return { message: 'Room eliminado correctamente' };
};