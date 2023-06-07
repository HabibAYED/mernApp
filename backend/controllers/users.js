import { v4 as uuid } from 'uuid';
import User from '../model/user.js';

let users = [];

export const getUsers = async (req, res) => {
    try{
        const user = await User.find();
        //console.log(`Users in the database: ${users}`);  
        res.status(200).json(user);


    }catch(error){
        res.status(404).json({message: error.message});
    }
}

export const createUser = async (req, res) => {   
    const user = req.body;
    const post = new User(user);
    try {
        await post.save();
        res.status(201).json(post);
        //User.push({...user, id: uuid()});
        // console.log(users)
        //console.log(`User [${user.username}] added to the database.`);

    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const deleteUser = async (req, res) => { 
    // console.log(`user with id ${req.params.id} has been deleted`);
    
    // users = users.filter((user) => user.id !== req.params.id);
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(409).json(user);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};

export const updateUser = async (req,res) => {
//     const {id} = req.params;
//     const { username, age}= req.body;
   
//     const user = users.find((user) => user.id === id);
//     console.log(user)
    
//     if (username) user.username = username;
//     if (age) user.age = age;
//     res.send( `User with ${id} has updated`);
    const user = req.body;
    try {
        const updateduser = await User.findByIdAndUpdate(req.params.id,user);
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}