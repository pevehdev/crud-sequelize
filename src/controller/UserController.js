const User = require('../models/User')

module.exports = {
    async createUser(req, res) {
        try {
            const { name, email } = req.body
            
            const user = await User.findOne({where: {email} })
            
            if(user){
                res.status(200).json({ message: "Já existe um usuário com este email" })
            }else{
                const user = await User.create({ name, email })
                res.status(200).json({ user })
            }

           
        } catch (error) {
            res.status(400).json({ error })
        }

    }
}


