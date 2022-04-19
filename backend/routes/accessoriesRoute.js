const express = require("express");
const {
  getAllAccessories,
  getAdminAccessories,
  createAccessories,
  updateAccessories,
  deleteAccessories,
  getAccessoriesDetails,
} = require("../controllers/accessoriesController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/accessories").get(getAllAccessories);

router
  .route("/admin/accessories")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminAccessories);

router
  .route("/admin/accessory/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createAccessories);

router
  .route("/admin/accessory/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateAccessories)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteAccessories);

router.route("/accessory/:id").get(getAccessoriesDetails);

module.exports = router;
