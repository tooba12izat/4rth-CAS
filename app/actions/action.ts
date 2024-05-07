'use server'
import { revalidatePath } from 'next/cache'
import { connectDb } from '../helpers/db/dbConn';
import User from '../helpers/db/models/user';
import {redirect} from "next/navigation"
import mongoose from 'mongoose';

export const createAction=async (formData:FormData)=>{
    console.log("entered action")
    await connectDb();
    const name = formData.get('name');
    const country = formData.get('country')
    const category = formData.get('category');
    const sailno = formData.get('sailno');
console.log("form data",name,country,category,sailno)
    try {
        const newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            name,
            country,
            category,
            sailno
        });
        await newUser.save();
        console.log(newUser)
    }
    catch (error) {
        console.log(error)
        return {
            message: 'Database Error: Failed to Create User.',
        };
    }

    revalidatePath('/players');
    // redirect('/users');

}