module.exports = app => {
  const providers = require("../controllers/provider.controller.js");

  var router = require("express").Router();

  // Create a new Provider
  router.post("/", providers.create);

  // Retrieve all Providers
  router.get("/", providers.findAll);

  // Update a Provider with id
  router.put("/:id", providers.update);

  // Delete a Provider with id
  router.delete("/:id", providers.delete);

   // Delete Providers
  router.delete("/", providers.deleteAll);

  app.use('/api/providers', router);
};