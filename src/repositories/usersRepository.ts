import User from "../data/UserSchema";

interface IUser {
    _id?: string
    name: string
    job_description: string
    phone: string
    schedule: string
    image: string
    email: string
    password: string
};

export async function users_BD_getAll() {
    const rows = await User.find();
    return rows;
};

export async function users_BD_getUniqueUser(_id: string) {
    const rows = await User.findOne({ _id });
    return rows;
};

export async function users_BD_createUser(user: IUser) {
    const newUser = new User(user);
    const rows = await newUser.save();
    return rows;
};

export async function users_BD_editUser(_id: string, newUser: IUser) {
    const rows = await User.findOneAndUpdate({_id}, {$set: {...newUser}}, {new: true});
    return rows;
};

export async function users_BD_deleteUser(_id: string) {
    const rows = await User.findOneAndDelete({_id});
    return rows;
};