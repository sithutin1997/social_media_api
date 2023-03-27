const UserModel = require('../models/User')

//Create user
exports.createUser = async(req,res) => {
    const {name, email, username, password} = req.body;

    //check if the user is already created or not
    const foundUser = await UserModel.find({email});

    if(!foundUser || foundUser.length == 0) {
        const user = new UserModel({
            name, email, username, password
        })
        const response = await user.save();
        res.status(201).json(response);
    } else {
        res.status(409).json({message: "User already exists!"});
    }

}
