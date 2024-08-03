import express from 'express';
import { login, logout, refreshToken, register } from './authCont';
const router = express.Router()

router
.post('/register', register)
.get('/refresh', refreshToken)
.post('/login', login)
.get('/logout', logout)

export default router;