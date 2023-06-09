import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image1: {
        type: String,
        require: true
    },
    image2: {
        type: String,
        require: true
    },
    image3: {
        type: String,
        require: true
    },
    bedType: {
        type: String,
        require: true
    },
    roomFloor: {
        type: String,
        require: true
    },
    facilities: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    offer: {
        type: Boolean,
        require: true
    },
    discount: {
        type: Number || null,
        require: true
    }
});

export default mongoose.model('Room', RoomSchema);