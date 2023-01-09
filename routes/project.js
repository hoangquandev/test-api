const projectController = require("../controllers/projectController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();
//GET ALL USERS
router.get("/", projectController.getAllProjects);

// ADD PROJECT
router.post(
  "/",
  projectController.createProject
  //   verifyTokenAndUserAuthorization,
);

//DELETE USER
router.delete("/:id", projectController.deleteProject);

module.exports = router;
