const { Router } = require('express');
const UserController = require('../controller/users');
const AuthController = require('../services/auth');

const userRouter = new Router();

userRouter.get('/', AuthController.verify, UserController.getUsers);
//userRouter.get('/:id',UserController.getUser);

userRouter.post('/',UserController.createUser);

userRouter.patch('/:id', AuthController.verify, UserController.updatePassword);

// userRouter.put('/:id',UserController.updateUser);

// userRouter.delete('/:id',UserController.deleteUser);

module.exports = userRouter;