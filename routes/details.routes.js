const controllers = require("../controllers/userdetails.controllers");

const router = require("express").Router();

router.post("/create",controllers.create)

router.put("/update/:id",controllers.update);

router.get("/view/:id",controllers.read);

router.get("/viewall",controllers.readall);

router.delete("/delete/:id",controllers.destroy);

router.delete("/demolish",controllers.demolish)

module.exports = router