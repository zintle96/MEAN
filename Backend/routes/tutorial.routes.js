module.exports = app => {
    const tutorials = require("../controllers/tutorial.controllers");

    var router = require("express").Router();

    //Create a new Tutorial
    router.post("/", tutorials.create);

    //Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    //Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    //Retrieve a single tutorial with id
    router.get("/:id", tutorials.findOne);

    //Update a Tutorial with id 
    router.put("/:id", tutorials.update);

    //Delete a Tutorial with id 
    router.delete("/:id", tutorials.delete);

    //Delete All Tutorials
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};