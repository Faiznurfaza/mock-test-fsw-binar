const { User } = require("../../models");

module.exports = {
  login: async (req, res) => {
    try {
      const password = req.body.password;
      const existingUser = await User.findOne({
        where: { password: password },
      });

      if(!existingUser) return res.status(404).json({
        status: "Error",
        message: "User not found"
      })

      req.session.userid = existingUser.id

      return res.status(200).json({
        status: "Success",
        message: "Login Success",
      })
    } catch (error) {
      console.log(error);
    }
  },
  logout: async(req, res) => {
    try {
        req.session.destroy()
        res.json({
            status: "Success",
            message: "Logout success"
        })
    } catch (error) {
        console.log(error)
    }
  }
};
