import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

dotenv.config();

export const PORT = process.env.PORT
export const SALT = bcrypt.genSaltSync(10);

export const SECRET_KEY = process.env.SECRET_KEY;

export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;
export const AWS_BUCKET_REGION = process.env.AWS_BUCKET_REGION;
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME;