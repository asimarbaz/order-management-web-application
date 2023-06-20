const User = require('../app/models/user')
const jwt = require('jsonwebtoken')

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]
    if(token){
        try {
            const tokendata = jwt.verify(token, process.env.JWT_SECRET)
            User.findById(tokendata._id)
                .then((user)=>{
                    req.user = user
                    next()
                })
                .catch(()=>{
                    res.json({notice:'you need to be logged in'})
                })
        }
        catch(e) {
            res.json({errors:e})
        }        
    }
    else{
        res.json({notice:'you need to be logged in'})
    }
}





module.exports = authenticateUser