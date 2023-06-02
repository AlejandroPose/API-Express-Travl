var faker = require("@faker-js/faker");

async function autoGenerateUsers() {
    for (let i = 0; i < 10; i++) {
        const mysql = require('mysql2/promise');
        const connection = await mysql.createConnection({
            host:'localhost', 
            user: 'root', 
            password: 'top_secret_3306',
            database: 'travldashboard'
        });
        const user = {
            name: faker.person.firstName(),
            job_description: faker.lorem.sentence(),
            phone: "+34 689731715",
            schedule: "[2,4,6]",
            image: "imgs/medusa.jpg"
        };
        const [rows, fields] = await connection.execute(`INSERT INTO users (name,jobdescription,phone,schedule,image) values (${user.name},${user.job_description},${user.phone},${user.schedule},${user.image})`);
    }
};

async function autoGenerateBookings() {
    for (let i = 0; i < 10; i++) {
        const mysql = require('mysql2/promise');
        const connection = await mysql.createConnection({
            host:'localhost', 
            user: 'root', 
            password: 'top_secret_3306',
            database: 'travldashboard'
        });
        const booking = {
            guest: faker.person.fullName(),
            image: "imgs/medusa2.jpg",
            specialRequest: faker.lorem.paragraph(),
            roomID: 1,
            orderDate: `10/20/202${i}`,
            checkIn: `10/22/202${i}`,
            checkOut: `10/24/202${i}`
        };
        const [rows, fields] = await connection.execute(`INSERT INTO bookings (guest,image,orderdate,checkin,checkout,specialrequest,roomid) values (${booking.guest},${booking.image},${booking.orderDate},${booking.checkIn},${booking.checkOut},${booking.specialRequest},${booking.roomID})`);
    }
};

async function autoGenerateRooms() {
    for (let i = 0; i < 10; i++) {
        const mysql = require('mysql2/promise');
        const connection = await mysql.createConnection({
            host:'localhost', 
            user: 'root', 
            password: 'top_secret_3306',
            database: 'travldashboard'
        });
        const room = {
            name: faker.location.city(),
            image1: "imgs/room.jpg",
            image2: "imgs/room.jpg",
            image3: "imgs/room.jpg",
            bedType: "Double",
            roomFloor: "First",
            facilities: faker.lorem.paragraph(),
            price: faker.number.int(),
            offer: false,
            discount: null
        };
        const [rows, fields] = await connection.execute(`INSERT INTO rooms (name,image1,image2,image3,bedtype,roomfloor,facilities,price,offer,discount) values (${room.name},${room.image1},${room.image2},${room.image3},${room.bedType},${room.roomFloor},${room.facilities},${room.price},${room.offer},${room.discount})`);
    }
};

async function generarTodo() {
    await autoGenerateUsers();
    await autoGenerateRooms();
    await autoGenerateBookings();
};

generarTodo();