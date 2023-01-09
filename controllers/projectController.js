const Project = require("../models/Project");

const projectController = {
  //GET ALL PROJECT
  getAllProjects: async (req, res) => {
    try {
      const project = await Project.find();
      return res.status(200).json(project);
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  //ADD PROJECT
  createProject: async (req, res) => {
    // res.status(200).json(req.body);
    try {
      const newProject = new Project(req.body);
      const savedProject = await newProject.save();
      return res.status(200).json(savedProject);
    } catch (error) {
      return res.status(500).json(error);
    }
    // try {
    //   const newProject = new Project(req.body);
    //   console.log(newProject);
    //   //   const savedProject = await newProject.save();
    //   return res.status(200).json(req.body);
    // } catch (err) {
    //   res.status(500).json(err);
    // }
  },

  //DELETE A Project
  deleteProject: async (req, res) => {
    try {
      await Project.findByIdAndDelete(req.params.id);
      return res.status(200).json("Project deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = projectController;
