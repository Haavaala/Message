import express from 'express';


const authRouter = express();

authRouter.post('/register', registerUser);

authRouter.post('/login', loginUser);

export default authRouter;