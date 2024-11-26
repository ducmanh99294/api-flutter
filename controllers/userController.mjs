import User from "../models/userModel.mjs";

class user_controller {
   static getAllUsers = async (req, res) => {
    try {
      const users = await User.findAll()
      res.json(users)
    } catch (err) {
      console.error('Error fetching users:', err)
      res.status(500).json({ error: 'Error fetching users' })
    }
}
}

export default user_controller

