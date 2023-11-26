import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

export const PORT = process.env.PORT

export const SALT = bcrypt.genSaltSync(10);