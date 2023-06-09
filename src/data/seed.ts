const { faker } = require("@faker-js/faker");
import User from "./UserSchema";
import Room from "./RoomSchema";
import Booking from "./BookingSchema";
import mongoose from "mongoose";
const bcrypt = require('bcrypt');

interface IRoom {
    _id?: string
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

async function autoGenerateUsers() {
    const psw = await bcrypt.hash('0000', 10);
    const loginUser = new User ({
        email: 'aldrosposirah@gmail.com',
        password: psw,
        name: 'no name',
        job_description: 'no job_description',
        phone: `no phone`,
        schedule: "no schedule",
        image: "no image"
    });
    await loginUser.save();
    for (let i = 0; i < 10; i++) {
        const user = new User ({
            name: faker.internet.userName(),
            job_description: faker.lorem.sentence(),
            phone: `+34 68973171${i}`,
            schedule: "[1,2,3]",
            image: "imgs/medusa.jpg",
            email: 'no email',
            password: 'no password'
        });
        await user.save();
    }
};

async function autoGenerateRooms() {
    for (let i = 1; i < 9; i++) {
        const room = new Room ({
            name: faker.location.city(),
            image1: "imgs/room.jpg",
            image2: "imgs/room.jpg",
            image3: "imgs/room.jpg",
            bedType: "Double",
            roomFloor: "First",
            facilities: faker.lorem.paragraph(),
            price: parseInt(`${i}00`),
            offer: false,
            discount: null
        });
        await room.save();
    }
};

async function autoGenerateBookings() {
    const rooms = await Room.find();
    for (let i = 0; i < 8; i++) {
        const booking = new Booking ({
            guest: faker.person.fullName(),
            image: "imgs/medusa2.jpg",
            specialRequest: faker.lorem.paragraph(),
            roomID: rooms[Math.floor(Math.random() * rooms.length)]._id, 
            orderDate: `10/2${i}/2023`,
            checkIn: `10/2${i+1}/2023`,
            checkOut: `10/2${i+2}/2023`
        });
        await booking.save();
    }
};

async function generarTodo() {
    mongoose.connect('mongodb://127.0.0.1:27017/travl');
    const db = mongoose.connection;
    await autoGenerateUsers();
    await autoGenerateRooms();
    await autoGenerateBookings();
    db.close();
};

generarTodo();
//ts-node src/data/seed.ts