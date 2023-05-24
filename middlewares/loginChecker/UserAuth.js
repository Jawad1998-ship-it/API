import jwt from 'jsonwebtoken';
import User from '../../user/models/userModel.js';

const protect = async (req, res, next) => {
    let token;
    token = req.cookies.jwt;
    try {
        if(token)
        {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        }
        else{
            res.status(401);
            throw new Error("Not authorized, invalid token");
        }
        
    } catch (error) {
        next(error);
    }
}

export { protect };