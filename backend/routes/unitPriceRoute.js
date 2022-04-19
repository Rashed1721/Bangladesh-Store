const express = require("express");
const {
  getAdminUnits,
  createUnit,
  updateUnit,
  deleteUnit,
} = require("../controllers/unitPriceController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/admin/units").get(getAdminUnits);

router
  .route("/admin/unit/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createUnit);

router
  .route("/admin/unit/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateUnit)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteUnit);

module.exports = router;
