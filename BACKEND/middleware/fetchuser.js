const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret-key';

const fetchuser = (req,res,next) => {
    const token = req.header("auth-token")
    if(!token){
        res.status(401).send({error: "Please vaidate with valid token"})
    }
    try {
        const data = jwt.verify(token , JWT_SECRET)
        // console.log(data)
        // console.log(data.userId)
        req.userId = data.userId
        // console.log(req.userId)
        next();
    } catch (error) {
        console.error('Error:', error.message);
        res.status(401).send({error: "Please vaidate with valid token"})
    }
}

module.exports = fetchuser;
