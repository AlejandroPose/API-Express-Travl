import Booking from "../data/BookingSchema"

interface IBooking {
    _id?: string
    guest: string
    image: string
    specialRequest: string
    roomID: string
    orderDate: string
    checkIn: string
    checkOut: string
}; 

export async function bookings_BD_getAll() {
    const rows = await Booking.find();
    return rows;
};

export async function bookings_BD_getUniqueBooking(_id: string) {
    const rows = await Booking.findOne({ _id });
    return rows;
};

export async function bookigns_BD_createBooking(booking: IBooking) {
    const newBooking = new Booking(booking);
    const rows = await newBooking.save();
    return rows;
};

export async function bookings_BD_editBooking(_id: string, newBooking: IBooking) {
    const rows = await Booking.findOneAndUpdate({_id}, {$set: {...newBooking}}, {new: true});
    return rows;
};

export async function bookings_BD_deleteBooking(_id: string) {
    const rows = await Booking.findOneAndDelete({_id});
    return rows;
};