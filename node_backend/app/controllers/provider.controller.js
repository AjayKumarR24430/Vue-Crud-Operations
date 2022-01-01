const db = require("../models");
const Provider = db.providers;


// Create and Save a new Provider
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({ message: "Provider name cannot be empty" });
    return;
  }

  // Create a Provider
  const provider = new Provider({
    name: req.body.name
  });

  // Save Client in the database
  provider
    .save(provider)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the provider."
      });
    });
};


// Retrieve all Providers from the database.
exports.findAll = (req, res) => {

  Provider.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving providers."
      });
    });
};

// Update a client by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Provider.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Provider with id=${id}. Maybe Provider was not found!`
        });
      } else res.send({ message: "Provider was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Provider with id=" + id
      });
    });
};

// Delete a Provider with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Provider.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Provider with id=${id}. Maybe Provider was not found!`
        });
      } else {
        res.send({
          message: "Provider was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Provider with id=" + id
      });
    });
};


// Delete all Providers from the database.
exports.deleteAll = (req, res) => {
  Provider.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Providers were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all providers."
      });
    });
};