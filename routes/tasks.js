var express = require('express');
var router = express.Router();

let tasks = [];

router.get('/getTasks', function (req, res, next) {
    res.json(tasks);
});

router.post('/addTasks', function (req, res, next) {
    let timestamp = Date.now() + Math.random();
    if (req.body && req.body.name && req.body.description && req.body.dueDate) {
        req.body.id = timestamp.toString();
        tasks.push(req.body);
        res.json(tasks);
    } else {
        res.status(400).json({ error: "parameter is not being sent..." });
    }
});

router.delete('/removeTasks/:id', function (req, res, next) {
    let id = req.params.id;
    tasks = tasks.filter(task => task.id !== id);
    res.json(tasks);
});

module.exports = router;
