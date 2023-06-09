import Room from "../data/RoomSchema";

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

export async function rooms_BD_getAll() {
    const rows = await Room.find();
    return rows;
};

export async function rooms_BD_getUniqueRoom(_id: string) {
    const rows = await Room.findOne({ _id });
    return rows;
};

export async function rooms_BD_createRoom(room: IRoom) {
    const newRoom = new Room(room);
    const rows = await newRoom.save();
    return rows;
};

export async function rooms_BD_editRoom(_id: string, newRoom: IRoom) {
    const rows = await Room.findOneAndUpdate({_id}, {$set: {...newRoom}}, {new: true});
    return rows;
};

export async function rooms_BD_deleteRoom(_id: string) {
    const rows = await Room.findOneAndDelete({_id});
    return rows;
};