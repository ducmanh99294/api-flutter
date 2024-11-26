import express from 'express'
import userController from '../controllers/userController.mjs'

const userRouters = express.Router();
userRouters.get('/user', userController.getAllUsers);

export default userRouters