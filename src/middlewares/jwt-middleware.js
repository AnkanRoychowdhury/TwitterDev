import JWT from 'passport-jwt';
import { User } from '../models/index.js';
import { SECRET_KEY } from '../config/serverConfig.js';

const jwtStrategy = JWT.Strategy;
const extractJwt = JWT.ExtractJwt;

const options = {
    jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
}

export const passportAuth = (passport) => {
    try {
        passport.use(new jwtStrategy(options, async (jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if(!user){
                done(null,false);
            }
            else {
                done(null,user);
            }
        }));
    } catch (error) {
        throw error;
    }
}