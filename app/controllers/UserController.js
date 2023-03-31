const UserModel = require("../models/User")

//Get User list
exports.getUsers = async( req, res) => {
  try {
    const users = await UserModel.find()
    res.status(200).json(users)
  } catch(error) {
    res.status(500).json({message: error.message})
  }
}

//Create user
exports.createUser = async (req, res) => {
  const { email } = req.body

  // check if the user is already created or not
  const foundUser = await UserModel.find({ email })
  if (!foundUser || foundUser.length == 0) {
    const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    })
    const response = await user.save()
    res.status(201).json(response)
  } else {
    res.status(409).json({message: "User already exists!"})
  }
}

//Delete User
exports.deleteUser = async (req, res) => {
  const id = req.params.id

  // check if the user exists or not
  const foundUser = await UserModel.find({id})
  if( foundUser || foundUser.length > 0 ) {
    const response = await UserModel.findByIdAndDelete(id)
    res.status(200).json(response)
  } else {
    res.status(404).json({message: "User does not exist!"})
  }
}

//Update User
exports.updateUser = async (req, res) => {
  const id = req.params.id
  const updateData = req.body
  // check if the user exists or not
  const foundUser = await UserModel.find({id})
  try {
    if( foundUser || foundUser.length > 0) {
      const response = await UserModel.findByIdAndUpdate(id, updateData, {new : true})
      res.status(200).json(response)
    } else {
      res.status(404).json({message: "User does not exist!"})
    }
  } catch(error) {
    res.status(400).json({message: error.message})
  }
  
}