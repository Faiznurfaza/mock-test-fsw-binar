const { User } = require("../../models");

module.exports = {
  register: async (req, res) => {
    try {
      const { username, password } = req.body;
      const existingUser = await User.findOne({
        where: {
          password: password
        }
      })

      if(existingUser) return res.status(409).json({
        status: "Error",
        message: "User already registered"
      })

      const newUser = await User.create({
        username: username,
        password: password,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return res.status(201).json({
        status: "Success",
        message: "Register success",
        data: newUser
      })
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: "Error",
        message: "Internal Server Error",
        error: error,
      });
    }
  },

  login: async (req, res) => {
    try {
      const password = req.body.password;
      const existingUser = await User.findOne({
        where: { password: password },
      });

      if (!existingUser)
        return res.status(404).json({
          status: "Error",
          message: "User not found",
        });

      req.session.userid = existingUser.id;

      return res.status(200).json({
        status: "Success",
        message: "Login Success",
      });
    } catch (error) {
      console.log(error);
    }
  },
  logout: async (req, res) => {
    try {
      req.session.destroy();
      res.json({
        status: "Success",
        message: "Logout success",
      });
    } catch (error) {
      console.log(error);
    }
  },
};
