const UserModel = require("../models/User")

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
    res.status(409).json({message: "User already exits!"})
  }
}
