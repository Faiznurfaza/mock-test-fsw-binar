const { List } = require("../../models");

module.exports = {
  getList: async (req, res) => {
    try {
      const Lists = await List.findAll({
        where: {
          user_id: req.session.userid,
        },
      });
      return res.status(200).json({
        status: "Success",
        message: "Get all Todo List Success",
        data: Lists,
      });
    } catch (error) {
      console.log(error);
    }
  },
  addList: async (req, res) => {
    try {
      if (req.body.list === "")
        return res.status(400).json({
          status: "Error",
          message: "List cant be empty",
        });
      const newList = await List.create({
        user_id: req.session.userid,
        list: req.body.list,
      });
      return res.status(201).json({
        status: "Success",
        message: "Added new list",
        data: newList,
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  updateList: async (req, res) => {
    try {
      const id = req.params.id;
      const list = req.body.list;
      const existingList = await List.findOne({
        where: {
          user_id: req.session.userid,
          id: id,
        },
      });

      if (!existingList)
        return res.status(404).json({
          status: "Error",
          message: "List not found",
        });

      if (list !== null && list !== "") {
        existingList.list = list;
      }
      await existingList.save();

      return res.status(200).json({
        status: "Success",
        message: "Data updated",
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: "Internal Server Error",
        error: error,
      });
    }
  },
  deleteList: async (req, res) => {
    try {
      const existingList = await List.findOne({
        where: {
          id: req.params.id,
        },
      });
      if (!existingList)
        return res.status(404).json({
          status: "Error",
          message: "Data not found",
        });

      await List.destroy({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({
        status: "Success",
        message: "Data deleted",
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        message: "Internal Server Error",
        error: error,
      });
    }
  },
};
