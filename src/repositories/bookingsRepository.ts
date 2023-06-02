interface Booking {
    id?: number | string
    guest: string
    image: string
    specialRequest: string
    roomID: number
    orderDate: string
    checkIn: string
    checkOut: string
}; 

//Obteniendo datos de BBDD
export async function bookings_BD_getAll() {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute('SELECT * FROM bookings');
    //console.log(rows);
    return rows;
};

export async function bookings_BD_getUniqueBooking(id: number) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`SELECT * FROM bookings WHERE idbookings = ${id}`);
    //console.log(rows);
    return rows[0];
};

export async function bookigns_BD_createBooking(booking: Booking) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`INSERT INTO bookings (guest,image,orderdate,checkin,checkout,specialrequest,roomid) values (${booking.guest},${booking.image},${booking.orderDate},${booking.checkIn},${booking.checkOut},${booking.specialRequest},${booking.roomID})`);
    //console.log(rows);
    return { message: 'Booking creada correctamente' };
};

export async function bookings_BD_editBooking(id: number, booking: Booking) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`UPDATE bookings SET guest = ${booking.guest}, image = ${booking.image}, orderdate = ${booking.orderDate}, checkin = ${booking.checkIn}, checkout = ${booking.checkOut}, specialrequest = ${booking.specialRequest}, roomid = ${booking.roomID} WHERE idbookings = ${id}`);
    //console.log(rows);
    return { message: 'Booking editado correctamente' };
};

export async function bookings_BD_deleteBooking(id: number) {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'top_secret_3306',
        database: 'travldashboard'
    });
    const [rows, fields] = await connection.execute(`DELETE FROM bookings WHERE idbookings = ${id}`);
    //console.log(rows);
    return { message: 'Booking eliminado correctamente' };
};