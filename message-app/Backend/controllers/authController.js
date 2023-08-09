import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { supabase } from '../server.js';

const registerUser = async (req, res) => {
    const password = await bcrypt
    .genSalt(10)
    .then((salt) => {
        return bcrypt.hash(req.body.password, salt)
    })
    .catch((err) => console.error(err.message))

const oldUser = await supabase
    .from('users')
    .select('email')
    .eq('email', req.body.email)

if(oldUser && oldUser.data?.length || 0 > 0)
    return res.status(400).json({error: 'User already registered with that email'})

const { data, error } = await supabase
    .from('users')
    .insert([{
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username, 
        email: req.body.email,
        password: password
    }])
    .select()


if (error)
    return res.status(400).json(error)

res.status(200).json(data)
}

const loginUser = async (req, res) => {
    const {email, password} = req.body

    const {data, error} = await supabase
    .from('users')
    .select('*')
    .eq('email', email)

    if (error)
        return res.status(400).json(error)

    const user = data[0]

    if (!user)
        return res.status(400).json({error: 'User not found'})

    const validPassword = await bcrypt.compare(password, user.password)

    if (!user || !validPassword){
        return res.status(400).json({error: 'Invalid email or password'})
    }

    const token = 'Bearer' + jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1d'})

    res.status(200).json({user, token})
}

export { registerUser, loginUser }