const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {}

userController.register = (req, res) => {
    const body = req.body
    const user = new User(body)
    bcrypt.genSalt(10)
          .then((salt)=>{
            bcrypt.hash(user.password,salt)
                  .then((encrypted)=>{
                    user.password = encrypted
                    user.save()
                        .then((user)=>{
                            res.json(user)
                        })
                        .catch((err)=>{
                            res.json(err)
                        })
                })
            .catch((err) => {
                res.json(err)
            })
        })
}



userController.login = (req, res) => {
    const {email, password } = req.body
    User.findOne({email:email})
        .then((user) => {
            if(user){
                bcrypt.compare(password, user.password)
                      .then((result) => {
                        if(result){
                            const token = jwt.sign({
                                _id:user._id,
                                email:user.email}, process.env.JWT_SECRET)
                            res.json({token: `bearer ${token}`})
                        }
                        else {
                            res.json('invalid email or password')
                        }
                      })
            }
            else {
                res.json('invalid email or password')
            }
        })
        .catch((err) => {
            res.json(err)
        })
}


userController.account = (req, res) => {
    res.json(req.user)
}


module.exports = userController