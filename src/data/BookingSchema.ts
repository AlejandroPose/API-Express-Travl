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
        type: Date,
        require: true
    },
    checkIn: {
        type: Date,
        require: true
    },
    checkOut: {
        type: Date,
        require: true
    },
});

export default mongoose.model('Booking', BookingSchema);