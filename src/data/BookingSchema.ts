import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    guest: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    specialRequest: {
        type: String,
        require: true
    },
    roomID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        require: true
    },
    orderDate: {
        type: String,
        require: true
    },
    checkIn: {
        type: String,
        require: true
    },
    checkOut: {
        type: String,
        require: true
    },
});

export default mongoose.model('Booking', BookingSchema);