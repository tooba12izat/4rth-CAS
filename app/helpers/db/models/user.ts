import mongoose, { Document, Schema,models } from 'mongoose';

const UserSchema:Schema = new Schema({
    _id:{type:mongoose.Schema.Types.ObjectId},
    name: { type: String, required: true },
    country: { type: String, required: true},
    category:{type: String, required: true},
    sailno:{type: String, required: true},
},{ timestamps: true });

const User=  models.User || mongoose.model('User', UserSchema)

export default User;