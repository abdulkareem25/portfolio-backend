import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {

    const authHeader = req.header('Authorization');

    if(!authHeader){
        return res.status(401).json({ msg: "No Token, Authorization Denied!!!"})
    };

    try {
        
        const token = authHeader.split(' ')[1];

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode.user;

        next()

    } catch (err) {
        res.status(401).json({msg: "token is not valid"})
    }
}

export default authMiddleware;